//code plan
//convert functions to ES6
//check if the placement is valid, then place it (tictactoe())
//check for wins (checkForWin(), verticalWin(), horizontalWin(), diagonalWin(), isWinner())
  //Each directional win function checks possible winner arrays against by looping through current board state(checkForWins()).  IsWinner() is used in the main game function to check for truthy return of direction check functions.
//switchplayer each time main function is called (switchPlayer())

"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [" ", " ", " "], 
  [" ", " ", " "], 
  [" ", " ", " "]
];

let playerTurn = "X";
let gameover = false;
let turn = 1;

const printBoard= () => {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

//Check for horizontal wins using arrays containing possible winning combos and checking against board state (checkForWin())
const horizontalWin = () => {
  const hort1 = [
    [0, 0],
    [0, 1], 
    [0, 2]
  ];
  const hort2 = [
    [1, 0], 
    [1, 1], 
    [1, 2]
  ];
  const hort3 = [
    [2, 0], 
    [2, 1], 
    [2, 1]
  ];
  
  if (checkForWin(hort1, playerTurn, board) === true) {
    return true;
  }
  if (checkForWin(hort2, playerTurn, board)) {
    return true;
  }
  if (checkForWin(hort3, playerTurn, board)) {
    return true;
  }
    return false;
};

//Check for vertical wins using arrays containing possible winning combos and checking against board state (checkForWin())
const verticalWin = () => { 
  const vert1 = [
    //0 1
    [0, 0], //0 <-- 2nd arg in foreach
    [1, 0], //1
    [2, 0] //2
  ];
  const vert2 = [
    [0, 1], 
    [1, 1], 
    [2, 1]
  ];
  const vert3 = [
    [0, 2], 
    [1, 2], 
    [2, 2]
  ];

  if (checkForWin(vert1, playerTurn, board) == true) {
    // console.log("win");
    return true;
  }
  if (checkForWin(vert2, playerTurn, board)) {
    return true;
  }
  if (checkForWin(vert3, playerTurn, board)) {
    return true;
  }
    return false;
};
//Check for diagonal wins by using arrays containing all possible win combos and checking against board state (checkForWin())
const diagonalWin = () => { 
  const diag1 = [
    //0 1
    [0, 0], //0 <-- 2nd arg in foreach
    [1, 1], //1
    [2, 2] //2
  ];
  const diag2 = [
    [0, 2], 
    [1, 1], 
    [2, 0]
  ];
  if (
    checkForWin(diag1, playerTurn, board) ||
    checkForWin(diag2, playerTurn, board)
  ) {
    return true;
  }
    return false;
};

//Checking the board state based on an array of conditions passed in
const checkForWin = (wincondition, turn, board) => {
  let winner =true;
  wincondition.forEach(conditions => {
    // Board      row                col
    if (board[conditions[0]][conditions[1]] !== playerTurn) {
      winner = false;
    }
  });
    return winner;
};

const switchPlayer = () => {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
};

//Check all winning combinations and return true if any of them return true
const isWinner = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true
  }
    return false
};

const ticTacToe = (row, column) => {
  //check if the placement is valid, then place it
  //and check for wins.
  if (!board[row][column] || board[row][column] === " " ) {
    board[row][column] = playerTurn;
    turn++;    
    if (isWinner()) {
      console.log(`Player ${playerTurn} wins!`);
      gameover = true;
      return; // Exit early on win, no need to switch player
    } 
    if( turn > 9){
      gameover =true
      console.log('No more moves. No winner :(');
      return; // Exit early on no more moves, no need to swithc player
    }
    switchPlayer();
  } else{
    console.log("Invalid move, try again")
  }
}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column);
      if (!gameover) {
        getPrompt();
      }
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should check for vertical wins", () => {
      board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWin(), true,"It should be a winner");
      board = [[" ", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWin(),false,"It should not hve been a win")

    });
    it("should detect a win", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(isWinner(), true);
    });
  });
} else {
  getPrompt();
}
