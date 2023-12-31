const str = `
010-1234-5678
thececond@gmail.com
https://www.omdbapi.com/?apikey=4a27f4b6&s=frozen
the quick brown fox jumps over the lazy dog.
addccddd
hxyps
table
http://localhost:1234/
동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세
`

// 'the'가 들어간 문자열 찾기

//1. 생성자 함수
const regexp1 = new RegExp('the', 'g');
console.log(str.match(regexp1));

//2. 리터럴 함수
const regexp2 = /the/gi
console.log(str.match(regexp2));

//  패턴1-------------------------------------
// t로 시작하는 문자열 찾기
// 주의사항1 문자열 앞에 공백이 있으면 안됨.
// g만 입력하면 null => m추가
console.log(
  str.match(/^t/gim)   //g = 글로벌, i = 대소문자, m = 여러줄
);


// d로 끝나는 문자열 찾기
// g만 입력하면 null => m(multi line)추가
console.log(
  str.match(/d$/gm)
);

// .임이의 문자와 일치
console.log(
  str.match(/.om/g)
);

// h로 시작하고 s로 끝나는 문자열 찾기
console.log(
  str.match(/h...s/g)
);

// fox와 dog를 |로 찾기
console.log(
  str.match(/fox | dog/g)
);

// http와 https를 ?로 모두 검색
console.log(
  str.match(/https?/g)
);



// 패턴2 --------------------------------------
// d가 2개 연속 일치하는지
console.log(
  str.match(/d{2}/g)
);

// d가 2개이상 4개 이하
console.log(
  str.match(/d{2,4}/g)
);

// 패턴3-----------------------------------------
// f,o,x
console.log(
  str.match(/[fox]/g)
);

// 번호 0부터 9까지 연속된 데이터
console.log(
  str.match(/[0-9]{1,}/g)
);

// 가부터 힣까지 3개 이상 연속된 데이터 찾기
console.log(
  str.match(/[가-힣]{3,}/g)
);


// 패턴4-----------------------------------------
// 영어 대소문자, 숫자 모두 검색
console.log(
  str.match(/\w/g)
);

// 63개 문자를 제외한 모두 검색
console.log(
  str.match(/\b/gm)
);

// f로 시작하고 1개이상 일치하는 문자 검색
console.log(
  str.match(/\bf\w{1,}/g)
);

// 숫자 중에 1개 이상 연속된 데이터 출력
console.log(
  str.match(/\d{1,}/g)
);

// 공백
console.log(
  str.match(/\s/g)
);


// 패턴5---------------------------------------
const email = 'hongteacher@nate.com'

// 메일 주소의 @앞의 문자열만 가져오기
console.log(
  email.match(/.{1,}(?=@)/g)
);

// 메일주소의 @뒤의 문자열만 가져오기
console.log(
  email.match(/(?<=@).{1,}/g)
);

