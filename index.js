//functionality for selected products
//custom function

function getAllButtonById(idName) {
  let query = `button[id^=${idName}]`;
  let allButton = document.querySelectorAll(query);
  return allButton;
}

const playerList = document.getElementById("selected-player-list");

getAllButtonById("player").forEach((button) => {
  button.addEventListener("click", function () {
    let nullSentence = document.getElementById("null");
    nullSentence.setAttribute("style", "display:none;");
    let playerName = button.parentElement.childNodes[3].innerText;

    const li = document.createElement("li");
    li.innerText = `${playerList.childElementCount}. ${playerName}`;
    li.className = "text-white text-center";

    if (playerList.childElementCount < 6) {
      playerList.appendChild(li);

      button.setAttribute("disabled", true);
      button.classList.remove("bg-gray-600");
      button.classList.add("bg-gray-600");
    } else {
      alert("Sorry Can't Select More :( ");
    }
  });
});

//functionality for calculating budget
