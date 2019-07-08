//CODE PLAN//
//Check for valid input "Rock, Paper, Scissor and also to make sure input is not undefined using toLowerCase and trim methods for extra spaces and case differences
//Check for Tie using if/else conditional
//Check for Hand 1" win using if/else conditional
//Remainder is Hand 2 win using if/else conditional
//if input is not present, or does not match rock paper or scissors prompt user to enter one of those three

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here 
  const cleanHand1 = hand1.toLowerCase().trim(); //re-assign the input value to a variable if scrubbing. 
  const cleanHand2 = hand2.toLowerCase().trim();  
  if(cleanHand1 === 'rock' || cleanHand1 === 'paper' || cleanHand1 === 'scissors' && cleanHand2 === 'rock' || cleanHand2 === 'paper' || cleanHand2 === 'scissors'){
    if (cleanHand1 === cleanHand2) {
      return "It's a tie!";
    } else if (cleanHand1 === 'paper' && cleanHand2 === 'rock' || 
              cleanHand1 === 'rock' && cleanHand2 === 'scissors' || 
              cleanHand1 === 'scissors' && cleanHand2 === 'paper') 
              {
      return "Hand one wins!";
    } else if (cleanHand2 === 'paper' && cleanHand1 === 'rock' || 
              cleanHand2 === 'scissors' && cleanHand1 === 'paper' || 
              cleanHand2 === 'rock' && cleanHand1 === 'scissors')
              {
      return 'Hand two wins!';
      } 
  }  else {
    return "please enter rock, paper or scissors";
  } 
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) ); 
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
