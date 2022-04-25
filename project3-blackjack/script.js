//Generate Card Deck//
var cardDeck = function () {
  var cardDeck = [];
  var suits = ["♥️", "♦️", "♣️", "♠️"];

  for (var i = 0; i < suits.length; i += 1) {
    var currentSuit = suits[i];

    for (var cardRank = 1; cardRank <= 13; cardRank += 1) {
      var cardName = cardRank;
      var cardValue = cardRank;

      if (cardName == 1) {
        cardName = "Ace";
        cardValue = 11;
      } else if (cardName == 11) {
        cardName = "Jack";
        cardValue = 10;
      } else if (cardName == 12) {
        cardName = "Queen";
        cardValue = 10;
      } else if (cardName == 13) {
        cardName = "King";
        cardValue = 10;
      }

      var card = {
        name: cardName,
        suit: currentSuit,
        rank: cardRank,
        value: cardValue
      };

      cardDeck.push(card);
    }
  }
  return cardDeck;
};

//Shuffle Cards//
var shuffleCards = function (cardDeck) {
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    var randomIndex = Math.floor(Math.random() * cardDeck.length);
    var randomCard = cardDeck[randomIndex];
    var currentCard = cardDeck[currentIndex];

    //Swap Cards//
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;

    currentIndex += 1;
  }
  return cardDeck;
};

//..................................................................//

//Components//
var dealbutton = document.querySelector("#deal-button");
var hitbutton = document.querySelector("#hit-button");
var standbutton = document.querySelector("#stand-button");
var resultbutton = document.querySelector("#result-button");
var betbutton = document.querySelector("#bet-button");
var inputField = document.querySelector("#input-field");
var outputBox = document.querySelector("#output-div");
var chipCount = document.querySelector("#chip-count");

//Card Deck//
var newDeck = cardDeck();
var shuffledDeck = shuffleCards(newDeck);

//Game Modes//
var BET = "Place bet amount";
var DEALCARDS = "Deal cards";
var PLAYERTURN = "Player's turn";
var COMTURN = "Computer's turn";
var currentGameMode = BET;

//Hand Arrays//
var playerCards = [];
var comCards = [];

//Chips//
var totalChips = 100;
var betAmount = 0;

//..................................................................//

//Player Points//
var playerTotalValue = function () {
  var ace = false;
  var totalValue = 0;

  for (var j = 0; j < playerCards.length; j += 1) {
    totalValue += playerCards[j].value;
    if (playerCards[j].rank == 1) {
      ace = true;
    }
  }

  if (ace === true && totalValue > 21) {
    totalValue = totalValue - 10;
  }
  return totalValue;
};

//Computer Points//
var comTotalValue = function () {
  var ace = false;
  var totalValue = 0;

  for (var p = 0; p < comCards.length; p += 1) {
    totalValue += comCards[p].value;
    if (comCards[p].rank == 1) {
      ace = true;
    }
  }

  if (ace === true && totalValue > 21) {
    totalValue = totalValue - 10;
  }

  return totalValue;
};

//Hand Message//
var handMessage = function () {
  var playerHand = "Player's cards: ";
  var playerPoints = playerTotalValue();
  for (var n = 0; n < playerCards.length; n += 1) {
    playerHand += `<b>${playerCards[n].name} ${playerCards[n].suit}</b> | `;
  }
  var comHand = "Dealer's cards: ";
  var comPoints = comTotalValue();
  for (var o = 0; o < comCards.length; o += 1) {
    comHand += `<b>${comCards[o].name} ${comCards[o].suit}</b> | `;
  }
  return `${comHand} (${comPoints})<br>${playerHand} (${playerPoints})<br><br>`;
};

//Place Bet//
var number = false;
var placeBet = function (input) {
  var message = ``;
  //Number validation//
  if (Number.isNaN(Number(input))) {
    message = `Please enter a <b>number</b> for your bet amount.`;
    number = false;
    return message;
  }
  //Chip amount validation//
  if (Number(input) > totalChips) {
    message = `You have <b>${totalChips}</b> chips.<br><br>Your bet amount is more than your total amount of chips. Please input a value that's lower than <b>${totalChips}</b>.`;
    number = false;
    return message;
  }

  betAmount = Number(input);
  message = `You have placed a bet of <b>${betAmount}</b> chips. Good luck! 😉<br><br><b>Deal Cards</b> to start the game.`;
  number = true;
  return message;
};

//Player Chip Management//
var playerWin = function () {
  totalChips += betAmount;
  return `<br><br>💰 You won <b>${betAmount}</b> chips! `;
};

var playerLose = function () {
  totalChips -= betAmount;
  return `<br><br>💸 You lost <b>${betAmount}</b> chips. `;
};

var chipsNumber = function () {
  var message = ``;
  if (totalChips <= 0) {
    message = `Game Over!<br><br>You have <b>0</b> chips left!`;
  } else message = `<br><hr>🏦 You have <b>${totalChips}</b> chips left.`;
  return message;
};

