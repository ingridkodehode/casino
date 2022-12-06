let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let startEl = document.getElementById("start-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("new-card-el");
let playerEl = document.getElementById("player-el");

// let player = {
//   name: "You have",
//   chips: 145,
// };

// playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard + " " + secondCard + " "];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "  ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "New card?";
  } else if (sum === 21) {
    message = "Huge W";
    hasBlackJack = true;
  } else {
    message = "Common L";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
