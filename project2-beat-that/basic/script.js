//Roll 2 Dices Function//

// [Eric] NICE!
var rollDice = function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

//Player Turn//
// [Eric] Good all CAPS naming of non-changing variables
var PLAYER1 = "Player One";
var PLAYER2 = "Player Two";
var currentTurn = PLAYER1;

//Game Mode//
var HIGHWIN = "Player with the highest score wins";
var LOWWIN = "Player with the lowest score wins";
var currentGameMode = HIGHWIN;

//Game Step//
var ROLLDICE = "Roll the dices";
var DICEORDER = "Select the order of the dices";
var SELECTMODE = "Select the game mode";
var currentStep = SELECTMODE;

//Save Rolls//
var playerOneRolls = [];
var playerTwoRolls = [];

//Dice Total Number//
var currentScore1 = 0;
var currentScore2 = 0;
var finalScore1 = 0;
var finalScore2 = 0;

//Next Player Turn//
var playerTwoTurn = function (input) {
  currentTurn = PLAYER2;
  currentStep = ROLLDICE;
  var message = `Player 1, you chose to put ${input} first.<br>Your current score is <b>${currentScore1}</b>. `;
  if (finalScore1 > 0) {
    finalScore1 = Number(currentScore1) + finalScore1;
    message += `Your final score is <b>${finalScore1}</b>.`;
  }
  message += `<br><br>It is now Player 2's turn. Please hit the submit button to roll your dices.`;

  return message;
};

//High Rules//
var highWin = function (input) {
  if (finalScore2 <= 0) {
    var message = `Player 2, you chose to put ${input} first.<br><br>Your current score is <b>${currentScore2}</b> while Player 1's current score is <b>${currentScore1}</b>. `;
    if (currentScore2 > currentScore1) {
      message += `You won!`;
    } else if (currentScore1 > currentScore2) {
      message += `You lose.`;
      // [Eric] does this need to be else if?
    } else if (currentScore1 === currentScore2) {
      message += `It's a draw.`;
    }
  } else if (finalScore2 > 0) {
    message = `Player 2, you chose to put ${input} first.<br><br>Your current score is <b>${currentScore2}</b> and final score is <b>${finalScore2}</b>.<br>Player 1's final score is <b>${finalScore1}</b>. `;
    if (finalScore2 > finalScore1) {
      message += `You won!`;
    } else if (finalScore1 > finalScore2) {
      message += `You lose.`;
    } else if (finalScore1 === finalScore2) {
      message += `It's a draw.`;
    }
  }
  return message;
};

//Low Rules//
var lowWin = function (input) {
  if (finalScore2 <= 0) {
    var message = `Player 2, you chose to put ${input} first.<br><br>Your current score is <b>${currentScore2}</b> while Player 1's current score is <b>${currentScore1}</b>. `;
    if (currentScore2 < currentScore1) {
      message += `You won!`;
    } else if (currentScore1 < currentScore2) {
      message += `You lose.`;
    } else if (currentScore1 === currentScore2) {
      message += `It's a draw.`;
    }
  } else if (finalScore2 > 0) {
    message = `Player 2, you chose to put ${input} first.<br><br>Your current score is <b>${currentScore2}</b> and final score is <b>${finalScore2}</b>.<br>Player 1's final score is <b>${finalScore1}</b>. `;
    if (finalScore2 < finalScore1) {
      message += `You won!`;
    } else if (finalScore1 < finalScore2) {
      message += `You lose.`;
    } else if (finalScore1 === finalScore2) {
      message += `It's a draw.`;
    }
  }
  return message;
};

//Decide Game Winner//
var gameWinner = function (input) {
  var message = ``;
  //First Game//
  if (currentGameMode === HIGHWIN) {
    message = highWin(input);
  } else if (currentGameMode === LOWWIN) {
    message = lowWin(input);
  }
  //Next Game//
  currentTurn = PLAYER1;
  currentStep = ROLLDICE;
  playerOneRolls = [];
  playerTwoRolls = [];
  finalScore1 = Number(currentScore1) + finalScore1;
  finalScore2 = Number(currentScore2) + finalScore2;
  message += `<br><br>Hit the submit button to play again.`;

  return message;
};

