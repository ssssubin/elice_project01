const animation = document.querySelector(".animation");
const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight; // header 높이 계산
const navList = document.querySelectorAll("nav ul li");

// 스크롤 이벤트 핸들러
window.addEventListener("scroll", () => {
  let current = ""; // 현재 보여지는 섹션의 ID를 저장할 변수

  // 각 섹션에 대한 처리
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight; // 섹션의 시작 위치
    const sectionBottom = sectionTop + section.offsetHeight; // 섹션의 끝 위치

    // 태블릿 환경일 때
    if (matchMedia("min-width : 600px")) {
      if (window.scrollY >= 0 && window.scrollY <= 420) {
        current = "home";
      } else if (
        window.scrollY >= sectionTop &&
        window.scrollY <= sectionBottom
      ) {
        current = section.getAttribute("id");
      }
    }
    // 데스크탑 환경일 때
    else if (matchMedia("min-width:1024px")) {
      if (window.scrollY >= 0 && window.scrollY <= 620) {
        current = "home";
      } else if (
        window.scrollY >= sectionTop &&
        window.scrollY <= sectionBottom
      ) {
        current = section.getAttribute("id"); // 현재 섹션의 ID 저장
      }
    }
    // 모바일 환경일 때
    else {
      if (window.scrollY >= 0 && window.scrollY <= 160) {
        current = "home";
      } else if (
        window.scrollY >= sectionTop &&
        window.scrollY <= sectionBottom
      ) {
        current = section.getAttribute("id"); // 현재 섹션의 ID 저장
      }
    }
  });

  // 네비게이션 메뉴에 대한 처리
  navList.forEach((navItem) => {
    navItem.classList.remove("active"); // 모든 네비게이션 메뉴에서 활성 클래스 제거

    const navLink = navItem.querySelector("a"); // 네비게이션 메뉴의 링크

    // 현재 섹션과 링크가 일치하는 경우
    if (navLink.getAttribute("href").substring(1) === current) {
      navItem.classList.add("active"); // 현재 보여지는 섹션에 해당하는 네비게이션 메뉴에 활성 클래스 추가
      setAnimation(navLink); // 마커 위치 업데이트
    }
  });
});

// 마커 위치 업데이트 함수
function setAnimation(e) {
  animation.style.left = e.offsetLeft + "px"; // 마커의 왼쪽 위치 설정
  animation.style.width = e.offsetWidth + "px"; // 마커의 너비 설정
}

// // 함수를 사용하여 headerHeight를 동적으로 계산합니다.
function calculateHeaderHeight() {
  const headerHeight = document.querySelector("header").offsetHeight;
  const homePlusHeight = document.querySelector("#home");
  homePlusHeight.style.paddingTop = headerHeight + "px";
}

calculateHeaderHeight();

window.addEventListener("resize", calculateHeaderHeight);
