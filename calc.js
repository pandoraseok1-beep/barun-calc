// 견적 계산 로직 (화면과 분리된 순수 계산). 모든 금액은 원 단위 정수.
(function (root) {
  'use strict';

  var USIM_RATE = 0.75;      // 선택약정 25% 할인 (1년 약정 고정)
  var OFFHOUR_DEFAULT = 1.25; // 야간/주말 설치비 할증

  var HOME_LABEL = { internet: '인터넷', tv: '인터넷+TV', tvonly: 'TV' };

  function won(n) { return Number(n).toLocaleString('ko-KR') + '원'; }

  // 구간표 [[기준금액, 할인액], ...] 에서 amount 이상인 가장 높은 구간의 할인액 (해당 없으면 0)
  function tierAmount(tiers, amount) {
    var d = 0;
    for (var i = 0; i < tiers.length; i++) if (amount >= tiers[i][0]) d = tiers[i][1];
    return d;
  }

  function findCarrier(data, key) {
    for (var i = 0; i < data.carriers.length; i++) if (data.carriers[i].key === key) return data.carriers[i];
    return null;
  }

  function plansFor(data, carrierKey, type, tvCount) {
    var c = findCarrier(data, carrierKey);
    if (!c) return [];
    if (type === 'internet') return c.internet;
    if (type === 'tvonly') return c.tvOnly || [];
    return c.tv[String(tvCount)] || [];
  }

  function findPlan(data, carrierKey, type, tvCount, code) {
    var list = plansFor(data, carrierKey, type, tvCount);
    for (var i = 0; i < list.length; i++) if (list[i].code === code) return list[i];
    return null;
  }

  function usimPlansFor(data, carrierKey) {
    return data.usim.filter(function (u) { return u.carrier === carrierKey; });
  }

  function findUsim(data, code) {
    for (var i = 0; i < data.usim.length; i++) if (data.usim[i].code === code) return data.usim[i];
    return null;
  }

  function installFee(carrier, type, tvCount, plan, optIdx) {
    if (plan && plan.installOptions) return plan.installOptions[optIdx || 0].fee;
    if (plan && typeof plan.install === 'number') return plan.install;
    if (type === 'internet') return carrier.install.installFeeInternet;
    return Number(tvCount) >= 2 ? carrier.install.installFeeTv2 : carrier.install.installFeeTv1;
  }

  // input: { carrier, type:'internet'|'tv', tvCount, plan, bundle:'none'|'phone'|'usim', usimLines:[code], offhour:bool }
  function quote(data, input) {
    var errors = [], warnings = [];
    var c = findCarrier(data, input.carrier);
    if (!c) return { errors: ['통신사를 선택하세요.'] };
    var p = findPlan(data, input.carrier, input.type, input.tvCount, input.plan);
    if (!p) return { errors: ['요금제를 선택하세요.'] };
    if (p.blocked) errors.push('견적 불가: ' + p.blocked);
    if (p.check) warnings.push('확인 필요: ' + p.check);

    var bundle = input.bundle || 'none';
    if (bundle !== 'none' && !p.bundleFee) {
      errors.push(c.label + ' 이 상품은 휴대폰 결합 요금 정보가 없습니다.');
    }
    var lines = [];
    if (bundle === 'usim') {
      var codes = input.usimLines || [];
      if (!codes.length) errors.push('유심 요금제를 선택하세요.');
      codes.forEach(function (code, i) {
        var u = findUsim(data, code);
        if (!u || u.carrier !== c.key) { errors.push((i + 1) + '번 회선 유심 요금제를 선택하세요.'); return; }
        var disc = Math.round(u.fee * USIM_RATE);
        lines.push({
          code: u.code, name: u.name, data: u.data, fee: u.fee,
          discount: u.fee - disc, monthly: disc,
          gift: p.speed === '100M' ? u.gift100 : u.gift500
        });
      });
    }
    if (errors.length) return { errors: errors, warnings: warnings };

    // KT 프리미엄 싱글결합: 인터넷 베이직(500M) 이상 + 월정액 기준 이상 휴대폰 1회선일 때 휴대폰 월정액 25% 추가 할인
    var ps = c.premiumSingle, premium = null;
    if (ps && lines.length) {
      var eligibleLines = lines.filter(function (l) { return l.fee >= ps.minFee; });
      var speedOk = ps.speeds.indexOf(p.speed) >= 0 && input.type !== 'tvonly';
      if (lines.length === 1 && eligibleLines.length === 1 && speedOk) {
        var l0 = lines[0], pd = Math.round(l0.fee * ps.rate);
        l0.premiumDiscount = pd; l0.monthly -= pd;
        premium = { name: ps.name, amount: pd, minFee: ps.minFee };
      } else if (eligibleLines.length && lines.length === 1 && !speedOk) {
        warnings.push(ps.name + ' 미적용: 인터넷 ' + ps.speeds.join('/') + ' 이상이어야 합니다. 500M 이상으로 바꾸면 휴대폰 요금이 ' + won(Math.round(eligibleLines[0].fee * ps.rate)) + ' 더 할인됩니다.');
      } else if (eligibleLines.length && lines.length > 1) {
        warnings.push(ps.name + ' 미적용: 휴대폰 1회선만 결합할 때 적용됩니다. 총액결합으로 계산했습니다. (프리미엄 가족결합은 이 계산기에 미반영)');
      }
    }

    var useBundle = bundle !== 'none';
    var rental = p.rental || 0;
    var mc = c.mobileCombine, combine = null;
    // KT 인터넷 단독 + 휴대폰 결합(정액/총액): 인터넷 추가 할인 (프리미엄 싱글결합과 중복 불가)
    var ex = mc && mc.internetOnlyExtra, homeExtra = 0;
    if (ex && useBundle && !premium && input.type === 'internet' && ex.speeds.indexOf(p.speed) >= 0) homeExtra = ex.amount;
    var homeMonthly = (useBundle ? p.bundleFee : p.fee) - homeExtra + rental;
    // KT 정액/총액 결합 (프리미엄 싱글결합이 적용되지 않은 경우)
    if (mc && lines.length && !premium) {
      var mTotal = lines.reduce(function (s, l) { return s + l.fee; }, 0);
      if (mTotal >= mc.threshold) {
        var ch = mc.chongaek, slim = ch.slimSpeeds.indexOf(p.speed) >= 0;
        var hh = tierAmount(slim ? ch.slim : ch.standard, mTotal);
        combine = { kind: 'chongaek', name: ch.name, mobileTotal: mTotal, household: hh, amount: hh };
      } else {
        var je = mc.jeongaek, sum = 0;
        lines.forEach(function (l) { var d = tierAmount(je.tiers, l.fee); l.combineDiscount = d; l.monthly -= d; sum += d; });
        combine = { kind: 'jeongaek', name: je.name, mobileTotal: mTotal, household: 0, amount: sum };
      }
    }
    var usimMonthly = lines.reduce(function (s, l) { return s + l.monthly; }, 0) - (combine ? combine.household : 0);
    var inst = installFee(c, input.type, input.tvCount, p, input.installOption);
    var installLabel = p.installOptions ? p.installOptions[input.installOption || 0].label : '';
    var rate = c.install.offhourRate || OFFHOUR_DEFAULT;
    var offhour = !!input.offhour && !p.installOptions;
    var instFinal = offhour ? Math.round(inst * rate) : inst;

    var giftItems = [];
    if (p.gift) giftItems.push({ label: HOME_LABEL[input.type] + ' 지원금', amount: p.gift });
    if (p.secret) giftItems.push({ label: '추가 지원금', amount: p.secret });
    if (p.extraSetTop) giftItems.push({ label: 'TV 추가 셋톱 지원금', amount: p.extraSetTop });
    lines.forEach(function (l, i) {
      if (l.gift) giftItems.push({ label: '유심 ' + (lines.length > 1 ? (i + 1) + '회선 ' : '') + '지원금', amount: l.gift });
    });
    var giftTotal = giftItems.reduce(function (s, g) { return s + g.amount; }, 0);

    return {
      errors: [], warnings: warnings,
      carrier: c, plan: p, type: input.type, tvCount: input.type === 'tv' ? (Number(input.tvCount) || 1) : 0,
      bundle: bundle,
      homeFee: p.fee, rental: rental, giftBlank: p.gift === null,
      homeBundleDiscount: useBundle ? p.fee - p.bundleFee + homeExtra : 0, homeExtra: homeExtra,
      homeMonthly: homeMonthly,
      usimLines: lines, usimMonthly: usimMonthly,
      monthlyTotal: homeMonthly + usimMonthly,
      install: inst, installOffhour: offhour, installFinal: instFinal, installLabel: installLabel,
      premiumSingle: premium, combine: combine,
      giftItems: giftItems, giftTotal: giftTotal,
      basisDate: data.basisDate
    };
  }

  function productTitle(q) {
    var t = q.carrier.label + ' ' + HOME_LABEL[q.type] + (q.tvCount > 1 ? ' ' + q.tvCount + '대' : '');
    if (q.usimLines.length) t += '+유심';
    return t;
  }

  function buildMessage(q, opt) {
    opt = opt || {};
    var L = [];
    var hi = opt.customer ? opt.customer + ' 고객님, 안녕하세요.' : '안녕하세요, 고객님.';
    L.push(hi);
    L.push('요청하신 ' + productTitle(q) + ' 견적 안내드립니다.');
    L.push('');
    L.push('■ 가입 상품');
    L.push('- ' + q.plan.name + ' (3년 약정)');
    q.usimLines.forEach(function (l, i) {
      L.push('- 유심' + (q.usimLines.length > 1 ? ' ' + (i + 1) + '회선: ' : ': ') + l.name + ' (' + l.data + ', 선택약정 1년)');
    });
    L.push('');
    L.push('■ 월 요금 (부가세 포함)');
    if (q.homeBundleDiscount) {
      L.push('- ' + HOME_LABEL[q.type] + ': ' + won(q.homeFee) + ' → ' + won(q.homeFee - q.homeBundleDiscount) + ' (휴대폰 결합할인 -' + won(q.homeBundleDiscount) + ')');
    } else {
      L.push('- ' + HOME_LABEL[q.type] + ': ' + won(q.homeFee));
    }
    if (q.rental) L.push('- 셋톱박스 임대료: ' + won(q.rental));
    q.usimLines.forEach(function (l, i) {
      L.push('- 유심' + (q.usimLines.length > 1 ? ' ' + (i + 1) + '회선' : '') + ': ' + won(l.fee) + ' → ' + won(l.monthly) + ' (선택약정 25% -' + won(l.discount) + (l.premiumDiscount ? ', ' + q.premiumSingle.name + ' -' + won(l.premiumDiscount) : '') + (l.combineDiscount ? ', ' + q.combine.name + ' -' + won(l.combineDiscount) : '') + ')');
    });
    if (q.combine && q.combine.household) {
      L.push('- ' + q.combine.name + ' 휴대폰 할인: -' + won(q.combine.household) + ' (휴대폰 요금 합계 ' + won(q.combine.mobileTotal) + ' 기준)');
    }
    L.push('▶ 월 합계: ' + won(q.monthlyTotal));
    L.push('');
    L.push('■ 설치비: ' + (q.installFinal === 0 ? '무료' : won(q.installFinal) + (q.installOffhour ? ' (야간/주말 설치)' : '') + (q.installLabel ? ' (' + q.installLabel + ')' : '') + ' (1회)'));
    if (q.giftTotal) {
      L.push('');
      L.push('■ 사은품 (현금)');
      q.giftItems.forEach(function (g) { L.push('- ' + g.label + ': ' + won(g.amount)); });
      L.push('▶ 사은품 합계: ' + won(q.giftTotal));
    }
    L.push('');
    L.push('※ ' + q.basisDate + ' 기준 요금이며, 약정 기간 내 해지 시 위약금이 발생합니다.');
    if (q.premiumSingle) L.push('※ ' + q.premiumSingle.name + ': KT 인터넷 베이직(500M) 이상 + 월정액 ' + won(q.premiumSingle.minFee) + ' 이상 휴대폰 1회선 결합 시 적용됩니다. 휴대폰 요금제를 낮추거나 결합 회선을 추가하면 할인이 달라집니다.');
    if (q.bundle === 'phone') L.push('※ 휴대폰 결합할인은 ' + q.carrier.label + ' 휴대폰 회선 결합 시 적용됩니다.');
    if (opt.shop) L.push('');
    if (opt.shop) L.push(opt.shop);
    return L.join('\n');
  }

  var api = { quote: quote, buildMessage: buildMessage, plansFor: plansFor, usimPlansFor: usimPlansFor, findCarrier: findCarrier, won: won };
  root.RateCalc = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : this);
