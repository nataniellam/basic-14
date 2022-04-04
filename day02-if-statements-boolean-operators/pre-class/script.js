var orangeJuice1 = function (numberOfGuests) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var totalOrangeRequired = numberOfGuests * 2 * 4;
  var message = `${totalOrangeRequired} oranges required`;
  return message;
};

var orangeJuiceMain = function (numberOfGuests, numberOfGlasses) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var totalOrangeRequired = numberOfGuests * numberOfGlasses * 4;
  var message = `${totalOrangeRequired} oranges required`;
  return message;
};

var paint1 = function (costPaintLitre) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var totalArea = 6 * (3 * 3);
  var paintRequired = (1 / 300) * (totalArea * 2);
  var totalCost = (costPaintLitre * paintRequired).toFixed(2);
  var message = `The price for painting your home is $${totalCost}`;
  return message;
};

var paintMain = function (costPaintLitre, numberOfRooms, numberOfCoats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var totalArea = numberOfRooms * (3 * 3);
  var paintRequired = (1 / 300) * (totalArea * numberOfCoats);
  var totalCost = (costPaintLitre * paintRequired).toFixed(2);
  var message = `The price for painting your home is $${totalCost}`;
  return message;
};

var rollDice = function (rigged = true) {
  //Rigged dice to return a 6 in debug mode//
  if (rigged) {
    console.log("Rigged dice, will only return 6");
    return 6;
  }

  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var randomDiceNumber = rollDice();

  // Personalise the output
  var message = `You just rolled a ${randomDiceNumber}! `;

  //If the guess is correct, the user wins.//
  //If the guess is off by 1, the user wins.//
  if (
    input == randomDiceNumber ||
    input == randomDiceNumber + 1 ||
    input == randomDiceNumber - 1
  ) {
    message = `You rolled a ${randomDiceNumber}. You guessed correctly.`;
  } else if (input == randomDiceNumber + 2) {
    message = `You rolled a ${randomDiceNumber}. It missed by 2.`;
  } else if (input == randomDiceNumber - 2) {
    message = `You rolled a ${randomDiceNumber}. It missed by 2.`;
  } else {
    message += `You lose.`;
  }

  // Return and print output.
  return message;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var message = "hello world";
  if (input == "123") {
    message = `You wrote the secret message!`;
  }
  return message;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDiceNumber = rollDice();

  var message = `You guessed wrongly, the dice number was ${randomDiceNumber} .`;

  // Personalise the output
  if (input == randomDiceNumber) {
    message = `Congrats, you guessed the correct dice number!`;
  } else {
    message += `You lose`;
  }
  // Return and print output.
  return message;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDiceNumber = rollDice();

  var message = `You guessed wrongly, the dice number was ${randomDiceNumber}.`;

  // Personalise the output
  if (input == randomDiceNumber / 2) {
    message = `Congrats, you guessed the correct number! The dice number was ${randomDiceNumber}.`;
  } else if (input >= 3) {
    message = `You can only win if you enter 1 -3. Please try again.`;
  } else {
    message += `You lose`;
  }
  // Return and print output.
  return message;
};
