let players = () => {
  let play = {
    truth : true,
    red : 0,
    blue : 0,
    ties : 0
   }
  let incrementRed = () => {
    play.red++;
  }
  let incrementBlue = () => {
    play.blue++
  }
  let ties = () => {
    play.ties++
  }
  let falsey = () => {
    play.truth = false;
  }
  let truey = () => {
    play.truth = true;
  }
  
return {falsey, truey, play, incrementBlue, incrementRed, ties}
}
let iPlay = players();

let winningCondition = () => {
let boardArr = [];
for (let i = 0; i <= 8; i++) {
  boardArr.push(document.getElementById(i));
}
let tieCheck = (e) => {
  let check =
    e.classList.contains("cell") || e.classList.contains("cell2")
      ? true
      : null;
  return check;
};
let conditions = (s1, s2, s3) => {
  let redWins =
    s1.classList.contains("cell") &&
    s2.classList.contains("cell") &&
    s3.classList.contains("cell")
      ? true
      : null;
  let blueWins =
    s1.classList.contains("cell2") &&
    s2.classList.contains("cell2") &&
    s3.classList.contains("cell2")
      ? true
      : null;
  let tie = boardArr.every(tieCheck);
  return { redWins, blueWins, tie };
};
const holder = [
  conditions(boardArr[0], boardArr[1], boardArr[2]),
  conditions(boardArr[3], boardArr[4], boardArr[5]),
  conditions(boardArr[6], boardArr[7], boardArr[8]),
  conditions(boardArr[0], boardArr[3], boardArr[6]),
  conditions(boardArr[1], boardArr[4], boardArr[7]),
  conditions(boardArr[2], boardArr[5], boardArr[8]),
  conditions(boardArr[0], boardArr[4], boardArr[8]),
  conditions(boardArr[6], boardArr[4], boardArr[2]),
];
const gameOver = () => {
  for (let i = 0; i < boardArr.length; i++) {
    boardArr[i].classList.remove("cell2");  
    boardArr[i].classList.remove("cell");
    iPlay.truey()
    let rScore = document.getElementById('red');
    let bScore = document.getElementById('blue');
    let tScore = document.getElementById('ties');
    rScore.innerHTML = iPlay.play.red;
    bScore.innerHTML = iPlay.play.blue;
    tScore.innerHTML = iPlay.play.ties;
  }
};
let winner = () => {
  for (let i = 0; i < holder.length; i++) {
    if (holder[i].redWins) {
      iPlay.incrementRed()
      setTimeout(gameOver, 2500);
      return "Red Wins!";
    } else if (holder[i].blueWins) {
      iPlay.incrementBlue()
      setTimeout(gameOver, 2500);
      return "Blue Wins!";
    } else if (
      holder[i].tie == true &&
      holder[i].blueWins == null &&
      holder[i].redWins == null
    ) {
      iPlay.ties()
      setTimeout(gameOver, 2500);
      return "Tie!";
    }
  }
};
winner()
};

let gameBoard = () => {
let grid = document.getElementById("container");
let selectedTd;

let highlight = (td) => {
  selectedTd = event.target.closest("div");;
  if (iPlay.play.truth == true) {
    selectedTd.classList.add("cell");
    iPlay.falsey();
  } else {
    if (selectedTd.classList.contains("cell")) {
      return;
    }
    selectedTd.classList.add("cell2");
    iPlay.truey();
  }
};
grid.onclick = function (event) {
  let td = event.target.closest("div");
  if (!td) return;
  if (!grid.contains(td)) return;
  if (!td.classList.contains("grid-cell")) return;
  highlight(td)
  winningCondition()
};

grid.onclick();
};
gameBoard()



