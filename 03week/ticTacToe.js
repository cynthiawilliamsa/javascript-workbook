"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";
let gameover = false;

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

//Check for horizontal wins
const horizontalWin = () => {
  const hort1 = [
    //0 1
    [0, 0], //0 <-- 2nd arg in foreach
    [0, 1], //1
    [0, 2] //2
  ];
  const hort2 = [[1, 0], [1, 1], [1, 2]];
  const hort3 = [[2, 0], [2, 1], [2, 1]];

  if (checkForWin(hort1, playerTurn, board) == true) {
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


//Check for vertical wins
const verticalWin = () => {
  // Your code here
  const vert1 = [
    //0 1
    [0, 0], //0 <-- 2nd arg in foreach
    [1, 0], //1
    [2, 0] //2
  ];
  const vert2 = [[0, 1], [1, 1], [2, 1]];
  const vert3 = [[0, 2], [1, 2], [2, 2]];

  if (checkForWin(vert1, playerTurn, board) == true) {
    console.log("win");
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


//Check for diagonal wins
const diagonalWin = () => {
  // Your code here
  const diag1 = [
    //0 1
    [0, 0], //0 <-- 2nd arg in foreach
    [1, 1], //1
    [2, 2] //2
  ];
  const diag2 = [[0, 2], [1, 1], [2, 0]];

  if (
    checkForWin(diag1, playerTurn, board) ||
    checkForWin(diag2, playerTurn, board)
  ) {
    return true;
  }

  return false;
};

//Checking the board state based on an array of conditions passed in
const checkForWin = (windcondition, turn, board) => {

  let winner =true;
  windcondition.forEach(conditions => {
    console.log(`${conditions}:${board[conditions[0]][conditions[1]]}:${playerTurn}`)
    // Board   row        col
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
    if (isWinner()) {
      console.log(`Player ${playerTurn} wins!`);
      gameover = true;
      return;
    }

    switchPlayer();
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
