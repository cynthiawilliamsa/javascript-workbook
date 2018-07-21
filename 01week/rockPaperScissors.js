//CODE PLAN//
//Check for valid input "Rock, Paper, Scissor and also to make sure input is not undefined
//Check for Tie
//Check for Hand 1" win 
//Remainder is Hand 2 win


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here 
  const cleanhand1 = hand1.toLowerCase().trim(); //re-assign the input value to a variable if cleaning. 
  const cleanHand2 = hand2.toLowerCase().trim();
  console.log(cleanhand1);
  console.log(cleanHand2);
  if(cleanhand1 === 'rock' || cleanhand1 === 'paper' || cleanhand1 === 'scissors' && cleanHand2 === 'rock' || cleanHand2 === 'paper' || cleanHand2 === 'scissors'){
    if (cleanhand1 === cleanHand2) {
      return "It's a Tie!";
    } else if (cleanhand1 === 'paper' && cleanHand2 === 'rock' || 
              cleanhand1 === 'rock' && cleanHand2 === 'scissors' || 
              cleanhand1 === 'scissors' && cleanHand2 === 'paper') 
              {
      return "Hand 1 Wins!";
    } else if (cleanHand2 === 'paper' && cleanhand1 === 'rock' || 
              cleanHand2 === 'scissors' && cleanhand1 === 'paper' || 
              cleanHand2 === 'rock' && cleanhand1 === 'scissors')
              {
      return 'Hand 2 Wins!';
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
