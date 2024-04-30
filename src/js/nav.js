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

    // 현재 섹션 결정
    if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
      current = section.getAttribute("id"); // 현재 섹션의 ID 저장
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

// 네비게이션 메뉴에 클릭 이벤트 추가
// 네비게이션 메뉴에 클릭 이벤트 추가
navList.forEach((navItem) => {
  const navLink = navItem.querySelector("a");
  const sectionId = navLink.getAttribute("href").substring(1);

  // "home" 섹션인 경우 페이지 맨 위로 스크롤
  if (sectionId === "home") {
    navItem.addEventListener("click", (event) => {
      // 현재 활성화된 섹션이 "home" 섹션인 경우에만 페이지 맨 위로 스크롤
      if (document.querySelector(".active a").getAttribute("href").substring(1) === "home") {
        window.scrollTo({
          top: -headerHeight, // 페이지 맨 위로 스크롤
          behavior: "smooth"
        });
      }
    });
  } else {
    // 다른 섹션인 경우 해당 섹션으로 스크롤
    navItem.addEventListener("click", () => {
      const section = document.getElementById(sectionId);
      window.scrollTo({
        top: section.offsetTop - headerHeight, // 해당 섹션의 상단으로 스크롤
        behavior: "smooth"
      });
    });
  }
});


// // 함수를 사용하여 headerHeight를 동적으로 계산합니다.
function calculateHeaderHeight() {
  const headerHeight = document.querySelector("header").offsetHeight;

  sections.forEach(section => {
    if (section.getAttribute("id") === "frame") { // home 섹션이 아닌 경우에만 패딩 추가
      section.style.paddingTop = 0;
    } else {
      section.style.paddingTop = headerHeight + "px"; // home 섹션일 때 패딩 제거
    }
  });
}

calculateHeaderHeight();

window.addEventListener("resize", calculateHeaderHeight);

