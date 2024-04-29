// modal 외부 클릭하면 닫히게

const shareModal = document.querySelector(".shareModal");
const modalOverlay = document.querySelector(".modalOverlay");
const btnShareTw = document.querySelector(".x");
const btnShareFb = document.querySelector(".fb");
const btnShareKakao = document.querySelector("#shareKakao");
const btnShareDiscord = document.querySelector("#shareDiscord");

// SDK 초기화 여부를 판단합니다.
Kakao.init("6c64226e9766ad1a2f3a2a56614cad0c");
function openModal() {
  modalOverlay.style.display = "block";
  shareModal.style.display = "block";
}

function closeModal() {
  modalOverlay.style.display = "none";
  shareModal.style.display = "none";
}

btnShareTw.addEventListener("click", () => {
  const sendText = "엘리스 팀프로젝트 1팀";
  const pageUrl = "http://127.0.0.1:5500/eich_introduction/index.html";
  window.open(
    `https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`
  );
});

// 카카오톡 공유하기 API
function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: "text",
    text: "1팀 웹 페이지로 넘어오시렵니까?",
    link: {
      // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      mobileWebUrl: "https://bright-churros-ab86fe.netlify.app",
      webUrl: "https://bright-churros-ab86fe.netlify.app",
    },
  });
}
// Facebook 공유 기능
btnShareFb.addEventListener("click", () => {
  const pageUrl = "http://127.0.0.1:5500/eich_introduction/index.html";
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
});
