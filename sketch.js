let x;
let y;
let z;

let string = "SAMSUNG GALAXY UNPACK 25"; // 표시할 문자열
let charPositions = []; // 문자열의 문자 위치 배열
let charDisplayed = false; // 문자 위치가 설정되었는지 확인

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  z = 0;
  textSize(20); // 텍스트 크기
  textAlign(CENTER, CENTER); // 텍스트 정렬
}

function draw() {
  x += 3;
  y += 4;
  z += 3;

  let centerX = mouseX;
  let centerY = mouseY;

  let numRects = 20; // 각 단의 사각형 개수
  let rectWidth = windowWidth / numRects; // 사각형 너비
  let numRows = 10; // 단 개수
  let rectHeight = windowHeight / numRows; // 단 높이

  // 밝고 미래지향적인 색상 팔레트
  let colorPalettes = [
    [color('#00bcd4'), color('#03a9f4'), color('#4caf50')], // 청량한 블루, 네온 블루, 밝은 초록색
    [color('#8e24aa'), color('#ff9800'), color('#00e5ff')], // 네온 핑크, 오렌지, 블루
    [color('#ff4081'), color('#6200ea'), color('#00bcd4')], // 밝은 핑크, 보라색, 청량한 블루
    [color('#f44336'), color('#ffeb3b'), color('#2196f3')], // 강렬한 빨간색, 노란색, 파란색
    [color('#4caf50'), color('#ff9800'), color('#9c27b0')]  // 초록, 오렌지, 보라색
  ];

  for (let row = 0; row < numRows; row++) { // 10단 반복
    for (let i = 0; i < numRects; i++) {
      // 각 단마다 다른 각도 오프셋
      let angleOffset = i * 10 + row * 100;

      // 단별 색상 조합
      let colors = colorPalettes[row % colorPalettes.length]; // 색상 순환

      fillGradient('conic', {
        from: [centerX, centerY, x + angleOffset],
        steps: colors
      });

      // 사각형 그리기
      rect(i * rectWidth, row * rectHeight, rectWidth, rectHeight);
    }
  }
   noStroke();
}

// 커스텀 fillGradient 함수 (필요 시 작성 또는 구현)
function fillGradient(type, options) {
  console.log(`Gradient Type: ${type}, Options:`, options);
}

