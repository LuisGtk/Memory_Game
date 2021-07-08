//selecting all buttons

const cards = document.querySelectorAll('.memory-card');
//"let variables" value can change
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  //adding class to cards when clicked so they are recognized as 'flipped' and when they are not clicked nothing is added to their class name
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  //checking if both cards have the same class name
  let isMatch = firstCard.dataset.titles === secondCard.dataset.titles;
  //makes it so the flipped cards stay flipped and dont "unflip" after the setTimeout
  isMatch ? disableCards() : unflipCards();
}
//makes it so that the already flipped cards dont flip back and cannot be clicked again
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}
//when you flip the second card and it DOES NOT match with the first one then BOTH cards flip back to the previous position
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

//the board itself resets whenevr two cards are flipped yet dont have the same classname (does not match)
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//randomizes the cards so after each try/ refresh it changes the order
//goes through the 12 cards and changes positioning so they are all in different rows
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

//event to animate the flips
cards.forEach(card => card.addEventListener('click', flipCard));