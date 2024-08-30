// JavaScript Code***********************************

let randomNum = Math.floor(Math.random() * 100);
 

let userInput = document.querySelector('input');
let message = document.querySelector('#msg');
let userChoice = document.querySelector('#user-guess');
let submitBtn = document.querySelector('#submit');
let restartBtn = document.querySelector('#restart');

let userGuess = [];
let userValue;
userInput.addEventListener('change', () => {
  userValue = parseInt(userInput.value);
  userGuess.push(userValue);
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  userInput.value = '';
});

function showResult() {
  if (userValue === randomNum) {
    message.innerText = 'You got it! Congrats';
    message.classList.remove('hide');
    userChoice.innerText = `Your Guess are: ${userGuess.join(', ')}`;
    userChoice.classList.remove('hide');
    restartBtn.classList.remove('disable');
    restartBtn.removeAttribute('disabled');

    submitBtn.classList.add('disable');
    submitBtn.setAttribute('disabled', 'true');
  } else if (userValue > randomNum) {
    message.innerText = 'Too High!';
    message.classList.remove('hide');
    userChoice.innerText = `Your Guess are: ${userGuess.join(', ')}`;
    userChoice.classList.remove('hide');
  } else if (userValue < randomNum) {
    message.innerText = 'Too Low!';
    message.classList.remove('hide');
    userChoice.innerText = `Your Guess are: ${userGuess.join(', ')}`;
    userChoice.classList.remove('hide');
  }
}

function resetAll() {

    randomNum = Math.floor(Math.random() * 100);
   
  message.innerText = '';
  userGuess = [];
  message.classList.add('hide');
  userChoice.innerText =  '';
  userChoice.classList.add('hide');
  
  restartBtn.setAttribute('disabled', 'true');   

   
  submitBtn.removeAttribute('disabled');
  userInput.value = '';
}

submitBtn.addEventListener('click', () => {
  showResult();
});

restartBtn.addEventListener('click', () => {
  resetAll();
});
