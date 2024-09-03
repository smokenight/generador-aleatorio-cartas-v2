let array_suits = ['hearts', 'clubs', 'diamonds', 'spades'];
let array_cards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];

window.onload = () => {
  generateRandomCard();
}

generateRandomCard = () => {
  let random_suit = array_suits[Math.floor(Math.random() * array_suits.length)];
  let random_card = array_cards[Math.floor(Math.random() * array_cards.length)];
  let card = document.querySelector('.card');
  card.classList = '';
  card.classList.add('card', random_suit, random_card);
}