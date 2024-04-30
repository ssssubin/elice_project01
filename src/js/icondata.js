document.addEventListener("DOMContentLoaded", function () {
  fetch("./json/icondata.json") // JSON 파일 불러오기
    .then((response) => response.json())
    .then((data) => {
      const iconContainer = document.getElementById("iconContainer");
      data.icons.forEach((icon) => {
        const link = document.createElement("a");
        link.href = icon.url;
        link.target = "_blank";

        const iconElement = document.createElement("i");
        iconElement.className = icon.class;
        iconElement.style.color = icon.color;

        link.appendChild(iconElement);
        iconContainer.appendChild(link);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});

function redirectTo(url) {
  window.open(url, "_blank");
}
