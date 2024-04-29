var modalOpen = document.querySelector(".box2");
var modalClose = document.querySelector(".close");
var modal = document.querySelector(".modal");

modalOpen.addEventListener("click", function () {
  modal.style.display = "block";
});
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document
  .querySelector(".modalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    alert("제출되었습니다.");
    modal.style.display = "none";

    window.location.reload();
  });

var modalForm = document.querySelector(".modalForm");

modalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var userIdValue = document.querySelector(".userId").value;
  var contentValue = document.querySelector("textarea.content").value;
  var newGuestBox = document.createElement("div");
  newGuestBox.classList.add("guestBox");

  newGuestBox.innerHTML = `
  <div class="title">
    <p>${userIdValue}</p>
    <div class="action">
      <button class="edit">수정</button>
      <button class="delete">삭제</button>
    </div>
  </div>
  <div class="guestBoxBox">
    <p class="guestContent">${contentValue}</p>
  </div>
`;

  var additionalBoxes = document.querySelector(".additionalBoxes");
  additionalBoxes.appendChild(newGuestBox);

  modalForm.reset();

  saveDataToLocalStorage();

  window.location.reload();
});

window.addEventListener("load", function () {
  loadDataFromLocalStorage();
});

function saveDataToLocalStorage() {
  var additionalBoxes = document.querySelector(".additionalBoxes");
  localStorage.setItem("guestBoxes", additionalBoxes.innerHTML);
}

function loadDataFromLocalStorage() {
  var additionalBoxes = document.querySelector(".additionalBoxes");
  additionalBoxes.innerHTML = localStorage.getItem("guestBoxes");
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    var confirmDelete = confirm("삭제하시겠습니까?");
    if (confirmDelete) {
      var guestBox = event.target.closest(".guestBox");
      if (guestBox) {
        var guestBoxId = guestBox.dataset.id;

        localStorage.removeItem(guestBoxId);

        guestBox.remove();

        saveDataToLocalStorage();
      }
    }
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit")) {
    var guestBox = event.target.closest(".guestBox");
    var userId = guestBox.querySelector(".title p").textContent.trim();
    var content = guestBox.querySelector(".guestContent").textContent.trim();
    var editModal = document.querySelector(".editModal");
    editModal.style.display = "block";

    var userIdInput = editModal.querySelector(".editUserId");
    userIdInput.value = userId;

    var contentInput = editModal.querySelector(".editContent");
    contentInput.value = content;

    editModal
      .querySelector(".editModalForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        var editedUserId = userIdInput.value.trim();
        var editedContent = contentInput.value.trim();

        guestBox.querySelector(".title p").textContent = editedUserId;
        guestBox.querySelector(".guestContent").textContent = editedContent;

        alert("수정되었습니다.");

        editModal.style.display = "none";

        saveDataToLocalStorage();

        window.location.reload();
      });
  }
});

document
  .querySelector(".closeEditModal")
  .addEventListener("click", function () {
    var editModal = document.querySelector(".editModal");
    editModal.style.display = "none";
  });
{
  {
  }
}
