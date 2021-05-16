/*
eat, 0
rest, 1
guide, 2
nature, 3
money, 4
*/

const qnaList = [
  {
    q: '여행을 가게 된 당신, 어디로 갈까요?',
    a: [
      { answer: '파리', type: [4] },
      { answer: '보라카이', type: [3] },
      { answer: '모스크바', type: [2] },
	  { answer: '대만', type: [0] },
    ]
  },
  {
    q: '어떤 가방을 들고 나갈까요?',
    a: [
      { answer: '캐리어', type: [4] },
      { answer: '배낭', type: [3] },
      { answer: '홀몸', type: [1] },
	  
    ]
  },
  {
    q: '숙소를 고를 때 당신이 가장 중요시하는 것은?',
    a: [
      { answer: '침대', type: [1] },
      { answer: '시티뷰', type: [4] },
      { answer: '조식', type: [0] },
	  { answer: '게스트하우스', type: [2] },
    ]
  },
  {
    q: '숙소 밖에서 당신의 이동수단은?',
    a: [
      { answer: '뚜벅이', type: [2] },
      { answer: '자전거', type: [3] },
      { answer: '안나감', type: [1] },
	  
    ]
  },
  {
    q: '배가 고파진 당신, 식당을 어떻게 찾을까요?',
    a: [
      { answer: '맛집 검색', type: [0] },
      { answer: '룸서비스', type: [1] },
    
    ]
  },

  {
    q: '당신이 여행지에서 가장 많이 찍은 사진은?',
    a: [
      { answer: '경치', type: [3] },
      { answer: '건물', type: [4] },
      { answer: '셀카', type: [1] },
	  { answer: '음식', type: [0] },
	  { answer: '관광지', type: [2] },
    ]
  },
  {
    q: '여행을 마친 당신, 어떤 기념품을 사갈까요?',
    a: [
      { answer: '옷', type: [4] },
      { answer: '공기', type: [3] },
      { answer: '특산품', type: [2] },
	  { answer: '대표음식', type: [0] },
    ]
  }
]


const infoList = [
  {
    name: '나 저거 안 먹어 봤어',
    desc: ['금강산도 식후경인 당신!', '아무리 재미있는 곳이라도 배가 불러야 흥이 폭발~!', '이것도 먹고 저것도 먹을 당신에겐 소화제는 필수입니다.', '그렇다고 소화제만 믿고 과식은 금물인 거 아시죠? 다양하고 맛있는 먹거리가 있는 대만은 어떤가요?']
  },
  {
    name: '밖은 위험해',
    desc: ['내가 가는 호텔이 곧 최고의 관광지다!', '방콕러 냄새가 나는 당신! 편안하게 내 집처럼 느끼고 싶은 당신에겐', '베개가 필수입니다. 푹신푹신 베개에 파묻힌 힐링 여행을 원하나요?', '커튼을 열면 바다가 안녕하는 오션뷰 호텔이 많은 다낭은 어떤가요?']
  },
  {
    name: '가이드 따라잡기',
    desc: ['이 구역의 가이드는 바로 나!', '어느 여행지를 가도 가이드 없이 관광지를 탐방하고 싶은 욕구가 넘치는 당신에겐', '지도는 필수품입니다. 지도만 있으면 어디든 걱정 없겠죠?', '아름다운 문화유산이 숨쉬는 우리 대한민국은 어떤가요?']
  },
  {
    name: '나는 자연인이다',
    desc: ['내가 바로 김병만이다!', '속세에서 벗어나 자연을 느끼고 싶은 당신에겐', '선크림은 필수입니다. 자연이 좋아도 여러분의 피부는 소중하니까요!', '건물보다는 바오밥 나무와 에메랄드 빛 바다가 숨 쉬는 마다가스카르는 어떤가요?']
  },
  {
    name: '왼손에는 쇼핑백, 오른손에는 커피',
    desc: ['오늘은 내가 만수르!', '오늘만은 돈 걱정은 미뤄두고 사치에 전념하는 당신에겐', '머니머니해도 머니가 필수품입니다. 그래도 한도 초과는 안돼요~', '쇼핑의 메카 홍콩으로 떠나요! 지금 바로 롸잇 나우!']
  },
]