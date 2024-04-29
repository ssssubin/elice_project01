document.addEventListener("DOMContentLoaded", function () {
  fetch("../src/json/footmember.json")
    .then((response) => response.json())
    .then((data) => {
      const membersContainer = document.getElementById("members-container");

      data.forEach((member) => {
        const memberDiv = document.createElement("div");
        memberDiv.className = "member";

        const namePara = document.createElement("p");
        namePara.textContent = member.name;

        const emailButton = document.createElement("button");
        emailButton.innerHTML = '<i class="fa-solid fa-at"></i>';
        emailButton.addEventListener("click", function () {
          alert(`Email: ${member.email}`);
        });

        const emailPara = document.createElement("p");
        emailPara.textContent = member.email;

        memberDiv.appendChild(namePara);
        memberDiv.appendChild(emailButton);
        memberDiv.appendChild(emailPara);

        membersContainer.appendChild(memberDiv);
      });
    })
    .catch((error) => console.error("Error fetching team data:", error));
});
