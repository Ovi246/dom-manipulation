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
//custom function

function getInputValueById(idName) {
  const inputObj = document.getElementById(`${idName}`);
  let inputValue = parseInt(inputObj.value);
  if (isNaN(inputValue)) {
    let inputs = document.getElementsByTagName("input");
    for (const input of inputs) {
      input.value = "Enter a Number";
    }
  }
  return inputValue;
}

document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    let perPlayerCost = getInputValueById("per-player-cost");
    let playerExpenses = perPlayerCost * (playerList.childElementCount - 1);
    document.getElementById("player-expenses").innerText = playerExpenses;
  });

document
  .getElementById("calculate-button-total")
  .addEventListener("click", function () {
    let managerCost = getInputValueById("manager-cost");
    let coachCost = getInputValueById("coach-cost");
    let perPlayerCost = getInputValueById("per-player-cost");
    let playerExpenses = perPlayerCost * (playerList.childElementCount - 1);

    let totalExpenses = managerCost + coachCost + playerExpenses;
    document.getElementById("total-expenses").innerText = totalExpenses;
  });
