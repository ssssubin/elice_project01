const desContent = document.querySelectorAll(".detail .content");
const jsToggleBtn = document.querySelector("#jsToggleBtn");
const braveToggleBtn = document.querySelector("#braveToggleBtn");
const mozillaToggleBtn = document.querySelector("#mozillaToggleBtn");
// const pieChart = document.querySelector(".pieChart");
const pieChart = document.querySelector(".pieChart");
// programming 언어들
const programLang = document.querySelectorAll(".programLang");
const toggleBtnIcon = document.querySelectorAll(".fa-caret-right");
// js, brave, mozilla 내용 + 파이 차트 출력하는 함수
const displayJsDescription = (e) => {
  //토글 기능 & classlist 활용
  //-> js, brave, mozilla 내용 보였다가 안보였다 반복
  // e.target 사용하여 조건문 작성
  if (e.target === toggleBtnIcon[0] || e.target === jsToggleBtn) {
    jsToggleBtn.classList.toggle("toggle");
    pieChart.classList.toggle("hidden");
    desContent[0].classList.toggle("hidden");
    programLang.forEach((i) => i.classList.toggle("hidden"));
  } else if (e.target === toggleBtnIcon[1] || e.target === braveToggleBtn) {
    braveToggleBtn.classList.toggle("toggle");
    desContent[1].classList.toggle("hidden");
  } else {
    mozillaToggleBtn.classList.toggle("toggle");
    desContent[2].classList.toggle("hidden");
  }
};

jsToggleBtn.addEventListener("click", displayJsDescription);
braveToggleBtn.addEventListener("click", displayJsDescription);
mozillaToggleBtn.addEventListener("click", displayJsDescription);

// hover 기능 구현 -> classList 사용하여 hidden 클래스 추가 및 제거
// 첫 번째 약력 그래프 hover 기능 구현
const YearTri = document.querySelectorAll(".first .graph .YearTri");
const YearDes = document.querySelectorAll(".first .graph .YearDes");
const circle = document.querySelectorAll(".circle");
for (let i = 0; i < 3; i++) {
  // 마우스를 기점에 hover 되었을 때
  circle[i].addEventListener("mouseover", function () {
    YearDes[i].classList.remove("hidden");
    YearTri[i].classList.remove("hidden");
  });
  // 마우스가 기점에 hover 되지 않았을 때
  circle[i].addEventListener("mouseout", function () {
    YearDes[i].classList.add("hidden");
    YearTri[i].classList.add("hidden");
  });
}

// 두 번째 약력 그래프 hover 기능 구현
const secondYearTri = document.querySelectorAll(".secondYearTri");
const secondYearDes = document.querySelectorAll(".secondYearDes");
const secondCircle = document.querySelectorAll(".second__circle");
for (let i = 0; i < 3; i++) {
  secondCircle[i].addEventListener("mouseover", function () {
    secondYearDes[i].classList.remove("hidden");
    secondYearTri[i].classList.remove("hidden");
  });
  secondCircle[i].addEventListener("mouseout", function () {
    secondYearDes[i].classList.add("hidden");
    secondYearTri[i].classList.add("hidden");
  });
}

// 세 번째 약력 그래프 hover 기능 구현
const thirdYearTri = document.querySelectorAll(".third .graph .YearTri");
const thirdYearDes = document.querySelectorAll(".third .graph .YearDes");
const thirdCircle = document.querySelectorAll(".third .graph .circle");
for (let i = 0; i < 2; i++) {
  thirdCircle[i].addEventListener("mouseover", function () {
    thirdYearDes[i].classList.remove("hidden");
    thirdYearTri[i].classList.remove("hidden");
  });
  thirdCircle[i].addEventListener("mouseout", function () {
    thirdYearDes[i].classList.add("hidden");
    thirdYearTri[i].classList.add("hidden");
  });
}
