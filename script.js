let gameFlow = "X";
const playerX = [];
const playerO = [];

const gameWinningCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

addEventListener("click", (e) => {
  if (e.target.dataset.set < 10 && e.target.dataset.set > 0) {
    const marker = document.createElement("p");
    markerNumber = e.target.getAttribute("data-set");

    if (gameFlow == "X" && !e.target.classList.contains("placed")) {
      e.target.classList.add("placed");
      marker.textContent = "X";
      document
        .querySelector(`[data-set="${markerNumber}"]`)
        .appendChild(marker);
      console.log(`You clicked tile number ${markerNumber}`);
      gameFlow = "O";
      playerX.push(markerNumber);
    } else if (gameFlow == "O" && !e.target.classList.contains("placed")) {
      e.target.classList.add("placed");
      marker.textContent = "O";
      document
        .querySelector(`[data-set="${markerNumber}"]`)
        .appendChild(marker);
      gameFlow = "X";
      playerO.push(markerNumber);
      for (let i = 0; i < gameWinningCombo.length; i++) {
        for (let x of gameWinningCombo[i]) {
          console.log([...playerO].includes(x[i]));
        }
      }
    }
  }
});

const winningLogic = (array) => {
  for (let i = 0; array.length - 1; i++) {
    array.includes(...playerO);
  }
};