//Deal Cards//
var dealCards = function () {
  for (var m = 0; m < 2; m += 1) {
    playerCards.push(shuffledDeck.pop());
    comCards.push(shuffledDeck.pop());
  }
  return handMessage();
};

//Blackjack?//
var gotBlackJack = false;

var blackJack = function () {
  var message = ``;
  var playerPoints = playerTotalValue();
  var comPoints = comTotalValue();
  //Player blackjack//
  if (playerPoints === 21 || comPoints === 21) {
    if (playerPoints === 21 && comPoints !== 21) {
      message += `Player got Blackjack! Player wins 🎉 `;
      message += playerWin();
    }
    //Dealer blackjack//
    else if (comPoints === 21 && playerPoints !== 21) {
      message += `Dealer got Blackjack! Dealer wins.`;
      message += playerLose();
    }
    //Both blackjack//
    else if (comPoints === 21 && playerPoints === 21) {
      message += `Both you and the dealer got Blackjack. It's a draw.`;
    }
    gotBlackJack = true;
    return message;
  }
  //No blackjack//
  else {
    message += `<b>Hit</b> to draw a card or <b>Stand</b> to end your turn.`;
    gotBlackJack = false;
    return message;
  }
};

//Computer Logic//
var comLogic = function () {
  var finalPlayerScore = playerTotalValue();
  var comScore = comTotalValue();
  var message = ``;

  //Dealer lower than 17//
  if (comScore < 17) {
    comCards.push(shuffledDeck.pop());
    message = comLogic();
    return message;
  }

  //Dealer busted//
  if (comScore > 21) {
    message = handMessage();
    if (finalPlayerScore > 21) {
      message += `Both you and the dealer busted. Better luck next time 😉`;
    } else if (finalPlayerScore <= 21) {
      message += `The dealer busted! Player wins 🎉`;
      message += playerWin();
    }
    message += nextGame();
    return message;
  }

  //Dealer didn't bust//
  if (comScore <= 21) {
    message = handMessage();
    //Player bust too//
    if (finalPlayerScore > 21) {
      message += `You busted. The dealer wins. Better luck next time 😉`;
      message += playerLose();
      message += nextGame();
    }
    //Player didn't bust//
    else if (finalPlayerScore <= 21) {
      if (comScore > finalPlayerScore) {
        message += `The dealer wins. Better luck next time 😉`;
        message += nextGame();
        message += playerLose();
      } else if (comScore === finalPlayerScore) {
        message += `It's a draw 🙃`;
        message += nextGame();
      } else if (comScore < finalPlayerScore) {
        comCards.push(shuffledDeck.pop());
        message = comLogic();
      }
    }
    return message;
  }
};

//Next Game//
var nextGame = function () {
  currentGameMode = BET;
  //Return cards to deck//
  shuffledDeck.push(...playerCards);
  shuffledDeck.push(...comCards);
  playerCards = [];
  comCards = [];
  dealbutton.style.display = "none";
  betbutton.style.display = "inline";
  inputField.style.display = "block";
  return `<br><br>Enter your bet amount to play again `;
};

//..................................................................//

var main = function (input) {
  var message = ``;

  if (currentGameMode === BET) {
    message = placeBet(input);

    if (number === true) {
      currentGameMode = DEALCARDS;
      betbutton.style.display = "none";
      dealbutton.style.display = "inline";
      inputField.style.display = "none";
    }
    chipCount.style.display = "none";
    outputBox.style.display = "block";
    return message;
  }

  if (currentGameMode === DEALCARDS && input == "Deal") {
    message = dealCards();
    message += blackJack();
    if (gotBlackJack === false) {
      dealbutton.style.display = "none";
      hitbutton.style.display = "inline";
      standbutton.style.display = "inline";
      currentGameMode = PLAYERTURN;
    } else if (gotBlackJack === true) {
      dealbutton.style.display = "inline";
      hitbutton.style.display = "none";
      standbutton.style.display = "none";
      message += nextGame();
    }
    message += chipsNumber();
    return message;
  }

  //Player turn//
  if (currentGameMode === PLAYERTURN && input == "Hit") {
    playerCards.push(shuffledDeck.pop());
    message = handMessage();
    var playerScore = playerTotalValue();
    if (playerScore > 21) {
      hitbutton.style.display = "none";
      message += `Your count is over 21! You busted but maybe the dealer will bust too 😉<br><br><b>Stand</b> to end your turn.`;
    } else
      message += `<b>Hit</b> to draw a card or <b>Stand</b> to end your turn.`;
    message += chipsNumber();
    return message;
  }

  //End turn//
  if (currentGameMode === PLAYERTURN && input == "Stand") {
    message = `You stand. It's the dealer's turn next. Good luck! 😉`;
    currentGameMode = COMTURN;
    hitbutton.style.display = "none";
    standbutton.style.display = "none";
    resultbutton.style.display = "inline";
    message += chipsNumber();
    return message;
  }

  //Dealer turn//
  if (currentGameMode === COMTURN && input == "Result") {
    message = comLogic();
    resultbutton.style.display = "none";
    dealbutton.style.display = "none";
    message += chipsNumber();
    return message;
  }
};
