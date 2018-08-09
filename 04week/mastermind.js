'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}
//not sure what this is doing in the game?
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
  const guessArr = guess.split('');
  let correctLetter = 0;
  let correctSpot = 0;
  guessArr.forEach((letter)=>{
    console.log(letter, solution.indexOf(letter), 'check')
  })
}
//determine if what user enters is acceptable
const acceptableGuess = (guess) =>{
  //check for 4 char entry
  if(guess.length === 4) {
    let allLettersAreLegal = true;
    const guessArr = guess.split('');
    guessArr.forEach((letter)=>{
      if(letters.indexOf(letter) === -1) {
        allLettersAreLegal = false
      }      
    })
    return allLettersAreLegal
  }
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(acceptableGuess(guess)) {
    if(guess === solution) {
      board = [];
      return "You guessed it!"
    }else {
      //return my hint function
      generateHint(guess);
      board.push(guess);
      if(board.length > 9) {
        return "You Lose"
        board = [];
      }
    }
  } else {
      return 'Please enter valid guess'
  }  
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
