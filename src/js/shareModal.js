const shareModal = document.querySelector(".shareModal");
const modalOverlay = document.querySelector(".modalOverlay");
// modal 외부 클릭하면 닫히게
const btnShareTw = document.querySelector(".x");
const btnShareFb = document.querySelector(".fb");
const btnShareKakao = document.querySelector("#shareKakao");
const btnShareDiscord = document.querySelector("#shareDiscord");

function openModal() {
  modalOverlay.style.display = "block";
  shareModal.style.display = "block";
}

function closeModal() {
  modalOverlay.style.display = "none";
  shareModal.style.display = "none";
  copyClip.innerHTML = '<i class="fa-regular fa-clone"></i>';
}

btnShareTw.addEventListener("click", () => {
  const sendText = "엘리스 팀프로젝트 1팀";
  const pageUrl = "http://127.0.0.1:5500/eich_introduction/index.html";
  window.open(
    `https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`
  );
});

// Facebook 공유 기능
btnShareFb.addEventListener("click", () => {
  const pageUrl = "http://127.0.0.1:5500/eich_introduction/index.html";
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
});

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

// 페이지 링크 복사하는 기능(Clipboad API 사용)
const copyClip = document.querySelector(".copy");
copyClip.addEventListener("click", function copyToClipBoard() {
  let content = document.querySelector(".modalLink .link p").innerHTML;

  // 복사하는 기능
  navigator.clipboard
    .writeText(content)
    .then(() => {
      // 복사가 잘 됐을 경우
      console.log("Text copied to clipboard...");
      copyClip.innerHTML = '<i class="fa-solid fa-check"></i>';
    })
    .catch((err) => {
      // 복사가 안 됐을 경우
      console.log("Something went wrong", err);
    });
});

// 이메일 공유하기 버튼 클릭 시
// prompt 창 띄워서 이메일 입력할 수 있도록 하는 함수
function writeEmail() {
  let email = prompt("이 페이지를 공유할 이메일을 입력해주세요" + "");
  // 작성한 이메일에 @가 없으면 다시 입력하라는 알림창 띄운 후
  // 다시 writeEmail 함수 호출
  if (!email.includes("@")) {
    alert("올바른 이메일 주소를 입력해주세요.");
    writeEmail();
  } else {
    sendEmail(email); // 이메일 전송하는 함수로 email 넘김
  }
}

// 이메일 보내는 함수
function sendEmail(email) {
  // 이메일 주소 = prompt에서 작성한 이메일
  let emailAddress = email;
  // 이메일 제목
  let emailSubject = "제목을 입력하세요";
  // 이메일 본문
  let emailBody = "1조의 웹 페이지입니다. 클릭 -> " + window.location.href;
  // 이메일 주소, 제목, 본문을 URL 인코딩
  emailAddress = encodeURIComponent(emailAddress);
  emailSubject = encodeURIComponent(emailSubject);
  emailBody = encodeURIComponent(emailBody);
  // 이메일 클라이언트의 URL을 생성
  let emailLink =
    "mailto:" +
    emailAddress +
    "?subject=" +
    emailSubject +
    "&body=" +
    emailBody;
  // 이메일 클라이언트를 엶
  window.open(emailLink);
}