//............................................................//

var main = function (input) {
  var message = ``;

  //Select game mode//
  if (currentStep === SELECTMODE) {
    if (input == "High") {
      // [Eric] can consider to use a return
      message = `You have selected <b>High</b>.<br>The player with the highest combined number from the dice rolls wins.<br><br>Player 1, please hit the submit button to roll your dices.`;
      currentGameMode = HIGHWIN;
      currentStep = ROLLDICE;
    } else if (input == "Low") {
      message = `You have selected <b>Low</b>.<br>The player with the lowest combined number from the dice rolls wins.<br><br>Player 1, please hit the submit button to roll your dices.`;
      currentGameMode = LOWWIN;
      currentStep = ROLLDICE;
    } else {
      message = `Please only input <b>"High"</b> or <b>"Low"</b> to contine.`;
    }
  }

  //Player 1 rolls the dice//
  else if (currentTurn === PLAYER1 && currentStep === ROLLDICE) {
    var dice1 = rollDice();
    var dice2 = rollDice();
    message = `Hi ${currentTurn}!<br><br>You rolled a <b>${dice1}</b> for Dice 1 and a <b>${dice2}</b> for Dice 2.<br><br>Select the order by typing "<b>Dice 1</b>" or "<b>Dice 2</b>" to select the first dice.`;
    currentStep = DICEORDER;
    playerOneRolls.push(dice1, dice2);
  }

  //Player 1 choose the dice order//
  else if (currentTurn === PLAYER1 && currentStep === DICEORDER) {
    //Select Dice 1//
    if (input == "Dice 1") {
      currentScore1 = `` + playerOneRolls[0] + playerOneRolls[1];
      message = playerTwoTurn(input);
    }
    //Select Dice 2//
    else if (input == "Dice 2") {
      currentScore1 = `` + playerOneRolls[1] + playerOneRolls[0];
      message = playerTwoTurn(input);
    }
    //Validation//
    else if (input !== "Dice 1" || input !== "Dice 2") {
      message = `You rolled a <b>${playerOneRolls[0]}</b> for Dice 1 and a <b>${playerOneRolls[1]}</b> for Dice 2.<br><br><b>Please only input "Dice 1" or "Dice 2".`;
    }
  }

  //Player 2 rolls the dice//
  else if (currentTurn === PLAYER2 && currentStep === ROLLDICE) {
    var dice1 = rollDice();
    var dice2 = rollDice();
    message = `Hi ${currentTurn}!<br><br>You rolled a <b>${dice1}</b> for Dice 1 and a <b>${dice2}</b> for Dice 2.<br><br>Select the order by typing "<b>Dice 1</b>" or "<b>Dice 2</b>" to select the first dice.`;
    currentStep = DICEORDER;
    playerTwoRolls.push(dice1, dice2);
  }

  //Player 2 choose the dice order//
  else if (currentTurn === PLAYER2 && currentStep === DICEORDER) {
    if (input == "Dice 1") {
      //Select Dice 1//
      currentScore2 = `` + playerTwoRolls[0] + playerTwoRolls[1];
      message = gameWinner(input);
    }
    //Select Dice 2//
    else if (input == "Dice 2") {
      currentScore2 = `` + playerTwoRolls[1] + playerTwoRolls[0];
      message = gameWinner(input);
    }
    //Validation//
    else if (input !== "Dice 1" || input !== "Dice 2") {
      message = `You rolled a <b>${playerTwoRolls[0]}</b> for Dice 1 and a <b>${playerTwoRolls[1]}</b> for Dice 2.<br><br><b>Please only input "Dice 1" or "Dice 2".`;
    }
  }

  return message;
};
