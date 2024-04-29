const headerHeight = document.querySelector("header").offsetHeight

const navList = document.querySelectorAll("nav ul li")

navList.forEach((nav, idx) => {
  nav.addEventListener("click", addActiveItem)
  const aTag = nav.querySelector("a")
  aTag.addEventListener("click", scrollSmooth)
})

function addActiveItem() {
  const activeItem = document.querySelector("nav ul li.active")

  activeItem.classList.remove("active")

  this.classList.add("active")
}

function scrollSmooth(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href")
  const targetSection = document.querySelector(targetId)

  const targetPosition = targetSection.offsetTop - headerHeight

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// home화면은 header가 얹혀져 있기때문에, 그만큼 위에 padding 값을 줘서 밀어내 home 화면을 보이게함.

// 함수를 사용하여 headerHeight를 동적으로 계산합니다.
function calculateHeaderHeight() {
  const headerHeight = document.querySelector("header").offsetHeight;
  const homePlusHeight = document.querySelector("#home");
  homePlusHeight.style.paddingTop = headerHeight + "px";
}

calculateHeaderHeight();

window.addEventListener("resize", calculateHeaderHeight);


// // 스크롤 이벤트를 감지하여 활성 상태를 변경합니다.
// window.addEventListener("scroll", function () {
//   const scrollPosition = window.scrollY; // 현재 스크롤 위치
//   const sectionList = document.querySelectorAll("section")

//   // 각 섹션의 위치를 비교하여 활성 상태를 변경합니다.
//   sectionList.forEach(section => {
//     const sectionTop = section.offsetTop - headerHeight; // 섹션의 상단 위치
//     const sectionBottom = section.offsetTop + section.offsetHeight;

//     // 스크롤 위치가 섹션의 범위에 포함되는지 확인합니다.
//     if (scrollPosition >= sectionTop || scrollPosition < sectionBottom) {
//       // 해당 섹션에 도달했을 때, 해당 섹션의 ID 값을 가져와서 네비게이션 메뉴의 활성 상태를 변경합니다.
//       const sectionId = section.getAttribute("id");
//       navList.forEach(function (navItem) {
//         console.log(navItem)
//         navItem.classList.remove("active"); // 모든 네비게이션 메뉴의 활성 상태를 제거합니다.
//         if (navItem.querySelector("a").getAttribute("href") === `#${sectionId}`) {
//           navItem.classList.add("active"); // 해당 섹션에 대응하는 네비게이션 메뉴의 활성 상태를 추가합니다.
//         }
//       });
//     }
//     else if (scrollPosition < headerHeight) {
//       navList.forEach(function (navItem) {
//         if (navItem.querySelector("a").getAttribute("href") === "#home") {
//           navItem.classList.add("active");
//         }
//       })
//     }


//   });
// });

// function changeActive()