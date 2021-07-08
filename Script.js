//selecting all buttons
const cards = document.querySelectorAll('.memory-card');

//"let variables" value can change
let turnedCard = false;
let lockInput = false;
let firstCard, secondCard;


function cardFlip(e){
  //adding class to cards when pressed so they are recognized as 'flipped'
 // this.classlist.add('flip')
 // accessing the class of card
 e.currentTarget.className += " flip"
//  if(!turnedCard){
//    turnedCard= true;
//    firstCard = this;
//    console.log({ turnedCard ,firstCard})
//  }
}









cards.forEach(card=>card.addEventListener('click', (e) => {cardFlip(e)}))