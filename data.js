// 요금표 데이터 - 요금이 바뀌면 이 파일만 수정하세요. (금액 단위: 원, 부가세 포함)
// fee=정상 월요금(3년약정), bundleFee=휴대폰 결합 시 월요금, gift=지원금, secret=추가지원금, extraSetTop=추가셋톱 지원금
// blocked 가 있으면 견적이 차단됩니다. 요금 확인 후 blocked 줄을 지우세요.
window.RATE_DATA = {
 "basisDate": "2026-09-26",
 "source": "gigapang.com 공개 요금 데이터",
 "carriers": [
  {
   "key": "KT",
   "label": "KT",
   "install": {
    "installFeeInternet": 36000,
    "installFeeTv1": 56200,
    "installFeeTv2": 71600,
    "offhourRate": 1.25
   },
   "internet": [
    {
     "code": "KT100-A-I",
     "speed": "100M",
     "name": "KT 슬림(100M)+AP",
     "fee": 23100,
     "bundleFee": 17600,
     "gift": 90000,
     "secret": 60000,
     "extraSetTop": 0
    },
    {
     "code": "KT500-A-I",
     "speed": "500M",
     "name": "KT 베이직(500M)+AP",
     "fee": 34100,
     "bundleFee": 28600,
     "gift": 130000,
     "secret": 100000,
     "extraSetTop": 0
    },
    {
     "code": "KT1G-A-I",
     "speed": "1G",
     "name": "KT 에센스(1G)+AP",
     "fee": 38500,
     "bundleFee": 33000,
     "gift": 150000,
     "secret": 120000,
     "extraSetTop": 0
    }
   ],
   "tv": {
    "1": [
     {
      "code": "KT100-K1",
      "speed": "100M",
      "name": "KT 슬림(100M)+베이직(지니3) 239채널+와이파이",
      "fee": 39600,
      "bundleFee": 34100,
      "gift": 370000,
      "secret": 100000,
      "extraSetTop": 0
     },
     {
      "code": "KT100-K2",
      "speed": "100M",
      "name": "KT 슬림(100M)+라이트(지니3) 243채널+와이파이",
      "fee": 40700,
      "bundleFee": 35200,
      "gift": 370000,
      "secret": 110000,
      "extraSetTop": 0
     },
     {
      "code": "KT100-K3",
      "speed": "100M",
      "name": "KT 슬림(100M)+에센스(지니3) 269채널+와이파이",
      "fee": 44000,
      "bundleFee": 38500,
      "gift": 370000,
      "secret": 110000,
      "extraSetTop": 0
     },
     {
      "code": "KT100-K4",
      "speed": "100M",
      "name": "KT 슬림(100M)+모든G(지니3) 250채널+와이파이",
      "fee": 47300,
      "bundleFee": 41800,
      "gift": 370000,
      "secret": 220000,
      "extraSetTop": 0
     },
     {
      "code": "KT500-K5",
      "speed": "500M",
      "name": "KT 베이직(500M)+베이직(지니3) 239채널+와이파이",
      "fee": 45100,
      "bundleFee": 39600,
      "gift": 450000,
      "secret": 120000,
      "extraSetTop": 0
     },
     {
      "code": "KT500-K6",
      "speed": "500M",
      "name": "KT 베이직(500M)+라이트(지니3) 243채널+와이파이",
      "fee": 46200,
      "bundleFee": 40700,
      "gift": 450000,
      "secret": 130000,
      "extraSetTop": 0
     },
     {
      "code": "KT500-K7",
      "speed": "500M",
      "name": "KT 베이직(500M)+에센스(지니3) 269채널+와이파이",
      "fee": 49500,
      "bundleFee": 44000,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 0
     },
     {
      "code": "KT500-K8",
      "speed": "500M",
      "name": "KT 베이직(500M)+모든G(지니3) 250채널+와이파이",
      "fee": 52800,
      "bundleFee": 47300,
      "gift": 450000,
      "secret": 260000,
      "extraSetTop": 0
     },
     {
      "code": "KT1G-K9",
      "speed": "1G",
      "name": "KT 에센스(1G)+베이직(지니3) 239채널+와이파이",
      "fee": 49500,
      "bundleFee": 44000,
      "gift": 450000,
      "secret": 170000,
      "extraSetTop": 0
     },
     {
      "code": "KT1G-K10",
      "speed": "1G",
      "name": "KT 에센스(1G)+라이트(지니3) 243채널+와이파이",
      "fee": 50600,
      "bundleFee": 45100,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 0
     },
     {
      "code": "KT1G-K11",
      "speed": "1G",
      "name": "KT 에센스(1G)+에센스(지니3) 269채널+와이파이",
      "fee": 53900,
      "bundleFee": 48400,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 0
     },
     {
      "code": "KT1G-K12",
      "speed": "1G",
      "name": "KT 에센스(1G)+모든G(지니3) 250채널+와이파이",
      "fee": 57200,
      "bundleFee": 51700,
      "gift": 450000,
      "secret": 290000,
      "extraSetTop": 0
     }
    ],
    "2": [
     {
      "code": "KT100-KA",
      "speed": "100M",
      "name": "KT 슬림(100M)+베이직(메인) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 51370,
      "bundleFee": 45870,
      "gift": 370000,
      "secret": 100000,
      "extraSetTop": 30000
     },
     {
      "code": "KT100-KB",
      "speed": "100M",
      "name": "KT 슬림(100M)+라이트(메인) 243채널+베이직(추가) 239채널+와이파이",
      "fee": 52470,
      "bundleFee": 46970,
      "gift": 370000,
      "secret": 110000,
      "extraSetTop": 30000
     },
     {
      "code": "KT100-KC",
      "speed": "100M",
      "name": "KT 슬림(100M)+에센스(메인) 269채널+베이직(추가) 239채널+와이파이",
      "fee": 55770,
      "bundleFee": 50270,
      "gift": 370000,
      "secret": 110000,
      "extraSetTop": 30000
     },
     {
      "code": "KT100-KD",
      "speed": "100M",
      "name": "KT 슬림(100M)+모든G(메인) 250채널+베이직(추가) 239채널+와이파이",
      "fee": 59070,
      "bundleFee": 53570,
      "gift": 370000,
      "secret": 220000,
      "extraSetTop": 30000
     },
     {
      "code": "KT500-KE",
      "speed": "500M",
      "name": "KT 베이직(500M)+베이직(메인) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 56870,
      "bundleFee": 51370,
      "gift": 450000,
      "secret": 120000,
      "extraSetTop": 30000
     },
     {
      "code": "KT500-KF",
      "speed": "500M",
      "name": "KT 베이직(500M)+라이트(메인) 243채널+베이직(추가) 239채널+와이파이",
      "fee": 57970,
      "bundleFee": 52470,
      "gift": 450000,
      "secret": 130000,
      "extraSetTop": 30000
     },
     {
      "code": "KT500-KG",
      "speed": "500M",
      "name": "KT 베이직(500M)+에센스(메인) 269채널+베이직(추가) 239채널+와이파이",
      "fee": 61270,
      "bundleFee": 55770,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 30000
     },
     {
      "code": "KT500-KH",
      "speed": "500M",
      "name": "KT 베이직(500M)+모든G(메인) 250채널+베이직(추가) 239채널+와이파이",
      "fee": 64570,
      "bundleFee": 59070,
      "gift": 450000,
      "secret": 260000,
      "extraSetTop": 30000
     },
     {
      "code": "KT1G-KI",
      "speed": "1G",
      "name": "KT 에센스(1G)+베이직(메인) 239채널+베이직(추가) 239채널+AP",
      "fee": 61270,
      "bundleFee": 55770,
      "gift": 450000,
      "secret": 170000,
      "extraSetTop": 30000
     },
     {
      "code": "KT1G-KJ",
      "speed": "1G",
      "name": "KT 에센스(1G)+라이트(메인) 243채널 +베이직(추가) 239채널+AP",
      "fee": 62370,
      "bundleFee": 56870,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 30000
     },
     {
      "code": "KT1G-KK",
      "speed": "1G",
      "name": "KT 에센스(1G)+에센스(메인) 269채널+베이직(추가) 239채널+AP",
      "fee": 65670,
      "bundleFee": 60170,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 30000
     },
     {
      "code": "KT1G-KL",
      "speed": "1G",
      "name": "KT 에센스(1G)+모든G(메인) 250채널+베이직(추가) 239채널+AP",
      "fee": 68970,
      "bundleFee": 63470,
      "gift": 450000,
      "secret": 290000,
      "extraSetTop": 30000
     }
    ],
    "3": [
     {
      "code": "KT100-KA-1",
      "speed": "100M",
      "name": "KT 슬림(100M)+베이직(메인) 239채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 40700,
      "bundleFee": 57640,
      "gift": 370000,
      "secret": 100000,
      "extraSetTop": 60000,
      "blocked": "원본 정상가(40,700원)가 결합가(57,640원)보다 낮음 - 요금 확인 필요"
     },
     {
      "code": "KT100-KB-1",
      "speed": "100M",
      "name": "KT 슬림(100M)+라이트(메인) 243채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 64240,
      "bundleFee": 58740,
      "gift": 370000,
      "secret": 110000,
      "extraSetTop": 60000
     },
     {
      "code": "KT100-KC-1",
      "speed": "100M",
      "name": "KT 슬림(100M)+에센스(메인) 269채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 67540,
      "bundleFee": 62040,
      "gift": 370000,
      "secret": 110000,
      "extraSetTop": 60000
     },
     {
      "code": "KT100-KD-1",
      "speed": "100M",
      "name": "KT 슬림(100M)+모든G(메인) 250채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 68640,
      "bundleFee": 63140,
      "gift": 370000,
      "secret": 220000,
      "extraSetTop": 60000
     },
     {
      "code": "KT500-KE-1",
      "speed": "500M",
      "name": "KT 베이직(500M)+베이직(메인) 239채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 68640,
      "bundleFee": 63140,
      "gift": 450000,
      "secret": 120000,
      "extraSetTop": 60000
     },
     {
      "code": "KT500-KF-1",
      "speed": "500M",
      "name": "KT 베이직(500M)+라이트(메인) 243채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 69740,
      "bundleFee": 64240,
      "gift": 450000,
      "secret": 130000,
      "extraSetTop": 60000
     },
     {
      "code": "KT500-KG-1",
      "speed": "500M",
      "name": "KT 베이직(500M)+에센스(메인) 269채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 73040,
      "bundleFee": 67540,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 60000
     },
     {
      "code": "KT500-KH-1",
      "speed": "500M",
      "name": "KT 베이직(500M)+모든G(메인) 250채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 74140,
      "bundleFee": 68640,
      "gift": 450000,
      "secret": 260000,
      "extraSetTop": 60000
     },
     {
      "code": "KT1G-KI-1",
      "speed": "1G",
      "name": "KT 에센스(1G)+베이직(메인) 239채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 73040,
      "bundleFee": 67540,
      "gift": 450000,
      "secret": 170000,
      "extraSetTop": 60000
     },
     {
      "code": "KT1G-KJ-1",
      "speed": "1G",
      "name": "KT 에센스(1G)+라이트(메인) 243채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 74140,
      "bundleFee": 68640,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 60000
     },
     {
      "code": "KT1G-KK-1",
      "speed": "1G",
      "name": "KT 에센스(1G)+에센스(메인) 269채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 77440,
      "bundleFee": 71940,
      "gift": 450000,
      "secret": 180000,
      "extraSetTop": 60000
     },
     {
      "code": "KT1G-KL-1",
      "speed": "1G",
      "name": "KT 에센스(1G)+모든G(메인) 250채널+베이직(추가) 239채널+베이직(추가) 239채널+와이파이",
      "fee": 80740,
      "bundleFee": 75240,
      "gift": 450000,
      "secret": 290000,
      "extraSetTop": 60000
     }
    ]
   },
   "tvOnly": [],
   "premiumSingle": {
    "name": "프리미엄 싱글결합",
    "minFee": 77000,
    "rate": 0.25,
    "speeds": [
     "500M",
     "1G"
    ]
   },
   "mobileCombine": {
    "threshold": 69000,
    "internetOnlyExtra": {
     "name": "인터넷+모바일 추가할인",
     "amount": 5500,
     "speeds": [
      "500M",
      "1G"
     ]
    },
    "jeongaek": {
     "name": "정액결합할인",
     "tiers": [
      [
       37000,
       3000
      ],
      [
       61000,
       5000
      ],
      [
       77000,
       7000
      ]
     ]
    },
    "chongaek": {
     "name": "총액결합할인",
     "slimSpeeds": [
      "100M"
     ],
     "standard": [
      [
       64900,
       5500
      ],
      [
       108900,
       16610
      ],
      [
       141900,
       22110
      ],
      [
       174900,
       27610
      ]
     ],
     "slim": [
      [
       64900,
       3300
      ],
      [
       108900,
       14300
      ],
      [
       141900,
       18700
      ],
      [
       174900,
       23100
      ]
     ]
    }
   }
  },
  {
   "key": "SK",
   "label": "SK브로드밴드",
   "install": {
    "installFeeInternet": 36300,
    "installFeeTv1": 56100,
    "installFeeTv2": 73700,
    "offhourRate": 1.25
   },
   "internet": [
    {
     "code": "SK100-A",
     "speed": "100M",
     "name": "SK 광랜(100M)+AP",
     "fee": 23100,
     "bundleFee": 18700,
     "gift": 100000,
     "secret": 80000,
     "extraSetTop": 0
    },
    {
     "code": "SK500-A",
     "speed": "500M",
     "name": "SK 기가라이트(500)+AP",
     "fee": 34100,
     "bundleFee": 23100,
     "gift": 170000,
     "secret": 100000,
     "extraSetTop": 0
    },
    {
     "code": "SK1G-A",
     "speed": "1G",
     "name": "SK 기가(1G)+AP",
     "fee": 39600,
     "bundleFee": 26400,
     "gift": 170000,
     "secret": 100000,
     "extraSetTop": 0
    }
   ],
   "tv": {
    "1": [
     {
      "code": "SK100-B1",
      "speed": "100M",
      "name": "SK 광랜(100M)+이코노미(스마트3) 182채널+와이파이",
      "fee": 36300,
      "bundleFee": 31900,
      "gift": 290000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "SK100-B2",
      "speed": "100M",
      "name": "SK 광랜(100M)+스탠다드(스마트3) 235채널+와이파이",
      "fee": 39600,
      "bundleFee": 35200,
      "gift": 290000,
      "secret": 260000,
      "extraSetTop": 0
     },
     {
      "code": "SK100-B3",
      "speed": "100M",
      "name": "SK 광랜(100M)+ALL(스마트3) 255채널+와이파이",
      "fee": 42900,
      "bundleFee": 38500,
      "gift": 290000,
      "secret": 300000,
      "extraSetTop": 0
     },
     {
      "code": "SK500-B4",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+이코노미(스마트3) 182채널+와이파이",
      "fee": 42900,
      "bundleFee": 36300,
      "gift": 370000,
      "secret": 160000,
      "extraSetTop": 0
     },
     {
      "code": "SK500-B5",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+스탠다드(스마트3) 235채널+와이파이",
      "fee": 46200,
      "bundleFee": 39600,
      "gift": 370000,
      "secret": 300000,
      "extraSetTop": 0
     },
     {
      "code": "SK500-B6",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+ALL(스마트3) 255채널+와이파이",
      "fee": 49500,
      "bundleFee": 42900,
      "gift": 370000,
      "secret": 320000,
      "extraSetTop": 0
     },
     {
      "code": "SK1G-B7",
      "speed": "1G",
      "name": "SK 기가(1G)+이코노미(스마트3) 182채널+와이파이",
      "fee": 48400,
      "bundleFee": 39600,
      "gift": 370000,
      "secret": 160000,
      "extraSetTop": 0
     },
     {
      "code": "SK1G-B8",
      "speed": "1G",
      "name": "SK 기가(1G+스탠다드(스마트3) 235채널+와이파이",
      "fee": 51700,
      "bundleFee": 42900,
      "gift": 370000,
      "secret": 300000,
      "extraSetTop": 0
     },
     {
      "code": "SK1G-B9",
      "speed": "1G",
      "name": "SK 기가(1G)+ALL(스마트3) 255채널+와이파이",
      "fee": 55000,
      "bundleFee": 46200,
      "gift": 370000,
      "secret": 320000,
      "extraSetTop": 0
     }
    ],
    "2": [
     {
      "code": "SK100-BA",
      "speed": "100M",
      "name": "SK 광랜(100M)+이코노미(메인) 182채널+스탠다드(추가) 235채널+와이파이",
      "fee": 46200,
      "bundleFee": 41800,
      "gift": 290000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "SK100-BB",
      "speed": "100M",
      "name": "SK 광랜(100M)+스탠다드(메인) 235채널+스탠다드(추가)235채널+와이파이",
      "fee": 49500,
      "bundleFee": 45100,
      "gift": 290000,
      "secret": 260000,
      "extraSetTop": 30000
     },
     {
      "code": "SK100-BC",
      "speed": "100M",
      "name": "SK 광랜(100M)+ALL(메인) 255채널+스탠다드(추가) 235채널+와이파이",
      "fee": 52800,
      "bundleFee": 48400,
      "gift": 290000,
      "secret": 300000,
      "extraSetTop": 30000
     },
     {
      "code": "SK500-BD",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+이코노미(메인) 182채널+스탠다드(추가) 235채널+와이파이",
      "fee": 52800,
      "bundleFee": 46200,
      "gift": 370000,
      "secret": 160000,
      "extraSetTop": 30000
     },
     {
      "code": "SK500-BE",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+스탠다드(메인) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 56100,
      "bundleFee": 49500,
      "gift": 370000,
      "secret": 300000,
      "extraSetTop": 30000
     },
     {
      "code": "SK500-BF",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+ALL(메인) 255채널+스탠다드(추가) 235채널+와이파이",
      "fee": 59400,
      "bundleFee": 52800,
      "gift": 370000,
      "secret": 320000,
      "extraSetTop": 30000
     },
     {
      "code": "SK1G-BG",
      "speed": "1G",
      "name": "SK 기가(1G)+이코노미(메인) 182채널+스탠다드(추가) 235채널+와이파이",
      "fee": 58300,
      "bundleFee": 49500,
      "gift": 370000,
      "secret": 160000,
      "extraSetTop": 30000
     },
     {
      "code": "SK1G-BH",
      "speed": "1G",
      "name": "SK 기가(1G)+스탠다드(메인) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 61600,
      "bundleFee": 52800,
      "gift": 370000,
      "secret": 300000,
      "extraSetTop": 30000
     },
     {
      "code": "SK1G-BI",
      "speed": "1G",
      "name": "SK 기가(1G)+ALL(메인) 255채널+스탠다드(추가) 235채널+와이파이",
      "fee": 64900,
      "bundleFee": 56100,
      "gift": 370000,
      "secret": 320000,
      "extraSetTop": 30000
     }
    ],
    "3": [
     {
      "code": "SK100-BA-1",
      "speed": "100M",
      "name": "SK 광랜(100M)+이코노미(메인) 182채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 56100,
      "bundleFee": 51700,
      "gift": 290000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "SK100-BB-1",
      "speed": "100M",
      "name": "SK 광랜(100M)+스탠다드(메인) 235채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 59400,
      "bundleFee": 55000,
      "gift": 290000,
      "secret": 260000,
      "extraSetTop": 60000
     },
     {
      "code": "SK100-BC-1",
      "speed": "100M",
      "name": "SK 광랜(100M)+ALL(메인) 255채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 62700,
      "bundleFee": 58300,
      "gift": 290000,
      "secret": 300000,
      "extraSetTop": 60000
     },
     {
      "code": "SK500-BD-1",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+이코노미(메인) 182채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 62700,
      "bundleFee": 56100,
      "gift": 370000,
      "secret": 160000,
      "extraSetTop": 60000
     },
     {
      "code": "SK500-BE-1",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+스탠다드(메인) 235채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 66000,
      "bundleFee": 59400,
      "gift": 370000,
      "secret": 300000,
      "extraSetTop": 60000
     },
     {
      "code": "SK500-BF-1",
      "speed": "500M",
      "name": "SK 기가라이트(500M)+ALL(메인) 255채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 69300,
      "bundleFee": 62700,
      "gift": 370000,
      "secret": 320000,
      "extraSetTop": 60000
     },
     {
      "code": "SK1G-BG-1",
      "speed": "1G",
      "name": "SK 기가(1G)+이코노미(메인) 182채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 68200,
      "bundleFee": 59400,
      "gift": 370000,
      "secret": 160000,
      "extraSetTop": 60000
     },
     {
      "code": "SK1G-BH-1",
      "speed": "1G",
      "name": "SK 기가(1G)+스탠다드(메인) 235채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 71500,
      "bundleFee": 62700,
      "gift": 370000,
      "secret": 300000,
      "extraSetTop": 60000
     },
     {
      "code": "SK1G-BI-1",
      "speed": "1G",
      "name": "SK 기가(1G)+ALL(메인) 255채널+스탠다드(추가) 235채널+스탠다드(추가) 235채널+와이파이",
      "fee": 74800,
      "bundleFee": 66000,
      "gift": 370000,
      "secret": 320000,
      "extraSetTop": 60000
     }
    ]
   },
   "tvOnly": []
  },
  {
   "key": "LG",
   "label": "LG U+",
   "install": {
    "installFeeInternet": 36300,
    "installFeeTv1": 56100,
    "installFeeTv2": 78100,
    "offhourRate": 1.25
   },
   "internet": [
    {
     "code": "LG100-P-I",
     "speed": "100M",
     "name": "LG 와이파이 광랜(100M)+AP",
     "fee": 22000,
     "bundleFee": 16500,
     "gift": 200000,
     "secret": 30000,
     "extraSetTop": 0
    },
    {
     "code": "LG500-P-I",
     "speed": "500M",
     "name": "LG 와이파이 광랜(500M)+AP",
     "fee": 33000,
     "bundleFee": 23100,
     "gift": 230000,
     "secret": 100000,
     "extraSetTop": 0
    },
    {
     "code": "LG1G-P-I",
     "speed": "1G",
     "name": "LG 와이파이 광랜(1G)+AP",
     "fee": 38500,
     "bundleFee": 25300,
     "gift": 230000,
     "secret": 160000,
     "extraSetTop": 0
    }
   ],
   "tv": {
    "1": [
     {
      "code": "LG100-P1",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+실속형(UHD4) 217채널+와이파이",
      "fee": 39600,
      "bundleFee": 34100,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "LG100-P2",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+기본형(UHD4) 223채널+와이파이",
      "fee": 40700,
      "bundleFee": 35200,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "LG100-P3",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+프리미엄(UHD4) 252채널+와이파이",
      "fee": 42900,
      "bundleFee": 37400,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "LG500-P1",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+실속형(UHD4) 217채널+와이파이",
      "fee": 45100,
      "bundleFee": 35200,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 0
     },
     {
      "code": "LG500-P2",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+기본형(UHD4) 223채널+와이파이",
      "fee": 46200,
      "bundleFee": 36300,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 0
     },
     {
      "code": "LG500-P3",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+프리미엄(UHD4) 252채널+와이파이",
      "fee": 48400,
      "bundleFee": 38500,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 0
     },
     {
      "code": "LG1G-P1",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+실속형(UHD4) 217채널+와이파이",
      "fee": 50600,
      "bundleFee": 37400,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 0
     },
     {
      "code": "LG1G-P2",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+기본형(UHD4) 223채널+와이파이",
      "fee": 51700,
      "bundleFee": 38500,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 0
     },
     {
      "code": "LG1G-P3",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+프리미엄(UHD4) 252채널+와이파이",
      "fee": 53900,
      "bundleFee": 40700,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 0
     }
    ],
    "2": [
     {
      "code": "LG100-GA",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+실속형(메인) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 51700,
      "bundleFee": 46200,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "LG100-GB",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+기본형(메인) 223채널+실속형(추가) 217채널+와이파이",
      "fee": 52800,
      "bundleFee": 47300,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "LG100-GC",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+프리미엄(메인) 252채널+실속형(추가) 217채널+와이파이",
      "fee": 55000,
      "bundleFee": 49500,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "LG100-GD",
      "speed": "100M",
      "name": "LG 프리미엄안심(100M)+실속형(메인) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 55000,
      "bundleFee": 49500,
      "gift": 400000,
      "secret": 160000,
      "extraSetTop": 30000
     },
     {
      "code": "LG100-GE",
      "speed": "100M",
      "name": "LG 프리미엄안심(100M)+기본형(메인) 223채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 56100,
      "bundleFee": 50600,
      "gift": 400000,
      "secret": 160000,
      "extraSetTop": 30000
     },
     {
      "code": "LG100-GF",
      "speed": "100M",
      "name": "LG 프리미엄안심(100M)+프리미엄(메인) 252채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 58300,
      "bundleFee": 52800,
      "gift": 400000,
      "secret": 160000,
      "extraSetTop": 30000
     },
     {
      "code": "LG500-GG",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+실속형(메인) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 57200,
      "bundleFee": 47300,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 30000
     },
     {
      "code": "LG500-GH",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+기본형(메인) 223채널+실속형(추가) 217채널+와이파이",
      "fee": 58300,
      "bundleFee": 48400,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 30000
     },
     {
      "code": "LG500-GI",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+프리미엄(메인) 252채널+실속형(추가) 217채널+와이파이",
      "fee": 60500,
      "bundleFee": 50600,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 30000
     },
     {
      "code": "LG500-GJ",
      "speed": "500M",
      "name": "LG 프리미엄안심(500M)+실속형(메인) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 61600,
      "bundleFee": 51700,
      "gift": 470000,
      "secret": 180000,
      "extraSetTop": 30000
     },
     {
      "code": "LG500-GK",
      "speed": "500M",
      "name": "LG 프리미엄안심(500M)+기본형(메인) 223채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 62700,
      "bundleFee": 52800,
      "gift": 470000,
      "secret": 180000,
      "extraSetTop": 30000
     },
     {
      "code": "LG500-GL",
      "speed": "500M",
      "name": "LG 프리미엄안심(500M)+프리미엄(메인) 252채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 64900,
      "bundleFee": 55000,
      "gift": 470000,
      "secret": 250000,
      "extraSetTop": 30000
     },
     {
      "code": "LG1G-GM",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+실속형(메인) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 62700,
      "bundleFee": 49500,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 30000
     },
     {
      "code": "LG1G-GN",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+기본형(메인) 223채널+실속형(추가) 217채널+와이파이",
      "fee": 63800,
      "bundleFee": 50600,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 30000
     },
     {
      "code": "LG1G-GO",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+프리미엄(메인) 252채널+실속형(추가) 217채널+와이파이",
      "fee": 66000,
      "bundleFee": 52800,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 30000
     },
     {
      "code": "LG1G-GP",
      "speed": "1G",
      "name": "LG 프리미엄안심(1G)+실속형(메인) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 67100,
      "bundleFee": 53900,
      "gift": 470000,
      "secret": 230000,
      "extraSetTop": 30000
     },
     {
      "code": "LG1G-GQ",
      "speed": "1G",
      "name": "LG 프리미엄안심(1G)+기본형(메인) 223채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 68200,
      "bundleFee": 55000,
      "gift": 470000,
      "secret": 230000,
      "extraSetTop": 30000
     },
     {
      "code": "LG1G-GR",
      "speed": "1G",
      "name": "LG 프리미엄안심(1G)+프리미엄(메인) 252채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 70400,
      "bundleFee": 57200,
      "gift": 470000,
      "secret": 250000,
      "extraSetTop": 30000
     }
    ],
    "3": [
     {
      "code": "LG100-GA-1",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+실속형(메인) 217채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 63800,
      "bundleFee": 58300,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "LG100-GB-2",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+기본형(메인) 223채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 64900,
      "bundleFee": 59400,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "LG100-GC-3",
      "speed": "100M",
      "name": "LG 와이파이광랜(100M)+프리미엄(메인) 252채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 67100,
      "bundleFee": 61600,
      "gift": 400000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "LG100-GD-4",
      "speed": "100M",
      "name": "LG 프리미엄안심(100M)+실속형(메인) 217채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 67100,
      "bundleFee": 61600,
      "gift": 400000,
      "secret": 160000,
      "extraSetTop": 60000
     },
     {
      "code": "LG100-GE-5",
      "speed": "100M",
      "name": "LG 프리미엄안심(100M)+기본형(메인) 223채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 68200,
      "bundleFee": 62700,
      "gift": 400000,
      "secret": 160000,
      "extraSetTop": 60000
     },
     {
      "code": "LG100-GF-6",
      "speed": "100M",
      "name": "LG 프리미엄안심(100M)+프리미엄(메인) 252채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 70400,
      "bundleFee": 64900,
      "gift": 400000,
      "secret": 160000,
      "extraSetTop": 60000
     },
     {
      "code": "LG500-GG-7",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+실속형(메인) 217채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 69300,
      "bundleFee": 59400,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 60000
     },
     {
      "code": "LG500-GH-8",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+기본형(메인) 223채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 70400,
      "bundleFee": 60500,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 60000
     },
     {
      "code": "LG500-GI-9",
      "speed": "500M",
      "name": "LG 와이파이기가슬림(500M)+프리미엄(메인) 252채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 72600,
      "bundleFee": 62700,
      "gift": 470000,
      "secret": 170000,
      "extraSetTop": 60000
     },
     {
      "code": "LG500-GJ-10",
      "speed": "500M",
      "name": "LG 프리미엄안심(500M)+실속형(메인) 217채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 73700,
      "bundleFee": 63800,
      "gift": 470000,
      "secret": 180000,
      "extraSetTop": 60000
     },
     {
      "code": "LG500-GK-11",
      "speed": "500M",
      "name": "LG 프리미엄안심(500M)+기본형(메인) 223채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 74800,
      "bundleFee": 64900,
      "gift": 470000,
      "secret": 180000,
      "extraSetTop": 60000
     },
     {
      "code": "LG500-GL-12",
      "speed": "500M",
      "name": "LG 프리미엄안심(500M)+프리미엄(메인) 252채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 77000,
      "bundleFee": 67100,
      "gift": 470000,
      "secret": 250000,
      "extraSetTop": 60000
     },
     {
      "code": "LG1G-GM-13",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+실속형(메인) 217채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 74800,
      "bundleFee": 61600,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 60000
     },
     {
      "code": "LG1G-GN-14",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+기본형(메인) 223채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 75900,
      "bundleFee": 62700,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 60000
     },
     {
      "code": "LG1G-GO-15",
      "speed": "1G",
      "name": "LG 와이파이기가안심(1G)+프리미엄(메인) 252채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이",
      "fee": 78100,
      "bundleFee": 64900,
      "gift": 470000,
      "secret": 220000,
      "extraSetTop": 60000
     },
     {
      "code": "LG1G-GP-16",
      "speed": "1G",
      "name": "LG 프리미엄안심(1G)+실속형(메인) 217채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 79200,
      "bundleFee": 66000,
      "gift": 470000,
      "secret": 230000,
      "extraSetTop": 60000
     },
     {
      "code": "LG1G-GQ-17",
      "speed": "1G",
      "name": "LG 프리미엄안심(1G)+기본형(메인) 223채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 80300,
      "bundleFee": 67100,
      "gift": 470000,
      "secret": 230000,
      "extraSetTop": 60000
     },
     {
      "code": "LG1G-GR-18",
      "speed": "1G",
      "name": "LG 프리미엄안심(1G)+프리미엄(메인) 252채널+실속형(추가) 217채널+실속형(추가) 217채널+와이파이+클락",
      "fee": 82500,
      "bundleFee": 69300,
      "gift": 470000,
      "secret": 250000,
      "extraSetTop": 60000
     }
    ]
   },
   "tvOnly": []
  },
  {
   "key": "LG헬로비전",
   "label": "LG헬로비전",
   "install": {
    "installFeeInternet": 36300,
    "installFeeTv1": 48500,
    "installFeeTv2": 59500,
    "offhourRate": 1.25
   },
   "internet": [],
   "tv": {
    "1": [
     {
      "code": "HV160-H5",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+이코노미(UHD) 108채널+와이파이",
      "fee": 37560,
      "bundleFee": 32258,
      "gift": 300000,
      "secret": 250000,
      "extraSetTop": 0
     },
     {
      "code": "HV160-H6",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+뉴베이직(UHD) 247채널+와이파이",
      "fee": 39760,
      "bundleFee": 34458,
      "gift": 300000,
      "secret": 300000,
      "extraSetTop": 0
     },
     {
      "code": "HV160-H7",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+PRO라이트(UHD) 222채널+와이파이",
      "fee": 39760,
      "bundleFee": 34458,
      "gift": 300000,
      "secret": 300000,
      "extraSetTop": 0
     },
     {
      "code": "HV160-H8",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+PRO맥스(UHD) 249채널+와이파이",
      "fee": 41960,
      "bundleFee": 36658,
      "gift": 300000,
      "secret": 310000,
      "extraSetTop": 0
     },
     {
      "code": "HV500-H9",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+이코노미(UHD) 108채널+와이파이",
      "fee": 40590,
      "bundleFee": 34518,
      "gift": 350000,
      "secret": 300000,
      "extraSetTop": 0
     },
     {
      "code": "HV500-H10",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+뉴베이직(UHD) 247채널",
      "fee": 42790,
      "bundleFee": 36718,
      "gift": 350000,
      "secret": 350000,
      "extraSetTop": 0
     },
     {
      "code": "HV500-H11",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+PRO라이트(UHD) 222채널+와이파이",
      "fee": 42790,
      "bundleFee": 36718,
      "gift": 350000,
      "secret": 350000,
      "extraSetTop": 0
     },
     {
      "code": "HV500-H12",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+PRO맥스(UHD) 249채널+와이파이",
      "fee": 44990,
      "bundleFee": 38918,
      "gift": 350000,
      "secret": 360000,
      "extraSetTop": 0
     },
     {
      "code": "HV1G-H13",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+이코노미(UHD) 108채널+와이파이",
      "fee": 41800,
      "bundleFee": 35420,
      "gift": 400000,
      "secret": 300000,
      "extraSetTop": 0
     },
     {
      "code": "HV1G-H14",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+뉴베이직(UHD) 247채널+와이파이",
      "fee": 44000,
      "bundleFee": 37620,
      "gift": 400000,
      "secret": 350000,
      "extraSetTop": 0
     },
     {
      "code": "HV1G-H15",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+PRO라이트(UHD) 222채널+와이파이",
      "fee": 44000,
      "bundleFee": 37620,
      "gift": 400000,
      "secret": 350000,
      "extraSetTop": 0
     },
     {
      "code": "HV1G-H16",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+PRO맥스(UHD) 249채널+와이파이",
      "fee": 46200,
      "bundleFee": 38720,
      "gift": 400000,
      "secret": 360000,
      "extraSetTop": 0,
      "check": "결합할인액이 같은 속도 다른 상품과 다름(7,480원)"
     }
    ],
    "2": [
     {
      "code": "HV160-HE",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+이코노미(메인) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 46910,
      "bundleFee": 41828,
      "gift": 300000,
      "secret": 250000,
      "extraSetTop": 30000
     },
     {
      "code": "HV160-HF",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+뉴베이직(메인) 247채널+이코노미(추가) 108채널+와이파이",
      "fee": 49110,
      "bundleFee": 44028,
      "gift": 300000,
      "secret": 300000,
      "extraSetTop": 30000
     },
     {
      "code": "HV160-HG",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+PRO라이트(메인) 222채널+이코노미(추가) 108채널+와이파이",
      "fee": 49110,
      "bundleFee": 44028,
      "gift": 300000,
      "secret": 300000,
      "extraSetTop": 30000
     },
     {
      "code": "HV160-HH",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+PRO맥스(메인) 249채널+이코노미(추가) 108채널+와이파이",
      "fee": 51310,
      "bundleFee": 46228,
      "gift": 300000,
      "secret": 310000,
      "extraSetTop": 30000
     },
     {
      "code": "HV500-HI",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+이코노미(메인) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 49940,
      "bundleFee": 44088,
      "gift": 350000,
      "secret": 300000,
      "extraSetTop": 30000
     },
     {
      "code": "HV500-HJ",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+뉴베이직(메인) 247채널+이코노미(추가) 108채널+와이파이",
      "fee": 52140,
      "bundleFee": 46288,
      "gift": 350000,
      "secret": 350000,
      "extraSetTop": 30000
     },
     {
      "code": "HV500-HK",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+PRO라이트(메인) 222채널+이코노미(추가) 108채널+와이파이",
      "fee": 52140,
      "bundleFee": 46288,
      "gift": 350000,
      "secret": 350000,
      "extraSetTop": 30000
     },
     {
      "code": "HV500-HL",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+PRO맥스(메인) 249채널+이코노미(추가) 108채널+와이파이",
      "fee": 54340,
      "bundleFee": 48268,
      "gift": 350000,
      "secret": 360000,
      "extraSetTop": 30000,
      "check": "결합할인액이 같은 속도 다른 상품과 다름(6,072원)"
     },
     {
      "code": "HV1G-HM",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+이코노미(메인) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 51150,
      "bundleFee": 44990,
      "gift": 400000,
      "secret": 300000,
      "extraSetTop": 30000
     },
     {
      "code": "HV1G-HN",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+뉴베이직(메인) 247채널+이코노미(추가) 108채널+와이파이",
      "fee": 53350,
      "bundleFee": 47190,
      "gift": 400000,
      "secret": 350000,
      "extraSetTop": 30000
     },
     {
      "code": "HV1G-HO",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+PRO라이트(메인) 222채널+이코노미(추가) 108채널+와이파이",
      "fee": 53350,
      "bundleFee": 47190,
      "gift": 400000,
      "secret": 350000,
      "extraSetTop": 30000
     },
     {
      "code": "HV1G-HP",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+PRO맥스(메인) 249채널+이코노미(추가) 108채널+와이파이",
      "fee": 55550,
      "bundleFee": 49170,
      "gift": 400000,
      "secret": 360000,
      "extraSetTop": 30000,
      "check": "결합할인액이 같은 속도 다른 상품과 다름(6,380원)"
     }
    ],
    "3": [
     {
      "code": "HV160-HE-1",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+이코노미(메인) 108채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 56260,
      "bundleFee": 51178,
      "gift": 300000,
      "secret": 250000,
      "extraSetTop": 60000
     },
     {
      "code": "HV160-HF-1",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+뉴베이직(메인) 247채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 58460,
      "bundleFee": 53378,
      "gift": 300000,
      "secret": 300000,
      "extraSetTop": 60000
     },
     {
      "code": "HV160-HG-1",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+PRO라이트(메인) 222채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 58460,
      "bundleFee": 53378,
      "gift": 300000,
      "secret": 300000,
      "extraSetTop": 60000
     },
     {
      "code": "HV160-HH-1",
      "speed": "160M",
      "name": "LG 헬로비전 광랜(160M)+PRO맥스(메인) 249채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 60660,
      "bundleFee": 55578,
      "gift": 300000,
      "secret": 310000,
      "extraSetTop": 60000
     },
     {
      "code": "HV500-HI-1",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+ 이코노미(메인) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 59290,
      "bundleFee": 53218,
      "gift": 350000,
      "secret": 300000,
      "extraSetTop": 60000,
      "check": "상품명에 TV가 2대분만 표기됨"
     },
     {
      "code": "HV500-HJ-1",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+뉴베이직(메인) 247채널+이코노미(추가) 108채널+와이파이",
      "fee": 61490,
      "bundleFee": 55418,
      "gift": 350000,
      "secret": 350000,
      "extraSetTop": 60000
     },
     {
      "code": "HV500-HK-1",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+PRO라이트(메인) 222채널+이코노미(추가) 108채널+와이파이",
      "fee": 61490,
      "bundleFee": 55418,
      "gift": 350000,
      "secret": 350000,
      "extraSetTop": 60000
     },
     {
      "code": "HV500-HL-1",
      "speed": "500M",
      "name": "LG 헬로비전 기가라이트(500M)+PRO맥스(메인) 249채널+이코노미(추가) 108채널+와이파이",
      "fee": 63690,
      "bundleFee": 57618,
      "gift": 350000,
      "secret": 360000,
      "extraSetTop": 60000
     },
     {
      "code": "HV1G-HM-1",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+이코노미(메인) 108채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 60500,
      "bundleFee": 54120,
      "gift": 400000,
      "secret": 300000,
      "extraSetTop": 60000
     },
     {
      "code": "HV1G-HN-1",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+뉴베이직(메인) 247채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 62700,
      "bundleFee": 56320,
      "gift": 400000,
      "secret": 350000,
      "extraSetTop": 60000
     },
     {
      "code": "HV1G-HO-1",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+PRO라이트(메인) 222채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 62700,
      "bundleFee": 56320,
      "gift": 400000,
      "secret": 350000,
      "extraSetTop": 60000
     },
     {
      "code": "HV1G-HP-1",
      "speed": "1G",
      "name": "LG 헬로비전 플래티넘(1G)+PRO맥스(메인) 249채널+이코노미(추가) 108채널+이코노미(추가) 108채널+와이파이",
      "fee": 64900,
      "bundleFee": 58520,
      "gift": 400000,
      "secret": 360000,
      "extraSetTop": 60000
     }
    ]
   },
   "tvOnly": []
  },
  {
   "key": "Skylife",
   "label": "KT스카이라이프",
   "install": {
    "installFeeInternet": 36000,
    "installFeeTv1": 48500,
    "installFeeTv2": 59500,
    "offhourRate": 1.25
   },
   "internet": [
    {
     "code": "SL100-D",
     "speed": "100M",
     "name": "스카이안심(100M)+AP",
     "fee": 25300,
     "bundleFee": null,
     "gift": 100000,
     "secret": 90000,
     "extraSetTop": 0
    },
    {
     "code": "SL200-D",
     "speed": "200M",
     "name": "스카이안심(200M)+AP",
     "fee": 26400,
     "bundleFee": null,
     "gift": 120000,
     "secret": 90000,
     "extraSetTop": 0
    },
    {
     "code": "SL500-D",
     "speed": "500M",
     "name": "스카이안심(500M)+AP",
     "fee": 31900,
     "bundleFee": null,
     "gift": 140000,
     "secret": 110000,
     "extraSetTop": 0
    },
    {
     "code": "SL1G-D",
     "speed": "1G",
     "name": "스카이안심(1G)+AP",
     "fee": 36300,
     "bundleFee": null,
     "gift": 150000,
     "secret": 100000,
     "extraSetTop": 0
    }
   ],
   "tv": {
    "1": [
     {
      "code": "SL100-SKY1",
      "speed": "100M",
      "name": "스카이안심(100M)+베이직(지니A) 194채널+와이파이",
      "fee": 35200,
      "bundleFee": null,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 0
     },
     {
      "code": "SL100-SKY2",
      "speed": "100M",
      "name": "스카이안심(100M)+플러스(지니A) 209채널+와이파이",
      "fee": 36300,
      "bundleFee": null,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 0
     },
     {
      "code": "SL100-SKY9",
      "speed": "100M",
      "name": "스카이안심(100M)+초이스(지니A) 209채널+와이파이",
      "fee": 45100,
      "bundleFee": null,
      "gift": 350000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "SL200-SKY3",
      "speed": "200M",
      "name": "스카이안심(200M)+베이직(지니A) 194채널+와이파이",
      "fee": 36300,
      "bundleFee": null,
      "gift": 360000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "SL200-SKY4",
      "speed": "200M",
      "name": "스카이안심(200M)+플러스(지니A) 209채널+와이파이",
      "fee": 37400,
      "bundleFee": null,
      "gift": 360000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "SL200-SKY10",
      "speed": "200M",
      "name": "스카이안심(200M)+초이스(지니A) 209채널+와이파이",
      "fee": 46200,
      "bundleFee": null,
      "gift": 360000,
      "secret": 220000,
      "extraSetTop": 0
     },
     {
      "code": "SL500-SKY5",
      "speed": "500M",
      "name": "스카이안심(500M)+베이직(지니A) 194채널+와이파이",
      "fee": 41800,
      "bundleFee": null,
      "gift": 420000,
      "secret": 160000,
      "extraSetTop": 0
     },
     {
      "code": "SL500-SKY6",
      "speed": "500M",
      "name": "스카이안심(500M)+플러스(지니A) 209채널+와이파이",
      "fee": 42900,
      "bundleFee": null,
      "gift": 420000,
      "secret": 160000,
      "extraSetTop": 0
     },
     {
      "code": "SL500-SKY11",
      "speed": "500M",
      "name": "스카이안심(500M)+초이스(지니A) 209채널+와이파이",
      "fee": 51700,
      "bundleFee": null,
      "gift": 420000,
      "secret": 230000,
      "extraSetTop": 0
     },
     {
      "code": "SL1G-SKY7",
      "speed": "1G",
      "name": "스카이안심(1G)+베이직(지니A) 194채널+와이파이",
      "fee": 47300,
      "bundleFee": null,
      "gift": 450000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "SL1G-SKY8",
      "speed": "1G",
      "name": "스카이안심(1G)+플러스(지니A) 209채널+와이파이",
      "fee": 48400,
      "bundleFee": null,
      "gift": 450000,
      "secret": 150000,
      "extraSetTop": 0
     },
     {
      "code": "SL1G-SKY12",
      "speed": "1G",
      "name": "스카이안심(1G)+초이스(지니A) 209채널+와이파이",
      "fee": 57200,
      "bundleFee": null,
      "gift": 450000,
      "secret": 220000,
      "extraSetTop": 0
     }
    ],
    "2": [
     {
      "code": "SL100-SKYA",
      "speed": "100M",
      "name": "스카이안심(100M)+베이직(메인) 194채널+베이직(추가) 194채널+와이파이",
      "fee": 44550,
      "bundleFee": null,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 30000
     },
     {
      "code": "SL100-SKYB",
      "speed": "100M",
      "name": "스카이안심(100M)+플러스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 45650,
      "bundleFee": null,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 30000
     },
     {
      "code": "SL100-SKYI",
      "speed": "100M",
      "name": "스카이안심(100M)+초이스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 54450,
      "bundleFee": null,
      "gift": 350000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "SL200-SKYC",
      "speed": "200M",
      "name": "스카이안심(200M)+베이직(메인) 194채널+베이직(추가) 194채널+와이파이",
      "fee": 45650,
      "bundleFee": null,
      "gift": 360000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "SL200-SKYD",
      "speed": "200M",
      "name": "스카이안심(200M)+플러스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 46750,
      "bundleFee": null,
      "gift": 360000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "SL200-SKYJ",
      "speed": "200M",
      "name": "스카이안심(200M)+초이스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 55550,
      "bundleFee": null,
      "gift": 360000,
      "secret": 220000,
      "extraSetTop": 30000
     },
     {
      "code": "SL500-SKYE",
      "speed": "500M",
      "name": "스카이안심(500M)+베이직(메인) 194채널+베이직(추가) 194채널+와이파이",
      "fee": 51150,
      "bundleFee": null,
      "gift": 420000,
      "secret": 160000,
      "extraSetTop": 30000
     },
     {
      "code": "SL500-SKYF",
      "speed": "500M",
      "name": "스카이안심(500M)+플러스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 52250,
      "bundleFee": null,
      "gift": 420000,
      "secret": 160000,
      "extraSetTop": 30000
     },
     {
      "code": "SL500-SKYK",
      "speed": "500M",
      "name": "스카이안심(500M)+초이스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 61050,
      "bundleFee": null,
      "gift": 420000,
      "secret": 230000,
      "extraSetTop": 30000
     },
     {
      "code": "SL1G-SKYG",
      "speed": "1G",
      "name": "스카이안심(1G)+베이직(메인) 194채널+베이직(추가) 194채널+와이파이",
      "fee": 56650,
      "bundleFee": null,
      "gift": 450000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "SL1G-SKYH",
      "speed": "1G",
      "name": "스카이안심(1G)+플러스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 57750,
      "bundleFee": null,
      "gift": 450000,
      "secret": 150000,
      "extraSetTop": 30000
     },
     {
      "code": "SL1G-SKYL",
      "speed": "1G",
      "name": "스카이안심(1G)+초이스(메인) 209채널+베이직(추가) 194채널+와이파이",
      "fee": 66550,
      "bundleFee": null,
      "gift": 450000,
      "secret": 220000,
      "extraSetTop": 30000
     }
    ],
    "3": [
     {
      "code": "SL100-SKYA-1",
      "speed": "100M",
      "name": "스카이안심(100M)+베이직(메인) 194채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 53900,
      "bundleFee": null,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 60000
     },
     {
      "code": "SL100-SKYB-1",
      "speed": "100M",
      "name": "스카이안심(100M)+플러스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 55000,
      "bundleFee": null,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 60000
     },
     {
      "code": "SL100-SKYI-1",
      "speed": "100M",
      "name": "스카이안심(100M)+초이스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 63800,
      "bundleFee": null,
      "gift": 350000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "SL200-SKYC-1",
      "speed": "200M",
      "name": "스카이안심(200M)+베이직(메인) 194채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 55000,
      "bundleFee": null,
      "gift": 360000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "SL200-SKYD-1",
      "speed": "200M",
      "name": "스카이안심(200M)+플러스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 56100,
      "bundleFee": null,
      "gift": 360000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "SL200-SKYJ-1",
      "speed": "200M",
      "name": "스카이안심(200M)+초이스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 64900,
      "bundleFee": null,
      "gift": 360000,
      "secret": 220000,
      "extraSetTop": 60000
     },
     {
      "code": "SL500-SKYE-1",
      "speed": "500M",
      "name": "스카이안심(500M)+베이직(메인) 194채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 60500,
      "bundleFee": null,
      "gift": 420000,
      "secret": 160000,
      "extraSetTop": 60000
     },
     {
      "code": "SL500-SKYF-1",
      "speed": "500M",
      "name": "스카이안심(500M)+플러스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 61600,
      "bundleFee": null,
      "gift": 420000,
      "secret": 160000,
      "extraSetTop": 60000
     },
     {
      "code": "SL500-SKYK-1",
      "speed": "500M",
      "name": "스카이안심(500M)+초이스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 70400,
      "bundleFee": null,
      "gift": 420000,
      "secret": 230000,
      "extraSetTop": 60000
     },
     {
      "code": "SL1G-SKYG-1",
      "speed": "1G",
      "name": "스카이안심(1G)+베이직(메인) 194채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 66000,
      "bundleFee": null,
      "gift": 450000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "SL1G-SKYH-1",
      "speed": "1G",
      "name": "스카이안심(1G)+플러스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 67100,
      "bundleFee": null,
      "gift": 450000,
      "secret": 150000,
      "extraSetTop": 60000
     },
     {
      "code": "SL1G-SKYL-1",
      "speed": "1G",
      "name": "스카이안심(1G)+초이스(메인) 209채널+베이직(추가) 194채널+베이직(추가)+와이파이",
      "fee": 75900,
      "bundleFee": null,
      "gift": 450000,
      "secret": 220000,
      "extraSetTop": 60000
     }
    ]
   },
   "tvOnly": [
    {
     "code": "SL-TVONLY-ALL",
     "speed": "위성",
     "name": "스카이라이프 All (위성방송) 241채널",
     "fee": 12100,
     "rental": 1100,
     "bundleFee": null,
     "gift": null,
     "secret": 0,
     "extraSetTop": 0,
     "installOptions": [
      {
       "label": "아파트 공용안테나",
       "fee": 27500
      },
      {
       "label": "접시 안테나 개별설치",
       "fee": 40000
      }
     ],
     "check": "설치비는 스카이라이프 약관의 상한액(○○원 이하) 기준"
    }
   ]
  },
  {
   "key": "SKPOP",
   "label": "SK B tv pop",
   "install": {
    "installFeeInternet": 0,
    "installFeeTv1": 56100,
    "installFeeTv2": 69300,
    "offhourRate": 1.25
   },
   "internet": [],
   "tv": {
    "1": [
     {
      "code": "SKPOP100-P180-1",
      "speed": "100M",
      "name": "SKPOP(100M)+POP180(스마트3) 185채널+와이파이",
      "fee": 33000,
      "bundleFee": 29700,
      "gift": 300000,
      "secret": 50000,
      "extraSetTop": 0
     },
     {
      "code": "SKPOP100-P230-1",
      "speed": "100M",
      "name": "SKPOP(100M)+POP230(스마트3) 230채널+와이파이",
      "fee": 34100,
      "bundleFee": 30800,
      "gift": 300000,
      "secret": 90000,
      "extraSetTop": 0
     },
     {
      "code": "SKPOP500-P180-1",
      "speed": "500M",
      "name": "SKPOP(500M)+POP180(스마트3) 185채널+와이파이",
      "fee": 39600,
      "bundleFee": 34100,
      "gift": 350000,
      "secret": 40000,
      "extraSetTop": 0
     },
     {
      "code": "SKPOP500-P230-1",
      "speed": "500M",
      "name": "SKPOP(500M)+POP230(스마트3) 230채널+와이파이",
      "fee": 40700,
      "bundleFee": 35200,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 0
     },
     {
      "code": "SKPOP1G-P180-1",
      "speed": "1G",
      "name": "SKPOP(1G)+POP180(스마트3) 185채널+와이파이",
      "fee": 46200,
      "bundleFee": 38500,
      "gift": 350000,
      "secret": 40000,
      "extraSetTop": 0
     },
     {
      "code": "SKPOP1G-P230-1",
      "speed": "1G",
      "name": "SKPOP(1G)+POP230(스마트3) 230채널+와이파이",
      "fee": 47300,
      "bundleFee": 39600,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 0
     }
    ],
    "2": [
     {
      "code": "SKPOP100-P180-2",
      "speed": "100M",
      "name": "SKPOP(100M)+POP180(메인) 185채널+POP230(추가) 230채널+와이파이",
      "fee": 41800,
      "bundleFee": 38500,
      "gift": 300000,
      "secret": 50000,
      "extraSetTop": 30000
     },
     {
      "code": "SKPOP100-P230-2",
      "speed": "100M",
      "name": "SKPOP(100M)+POP230(메인) 230채널+POP230(추가) 230채널+와이파이",
      "fee": 42900,
      "bundleFee": 39600,
      "gift": 300000,
      "secret": 90000,
      "extraSetTop": 30000
     },
     {
      "code": "SKPOP500-P180-2",
      "speed": "500M",
      "name": "SKPOP(500M)+POP180(메인) 185채널+POP230(추가) 230채널+와이파이",
      "fee": 48400,
      "bundleFee": 42900,
      "gift": 350000,
      "secret": 40000,
      "extraSetTop": 30000
     },
     {
      "code": "SKPOP500-P230-2",
      "speed": "500M",
      "name": "SKPOP(500M)+POP230(메인) 230채널+POP230(추가) 230채널+와이파이",
      "fee": 49500,
      "bundleFee": 44000,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 30000
     },
     {
      "code": "SKPOP1G-P180-2",
      "speed": "1G",
      "name": "SKPOP(1G)+POP180(메인) 185채널+POP230(추가) 230채널+와이파이",
      "fee": 55000,
      "bundleFee": 47300,
      "gift": 350000,
      "secret": 40000,
      "extraSetTop": 30000
     },
     {
      "code": "SKPOP1G-P230-2",
      "speed": "1G",
      "name": "SKPOP(1G)+POP230(메인) 230채널+POP230(추가) 230채널+와이파이",
      "fee": 56100,
      "bundleFee": 48400,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 30000
     }
    ],
    "3": [
     {
      "code": "SKPOP100-P180-3",
      "speed": "100M",
      "name": "SKPOP(100M)+POP180(메인)+POP230(추가)+POP230(추가)+와이파이",
      "fee": 50600,
      "bundleFee": 47300,
      "gift": 300000,
      "secret": 50000,
      "extraSetTop": 60000
     },
     {
      "code": "SKPOP100-P230-3",
      "speed": "100M",
      "name": "SKPOP(100M)+POP230(메인)+POP230(추가)+POP230(추가)+와이파이",
      "fee": 51700,
      "bundleFee": 48400,
      "gift": 300000,
      "secret": 90000,
      "extraSetTop": 60000
     },
     {
      "code": "SKPOP500-P180-3",
      "speed": "500M",
      "name": "SKPOP(500M)+POP180(메인)+POP230(추가)+POP230(추가)+와이파이",
      "fee": 57200,
      "bundleFee": 51700,
      "gift": 350000,
      "secret": 40000,
      "extraSetTop": 60000
     },
     {
      "code": "SKPOP500-P230-3",
      "speed": "500M",
      "name": "SKPOP(500M)+POP230(메인)+POP230(추가)+POP230(추가)+와이파이",
      "fee": 58300,
      "bundleFee": 52800,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 60000
     },
     {
      "code": "SKPOP1G-P180-3",
      "speed": "1G",
      "name": "SKPOP(1G)+POP180(메인)+POP230(추가)+POP230(추가)+와이파이",
      "fee": 63800,
      "bundleFee": 56100,
      "gift": 350000,
      "secret": 40000,
      "extraSetTop": 60000
     },
     {
      "code": "SKPOP1G-P230-3",
      "speed": "1G",
      "name": "SKPOP(1G)+POP230(메인)+POP230(추가)+POP230(추가)+와이파이",
      "fee": 64900,
      "bundleFee": 57200,
      "gift": 350000,
      "secret": 80000,
      "extraSetTop": 60000
     }
    ]
   },
   "tvOnly": []
  }
 ],
 "usim": [
  {
   "code": "USIM-KT-P01",
   "carrier": "KT",
   "name": "KT 베이직 4GB",
   "data": "4GB+최대 400Kbps",
   "fee": 37000,
   "gift100": 100000,
   "gift500": 100000
  },
  {
   "code": "USIM-KT-P02",
   "carrier": "KT",
   "name": "KT 베이직 7GB",
   "data": "7GB+최대 400Kbps",
   "fee": 45000,
   "gift100": 100000,
   "gift500": 100000
  },
  {
   "code": "USIM-KT-P03",
   "carrier": "KT",
   "name": "KT 베이직 10GB",
   "data": "10GB+최대 400Kbps",
   "fee": 50000,
   "gift100": 100000,
   "gift500": 100000
  },
  {
   "code": "USIM-KT-P04",
   "carrier": "KT",
   "name": "KT 베이직 14GB",
   "data": "14GB+최대 1Mbps",
   "fee": 55000,
   "gift100": 120000,
   "gift500": 120000
  },
  {
   "code": "USIM-KT-P05",
   "carrier": "KT",
   "name": "KT 베이직 21GB",
   "data": "21GB+최대 1Mbps",
   "fee": 58000,
   "gift100": 120000,
   "gift500": 120000
  },
  {
   "code": "USIM-KT-P06",
   "carrier": "KT",
   "name": "KT 베이직 30GB",
   "data": "30GB+최대 1Mbps",
   "fee": 61000,
   "gift100": 120000,
   "gift500": 120000
  },
  {
   "code": "USIM-KT-P07",
   "carrier": "KT",
   "name": "KT 베이직 70GB",
   "data": "70GB+최대 1Mbps",
   "fee": 65000,
   "gift100": 120000,
   "gift500": 120000
  },
  {
   "code": "USIM-KT-P08",
   "carrier": "KT",
   "name": "KT 베이직 90GB",
   "data": "90GB+최대 1Mbps",
   "fee": 67000,
   "gift100": 120000,
   "gift500": 150000
  },
  {
   "code": "USIM-KT-P09",
   "carrier": "KT",
   "name": "KT 베이직 110GB",
   "data": "110GB+최대 5Mbps",
   "fee": 69000,
   "gift100": 150000,
   "gift500": 180000
  },
  {
   "code": "USIM-KT-P10",
   "carrier": "KT",
   "name": "KT 베이직 80",
   "data": "무제한",
   "fee": 80000,
   "gift100": 150000,
   "gift500": 200000
  },
  {
   "code": "USIM-KT-P11",
   "carrier": "KT",
   "name": "KT 초이스 90",
   "data": "무제한",
   "fee": 90000,
   "gift100": 200000,
   "gift500": 250000
  },
  {
   "code": "USIM-LG-P02",
   "carrier": "LG",
   "name": "데이터플랜 9GB",
   "data": "9GB+최대 400Kbps",
   "fee": 47000,
   "gift100": 30000,
   "gift500": 30000
  },
  {
   "code": "USIM-LG-P03",
   "carrier": "LG",
   "name": "데이터플랜 14GB",
   "data": "14GB+최대 1Mbps",
   "fee": 55000,
   "gift100": 130000,
   "gift500": 130000
  },
  {
   "code": "USIM-LG-P04",
   "carrier": "LG",
   "name": "데이터플랜 24GB",
   "data": "24GB+최대 1Mbps",
   "fee": 59000,
   "gift100": 130000,
   "gift500": 130000
  },
  {
   "code": "USIM-LG-P05",
   "carrier": "LG",
   "name": "데이터플랜 31GB",
   "data": "31GB+최대 1Mbps",
   "fee": 61000,
   "gift100": 170000,
   "gift500": 170000
  },
  {
   "code": "USIM-LG-P06",
   "carrier": "LG",
   "name": "데이터플랜 50GB",
   "data": "50GB+최대 1Mbps",
   "fee": 63000,
   "gift100": 170000,
   "gift500": 170000
  },
  {
   "code": "USIM-LG-P07",
   "carrier": "LG",
   "name": "데이터플랜 80GB",
   "data": "80GB+최대 1Mbps",
   "fee": 66000,
   "gift100": 170000,
   "gift500": 170000
  },
  {
   "code": "USIM-LG-P08",
   "carrier": "LG",
   "name": "데이터플랜 95GB",
   "data": "95GB+최대 3Mbps",
   "fee": 68000,
   "gift100": 170000,
   "gift500": 170000
  },
  {
   "code": "USIM-LG-P09",
   "carrier": "LG",
   "name": "데이터플랜 125GB",
   "data": "125GB+최대 5Mbps",
   "fee": 70000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-LG-P10",
   "carrier": "LG",
   "name": "데이터플랜 150GB",
   "data": "150GB+최대 5Mbps",
   "fee": 75000,
   "gift100": 240000,
   "gift500": 240000
  },
  {
   "code": "USIM-LG-P11",
   "carrier": "LG",
   "name": "데이터플랜 MAX",
   "data": "무제한",
   "fee": 85000,
   "gift100": 300000,
   "gift500": 300000
  },
  {
   "code": "USIM-SK-P01",
   "carrier": "SK",
   "name": "라이트 39",
   "data": "6GB+최대 400Kbps",
   "fee": 39000,
   "gift100": 150000,
   "gift500": 150000
  },
  {
   "code": "USIM-SK-P02",
   "carrier": "SK",
   "name": "라이트 45",
   "data": "8GB+최대 400Kbps",
   "fee": 45000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P03",
   "carrier": "SK",
   "name": "라이트 49",
   "data": "11GB+최대 400Kbps",
   "fee": 49000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P04",
   "carrier": "SK",
   "name": "라이트 55",
   "data": "15GB+최대 1Mbps",
   "fee": 55000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P05",
   "carrier": "SK",
   "name": "라이트 59",
   "data": "24GB+최대 1Mbps",
   "fee": 59000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P06",
   "carrier": "SK",
   "name": "라이트 59 13GB업",
   "data": "37GB+최대 1Mbps",
   "fee": 62000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P07",
   "carrier": "SK",
   "name": "라이트 59 30GB업",
   "data": "54GB+최대 1Mbps",
   "fee": 64000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P08",
   "carrier": "SK",
   "name": "라이트 59 50GB업",
   "data": "74GB+최대 1Mbps",
   "fee": 66000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P09",
   "carrier": "SK",
   "name": "라이트 59 75GB업",
   "data": "99GB+최대 1Mbps",
   "fee": 68000,
   "gift100": 200000,
   "gift500": 200000
  },
  {
   "code": "USIM-SK-P10",
   "carrier": "SK",
   "name": "라이트 69",
   "data": "110GB+최대 5Mbps",
   "fee": 69000,
   "gift100": 240000,
   "gift500": 240000
  },
  {
   "code": "USIM-SK-P11",
   "carrier": "SK",
   "name": "라이트 79",
   "data": "250GB+최대 5Mbps",
   "fee": 79000,
   "gift100": 240000,
   "gift500": 240000
  },
  {
   "code": "USIM-SK-P12",
   "carrier": "SK",
   "name": "베스트 89",
   "data": "무제한",
   "fee": 89000,
   "gift100": 300000,
   "gift500": 300000
  }
 ]
};
