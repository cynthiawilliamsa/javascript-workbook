function rockPaperScissors(hand1, hand2) {
    // Write code here 
    const cleanHand1 = hand1.toLowerCase().trim(); //re-assign the input value to a variable if scrubbing. 
    const cleanHand2 = hand2.toLowerCase().trim();  
    if(cleanHand1 === 'rock' || cleanHand1 === 'paper' || cleanHand1 === 'scissors' && cleanHand2 === 'rock' || cleanHand2 === 'paper' || cleanHand2 === 'scissors'){
      if (cleanHand1 === cleanHand2) {
        return "It's a Tie!";
      } else if (cleanHand1 === 'paper' && cleanHand2 === 'rock' || 
                cleanHand1 === 'rock' && cleanHand2 === 'scissors' || 
                cleanHand1 === 'scissors' && cleanHand2 === 'paper') 
                {
        return "Hand 1 Wins!";
      } else if (cleanHand2 === 'paper' && cleanHand1 === 'rock' || 
                cleanHand2 === 'scissors' && cleanHand1 === 'paper' || 
                cleanHand2 === 'rock' && cleanHand1 === 'scissors')
                {
        return 'Hand 2 Wins!';
        } 
    }  else {
      return "please enter rock, paper or scissors";
    } 
  }

  //test for all possible Hand 1 wins
  //test for all possible hand 2 wins
  //test for valid input
  
  