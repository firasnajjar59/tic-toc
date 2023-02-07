let letstart = document.getElementById("letstart");
let startoverlay = document.getElementById("startoverlay");
let gameZones = ["", "", "", "", "", "", "", "", ""];
let turnPlayer = 1;
let score = [0, 0];
let messeges = document.getElementById("messeges");
// assign score
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
score1.innerText = " " + score[0];
score2.innerText = " " + score[1];
//show which player turn

function checkAndAssign(a) {
  let winAtLast = 0;
  let id = document.getElementById(`box${a}`);
  if(id.innerText==""){
  if (turnPlayer == 1) {
    id.innerText = "x";
    messeges.innerText = `Now the 'O' PLAYER`;
  } else {
    id.innerText = "o";
    messeges.innerText = `Now 'X' PLAYER`;
  }

  gameZones[a] = id.innerText;

  switch (a) {
    case 0:
      if (
        (gameZones[a] == gameZones[3] && gameZones[a] == gameZones[6]) ||
        (gameZones[a] == gameZones[1] && gameZones[a] == gameZones[2]) ||
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[8])
      ) {
        whoWin();
        winAtLast++;
        console.log(0);
      }
      break;
    case 1:
      if (
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[7]) ||
        (gameZones[a] == gameZones[0] && gameZones[a] == gameZones[2])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
    case 2:
      if (
        (gameZones[a] == gameZones[1] && gameZones[a] == gameZones[0]) ||
        (gameZones[a] == gameZones[5] && gameZones[a] == gameZones[8]) ||
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[6])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
    case 3:
      if (
        (gameZones[a] == gameZones[6] && gameZones[a] == gameZones[0]) ||
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[5])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
    case 4:
      if (
        (gameZones[a] == gameZones[3] && gameZones[a] == gameZones[5]) ||
        (gameZones[a] == gameZones[1] && gameZones[a] == gameZones[7]) ||
        (gameZones[a] == gameZones[2] && gameZones[a] == gameZones[6])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
    case 5:
      if (
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[3]) ||
        (gameZones[a] == gameZones[2] && gameZones[a] == gameZones[8])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
    case 6:
      if (
        (gameZones[a] == gameZones[7] && gameZones[a] == gameZones[8]) ||
        (gameZones[a] == gameZones[3] && gameZones[a] == gameZones[0]) ||
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[2])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
    case 7:
      if (
        (gameZones[a] == gameZones[8] && gameZones[a] == gameZones[6]) ||
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[1])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
    case 8:
      if (
        (gameZones[a] == gameZones[7] && gameZones[a] == gameZones[6]) ||
        (gameZones[a] == gameZones[5] && gameZones[a] == gameZones[2]) ||
        (gameZones[a] == gameZones[4] && gameZones[a] == gameZones[0])
      ) {
        whoWin();
        winAtLast++;
      }
      break;
  }
  if (winAtLast == 0) {
    let counter = 0;
    for (let i = 0; i < gameZones.length; i++) {
      if (gameZones[i] != "") {
        counter++;
      }
    }
    if (counter == gameZones.length) {
      startoverlay.setAttribute("class", "start");
      document.getElementById("letstart").innerHTML = `GAME OVER`;
    } else {
    }
  }
  turnPlayer *= -1;
}
}
// start game or new round
function hideStartoverlay() {
  // letstart.setAttribute("class","hidden");
  startoverlay.setAttribute("class", "hidden");
  gameZones = ["", "", "", "", "", "", "", "", ""];
  resetArray();
  // turnPlayer = 1;
  // messeges.innerText = `Now the FIRST PLAYER`;
}
// rest game and score
function resetgame() {
  startoverlay.setAttribute("class", "start");
  gameZones = ["", "", "", "", "", "", "", "", ""];
  resetArray();
  score = [0, 0];
  score1.innerText = " " + score[0];
  score2.innerText = " " + score[1];
  messeges.innerText = `Now the FIRST PLAYER`;
  letstart = document.getElementById("letstart").innerText = `Let's start!!`;
  turnPlayer = 1;
}

// check who win and print it on screen
function whoWin() {
  // letstart.removeAttribute("class","hidden");
  startoverlay.setAttribute("class", "start");
  if (turnPlayer == 1) {
    document.getElementById("letstart").innerHTML = `PLAYER 1 win!!!`;
    score[0] += 1;
    score1.innerText = " " + score[0];
  } else {
    document.getElementById("letstart").innerText = `PLAYER 2 win!!!`;
    score[1] += 1;
    score2.innerText = " " + score[1];
  }
}
function resetArray() {
  for (let i = 0; i < gameZones.length; i++) {
    document.getElementById(`box${i}`).innerText = gameZones[i];
    console.log(gameZones[i]);
    console.log(gameZones[i]);
  }
}
