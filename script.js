'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1. Generate a random dice roll
  const number = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  const imgPath = `dice-${number}.png`;
  diceEl.src = imgPath;

  if (number != 1) {
    currentScore += number;
    current0El.textContent = currentScore;
  } else {
    currentScore = 0;
  }
});