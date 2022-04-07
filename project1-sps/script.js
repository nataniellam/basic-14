//Game Modes//
var WAITING_USERNAME = "Username";
var SPS = "Scissor Paper Stone";
var REVERSE_SPS = "Reverse Scissor Paper Stone";
var AI = "AI Simulated Games";

var currentGameMode = WAITING_USERNAME;
var userName = ``;

//Random Output Generator//
var randomOutput = function () {
  var message = ``;
  var randomNumber = Math.random() * 3;
  var wholeNumber = Math.floor(randomNumber);
  var randomThree = wholeNumber + 1;

  if (randomThree == 1) {
    message = `Scissors`;
  } else if (randomThree == 2) {
    message = "Paper";
  } else if (randomThree == 3) {
    message = "Stone";
  }

  return message;
};

//Status Tracker//
var numberOfWins = 0;
var numberOfLoss = 0;
var numberOfDraws = 0;

//..................................................................//

//Main Game Function//
var main = function (input) {
  var message = ``;
  var counter = 1;

  //Game Modes//
  //Input Username//
  if (currentGameMode == WAITING_USERNAME) {
    userName = input;
    message = `Hi ${userName}, let's play Scissors, Paper, or Stone!<br><br>You can input "Reverse" to play the reversed version or "AI" to have the computer play for you.`;
    currentGameMode = SPS;
  }

  //Scissors Paper Stone//
  else if (currentGameMode == SPS) {
    //Random Output//
    var computerOutput = randomOutput();
    console.log(`The computer output is ${computerOutput}.`);

    //Scissor Paper Stone Rules//
    if (input === `Scissors` && computerOutput === `Scissors`) {
      numberOfDraws = numberOfDraws + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You draw.`;
    } else if (input === `Scissors` && computerOutput === `Paper`) {
      numberOfWins = numberOfWins + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You won!`;
    } else if (input === `Scissors` && computerOutput === `Stone`) {
      numberOfLoss = numberOfLoss + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You lose.`;
    } else if (input === `Paper` && computerOutput === `Scissors`) {
      numberOfLoss = numberOfLoss + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You lose.`;
    } else if (input === `Paper` && computerOutput === `Paper`) {
      numberOfDraws = numberOfDraws + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You draw.`;
    } else if (input === `Paper` && computerOutput === `Stone`) {
      numberOfWins = numberOfWins + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You won!`;
    } else if (input === `Stone` && computerOutput === `Scissors`) {
      numberOfWins = numberOfWins + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You won!`;
    } else if (input === `Stone` && computerOutput === `Paper`) {
      numberOfLoss = numberOfLoss + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You lose.`;
    } else if (input === `Stone` && computerOutput === `Stone`) {
      numberOfDraws = numberOfDraws + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You draw.`;
    }

    //Change to Reverse Scissor Paper Stone//
    else if (input === "Reverse") {
      currentGameMode = REVERSE_SPS;
      message = `The game has changed to Reverse Scissors Paper Stone 😜<br><br>You can input "Normal" to play the normal version or "AI" to have the computer play for you.`;
    }

    //Change to AI Simulation//
    else if (input === "AI") {
      currentGameMode = AI;
      message = `The game has changed to AI Simulation. Please input the number of games to be simulated.<br><br>You can input "Normal" to play the normal version or "Reverse" to play the reversed version.`;
    }

    //Reset the game stats//
    else if (input === "Reset") {
      numberOfWins = 0;
      numberOfDraws = 0;
      numberOfLoss = 0;
      message = `The game stats has been reset. Please continue playing the game.`;
    } else {
      message = `Please only input Scissors, Paper, or Stone to play the game.`;
    }
  }

  //Reverse Scissor Paper Stone//
  else if (currentGameMode == REVERSE_SPS) {
    //Random Output//
    var computerOutput = randomOutput();
    console.log(`The computer output is ${computerOutput}.`);

    //Reverse SPS Game Rules//
    if (input === `Scissors` && computerOutput === `Scissors`) {
      numberOfDraws = numberOfDraws + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You draw.`;
    } else if (input === `Scissors` && computerOutput === `Paper`) {
      numberOfWins = numberOfLoss + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You lose.`;
    } else if (input === `Scissors` && computerOutput === `Stone`) {
      numberOfLoss = numberOfWins + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You win!`;
    } else if (input === `Paper` && computerOutput === `Scissors`) {
      numberOfLoss = numberOfWins + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You win!`;
    } else if (input === `Paper` && computerOutput === `Paper`) {
      numberOfDraws = numberOfDraws + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You draw.`;
    } else if (input === `Paper` && computerOutput === `Stone`) {
      numberOfWins = numberOfLoss + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You lose.`;
    } else if (input === `Stone` && computerOutput === `Scissors`) {
      numberOfWins = numberOfLoss + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You lose.`;
    } else if (input === `Stone` && computerOutput === `Paper`) {
      numberOfLoss = numberOfWins + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You win!`;
    } else if (input === `Stone` && computerOutput === `Stone`) {
      numberOfDraws = numberOfDraws + 1;
      message = `You chose ${input} and the computer chose ${computerOutput}. You draw.`;
    }

    //Change to Scissor Paper Stone//
    else if (input === "Normal") {
      currentGameMode = SPS;
      message = `The game has changed back to normal Scissors Paper Stone.`;
    }

    //Change to AI Simulation//
    else if (input === "AI") {
      currentGameMode = AI;
      message = `The game has changed to AI Simulation. Please input the number of games to be simulated.<br><br>You can input "Normal" to play the normal version or "Reverse" to play the reversed version.`;
    }

    //Reset the game stats//
    else if (input === "Reset") {
      numberOfWins = 0;
      numberOfDraws = 0;
      numberOfLoss = 0;
      message = `The game stats has been reset. Please continue playing the game.`;
    } else {
      message = `Please only input Scissors, Paper, or Stone to play the game.`;
    }
  }

  //AI Simulation Games//
  else if (currentGameMode == AI) {
    //Simulation Loop//
    while (counter <= input) {
      var computerOutput = randomOutput();
      var userInput = randomOutput();
      console.log(
        `User Input is ${userInput}. Computer Output is ${computerOutput}.`
      );

      message += `Game ${counter}: `;

      //Scissor Paper Stone Rules//
      if (userInput === `Scissors` && computerOutput === `Scissors`) {
        numberOfDraws = numberOfDraws + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You draw.<br>`;
      } else if (userInput === `Scissors` && computerOutput === `Paper`) {
        numberOfWins = numberOfWins + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You win!<br>`;
      } else if (userInput === `Scissors` && computerOutput === `Stone`) {
        numberOfLoss = numberOfLoss + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You lose.<br>`;
        //Paper//
      } else if (userInput === `Paper` && computerOutput === `Scissors`) {
        numberOfLoss = numberOfLoss + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You lose.<br>`;
      } else if (userInput === `Paper` && computerOutput === `Paper`) {
        numberOfDraws = numberOfDraws + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You draw.<br>`;
      } else if (userInput === `Paper` && computerOutput === `Stone`) {
        numberOfWins = numberOfWins + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You win!<br>`;
        //Stone//
      } else if (userInput === `Stone` && computerOutput === `Scissors`) {
        numberOfWins = numberOfWins + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You win!<br>`;
      } else if (userInput === `Stone` && computerOutput === `Paper`) {
        numberOfLoss = numberOfLoss + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You lose.<br>`;
      } else if (userInput === `Stone` && computerOutput === `Stone`) {
        numberOfDraws = numberOfDraws + 1;
        message += `You chose ${userInput} and the computer chose ${computerOutput}. You draw.<br>`;
      }
      counter = counter + 1;
    }

    //Change to Scissor Paper Stone//
    if (input === "Normal") {
      currentGameMode = SPS;
      message = `The game has changed back to normal Scissors Paper Stone.<br><br>You can input "Reverse" to play the reversed version or "AI" to have the computer play for you.`;
    }

    //Change to Reverse Scissor Paper Stone//
    else if (input === "Reverse") {
      currentGameMode = REVERSE_SPS;
      message = `The game has changed to Reverse Scissors Paper Stone 😜<br><br>You can input "Normal" to play the normal version or "AI" to have the computer play for you.`;
    }

    //Reset the game stats//
    else if (input === "Reset") {
      numberOfWins = 0;
      numberOfDraws = 0;
      numberOfLoss = 0;
      message = `The game stats has been reset. Please continue playing the game.`;
    }
  }

  //Calculate Win Rate//
  var totalGames = numberOfWins + numberOfLoss + numberOfDraws;
  var winRate = ((numberOfWins / totalGames) * 100).toFixed(2);

  if (currentGameMode !== WAITING_USERNAME && totalGames > 0) {
    message += `<br><br>Your current win rate is ${winRate}%. (${numberOfWins} wins out of ${totalGames} games played)<br><i>Input "Reset" to reset your game stats`;
  } else if (currentGameMode !== WAITING_USERNAME && totalGames === 0) {
    message += `<br><br>Your current win rate is 0.00%. (${numberOfWins} wins out of ${totalGames} games played.)`;
  }

  console.log(
    `Win rate is ${winRate}. WLD status is ${numberOfWins}/${numberOfLoss}/${numberOfDraws}. The current game mode is ${currentGameMode}.`
  );

  return message;
};
