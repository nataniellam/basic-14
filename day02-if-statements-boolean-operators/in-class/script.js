var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var rollDigit = function () {
  var randomDecimal = Math.random() * 9;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var roll9999 = function () {
  var randomDecimal = Math.random() * 9999;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();

  var message = "default";

  //Rules //
  if (
    input == randomDiceNumber1 ||
    input == randomDiceNumber2 ||
    randomDiceNumber1 + randomDiceNumber2 == 11
  ) {
    message = `You rolled a ${randomDiceNumber1} and ${randomDiceNumber2}, you win!`;
  } else {
    message = `You rolled a ${randomDiceNumber1} and ${randomDiceNumber2}, you lose.`;
  }
  return message;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var message = "Please enter a food name";

  return message;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var message = "Default";

  var randomDigit1 = rollDigit();
  var randomDigit2 = rollDigit();
  var randomDigit3 = rollDigit();
  var randomDigit4 = rollDigit();

  if (
    input == randomDigit1 ||
    input == randomDigit2 ||
    input == randomDigit3 ||
    input == randomDigit4
  ) {
    message = `You win! You guessed ${input}, the four digits are ${randomDigit1}, ${randomDigit2}, ${randomDigit3}, and ${randomDigit4}.`;
  } else {
    message = `You lose! You guessed ${input}, the four digits are ${randomDigit1}, ${randomDigit2}, ${randomDigit3}, and ${randomDigit4}.`;
  }

  return message;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var message = "Default";

  var randomDish = rollDice();
  var uncleDish = "Random Dish";

  if (randomDish === 1) {
    uncleDish = "Chicken Rice";
  } else if (randomDish === 2) {
    uncleDish = "Roti Prata";
  } else if (randomDish === 3) {
    uncleDish = "Nasi Lemak";
  } else if (randomDish === 4) {
    uncleDish = "Hokkien Mee";
  } else if (randomDish === 5) {
    uncleDish = "Bak Kut Teh";
  } else if (randomDish === 6) {
    uncleDish = "Laksa";
  }

  if (input == uncleDish) {
    message = `The random dish is ${uncleDish}, you have guessed correctly! You get a free meal!`;
  } else {
    message = `The random dish is ${uncleDish}, you have guessed incorrectly.`;
  }

  return message;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var message = "Default";
  var winningNumber = roll9999();
  var difference = Math.abs(winningNumber - input);

  if (difference <= 1000) {
    message = `The winning number is ${winningNumber}, you guessed within 1000 of it!`;
  } else {
    message = `The winning number is ${winningNumber}, you guessed wrong!`;
  }
  return message;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var message = "Please enter rice or noodle";

  //Randomly generate 2 rice dishes//
  var randomFood = rollDice();
  var randomRice = "";
  var randomNoodle = "";

  if (randomFood === 1) {
    (randomRice = "Chicken Rice and Nasi Lemak") &&
      (randomNoodle = "Hokkien Mee and Laksa");
  } else if (randomFood === 2) {
    (randomRice = "Chicken Rice and Bak Kut Teh") &&
      (randomNoodle = "Hokkien Mee and Beef Hor Fun");
  } else if (randomFood === 3) {
    (randomRice = "Chicken Rice and Roti Prata") &&
      (randomNoodle = "Hokkein Mee and Roti Prata");
  } else if (randomFood === 4) {
    (randomRice = "Nasi Lemak and Bak Kut Teh") &&
      (randomNoodle = "Laksa and Beef Hor Fun");
  } else if (randomFood === 5) {
    (randomRice = "Nasi Lemak and Roti Prata") &&
      (randomNoodle = "Laksa and Roti Prata");
  } else if (randomFood === 6) {
    (randomRice = "Bak Kut Teh and Roti Prata") &&
      (randomNoodle = "Beef Hor Fun and Roti Prata");
  }

  if (input === "Rice" || input === "rice") {
    message = `You will be served ${randomRice}.`;
  } else if (input === "Noodle" || input === "noodle") {
    message = `You will be served ${randomNoodle}`;
  }

  return message;
};
