// [Eric] Good HTML manipulative

//Game mode//
var NUMBEROFPLAYERS = "Select number of players";
var ROLLDICE = "Roll dices";
var currentGameMode = NUMBEROFPLAYERS;

//Number of players//
var numberOfPlayers = 0;
var player = [];

//Create new players//
var createPlayers = function (input) {
  // [Eric] good use of loops to create number of players
  for (var i = 0; i < input; i += 1) {
    player[i] = [];
  }
};

//Roll dice//
var rollDice = function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

// //Roll 2 dices and form highest combo//
// var playGame = function () {
//   var dice1 = rollDice();
//   var dice2 = rollDice();
//   if (dice1 > dice2) {
//     var finalValue = Number(`` + dice1 + dice2);
//   } else finalValue = Number(`` + dice2 + dice1);
//   return finalValue;
// };

//Roll x dices and form highest combo//
var allDiceRolls = [];
var allWinners = [];

var playGame = function (input) {
  for (var a = 0; a < input; a += 1) {
    allDiceRolls.push(rollDice());
  }
  // [Eric] good job on Google for Array methods
  allDiceRolls.sort();
  allDiceRolls.reverse();
  // [Eric] good use of Number to do "validation"
  var finalNumber = Number(allDiceRolls.join(""));
  return finalNumber;
};

//Decide game winner//
var gameWinner = function () {
  var winningNumber = player[0];
  for (var k = 0; k < numberOfPlayers; k += 1) {
    if (player[k] > winningNumber) {
      winningNumber = player[k];
    }
  }

  // [Eric] hardcode your dicerolls, and check this function with console.log
  for (var m = 0; m < numberOfPlayers; m += 1) {
    var currentPlayer = player[m];
    if (currentPlayer === winningNumber) {
      allWinners.push(m + Number(1));
    }
  }
  return `<br>Player ${allWinners} won with a score of <b>${winningNumber}</b>.`;
};

//.................................................................//

var main = function (input) {
  var message = ``;

  //Select number of players//
  if (currentGameMode === NUMBEROFPLAYERS) {
    if (input > Number(0)) {
      createPlayers(input);
      numberOfPlayers = numberOfPlayers + Number(input);
      message = `You have selected <b>${numberOfPlayers}</b> players.<br>Select the number of dices that you want to roll next.`;
      currentGameMode = ROLLDICE;
    } else message = `Please input the <b>number of players</b>.`;
  }
  //All players roll their dices//
  else if (currentGameMode === ROLLDICE) {
    if (input > Number(0)) {
      for (var j = 0; j < numberOfPlayers; j += 1) {
        player[j].push(playGame(input));
        message += `Player ${j + Number(1)} rolled a ${player[j]}.<br>`;
        allDiceRolls = [];
      }
      message += gameWinner();

      message += `<br><br><i>Input the number of dices to roll and hit the submit button to play again.<i>`;
    } else message = `Please input the <b>number of dices</b>.`;
  }
  for (var l = 0; l < numberOfPlayers; l += 1) {
    player[l] = [];
  }
  allWinners = [];
  return message;
};
