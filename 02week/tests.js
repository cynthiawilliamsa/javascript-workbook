function rockPaperScissors(hand1, hand2) { 
    const cleanHand1 = hand1.toLowerCase().trim(); //re-assign the input value to a variable if scrubbing. 
    const cleanHand2 = hand2.toLowerCase().trim();  
    if(!Number(cleanHand1) && !Number(cleanHand2) || cleanHand1 === 'rock' || cleanHand1 === 'paper' || cleanHand1 === 'scissors' && cleanHand2 === 'rock' || cleanHand2 === 'paper' || cleanHand2 === 'scissors'){
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
  //test for all possible Hand 1 wins
  //test for all possible hand 2 wins
  //test for valid input
  if (typeof describe === 'function') {
    describe('#rockPaperScissors()', () => {     
      it('should detect which hand one win', () => {
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      });
    });
  }