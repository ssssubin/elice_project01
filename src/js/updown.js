function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToBottom() {
  window.addEventListener("scroll", function noScroll() {
    window.removeEventListener("scroll", noScroll);
  });

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

const modeBtn = document.querySelector("#mode"); // 라이트/다크모드 버튼
const everyThing = document.querySelector("*"); // 모든 바디
const header = document.querySelector("header");
const footer = document.querySelector("footer");
//약력 파트 line들
const firstThirdLine = document.querySelectorAll(".line");
const secondLine = document.querySelector(".second__line");
// 방명록
const box1Border = document.querySelector(".container .box1");
// 라이트 / 다크 모드 기능 구현
const lightDarkModeBtn = (e) => {
  //버튼 안의 내용물이 "다크모드"인지 "라이트모드"인지 (if-else문 사용)
  if (e.target.innerText === "다크모드") {
    modeBtn.innerText = "라이트 모드"; // 라이트모드로 변경
    everyThing.style = "background-color:black; color:white;";
    header.style = "background-color:black;";
    footer.style = "background-color:black; color:white";
    secondLine.style = "background-color:white";
    box1Border.style = "border-color:white;";
    for (let i = 0; i < 2; i++) {
      firstThirdLine[i].style = "background-color:white;";
    }
  }
  // 버튼 안의 내용물이 라이트 모드일 때
  else {
    modeBtn.innerText = "다크모드";
    everyThing.style = "background-color:white; color:black";
    header.style = "background-color:white;";
    footer.style = "background-color:#eee; color:var(--footer-color);";
    secondLine.style = "background-color:black";
    box1Border.style = "border-color:black;";
    for (let i = 0; i < 2; i++) {
      firstThirdLine[i].style = "background-color:black;";
    }
  }
};
modeBtn.addEventListener("click", lightDarkModeBtn);
