//code plan
//create a class Checker that takes an arg color and uses conditional logi to determine color of the checker
//create createchecker method in the board class that determine locations an dcolors for 24 checker pieces to be placed
//create methods in game class for checking the validity of a move
//create method in game class to move and jump/kill the checkers
//create checkWinner method in game class to end game with last man standing.

"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//class checker takes an arg color and assigns a color piece to symbol based on conditional logic
class Checker {
  constructor(color) {
    if (color === "red") {
      this.symbol = "R";
    } else {
      this.symbol = "B";
    }
  }
}
class Board {
  constructor() {
    this.checkers = [];
    this.grid = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(" ");
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(" ");
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }  
  //checker method holds array positions for each opponents board and loops through to play the checkers on the board
  createCheckers() {
    //starting positions for red checkers
    const redPosition = [
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ];
    //outer loop goes through 12 times
    for (let i = 0; i < 12; i++) {
      let redRow = redPosition[i][0]; //starting position is 0, 0 for row
      let redColumn = redPosition[i][1]; //starting position for col is 0,1 col
      let redChecker = new Checker("red"); //determines what letter goes in space
      //console.log(redRow);
      this.checkers.push(redChecker);
      //console.log(this.grid[whiteRow][whiteColumn]);
      this.grid[redRow][redColumn] = redChecker;
    }
    const blackPosition = [
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6]
    ];
    for (let i = 0; i < 12; i++) {
      let blackRow = blackPosition[i][0]; //iterates through rows
      let blackColumn = blackPosition[i][1]; //iterates through columns
      let blackChecker = new Checker("black"); //determines what letter goes in space
      //console.log(blackRow);
      this.checkers.push(blackChecker);
      //consoloe.log(this.grid[blackRow][blackColumn]);
      this.grid[blackRow][blackColumn] = blackChecker;
    }
  }
}
//refactor to move to game class as a method
const isLegal = (start, end, grid) => {
  let startGood = start[0] >= 0 && start[0] < 8 && (start[1] >= 0 && start[1] < 8);
  let endGood = end[0] >= 0 && end[0] < 8 && (end[1] >= 0 && end[1] < 8);
  let nullSpace = grid[end[0]][end[1]] === null;

  return startGood && endGood && nullSpace;
};
//refactor to move to game class as a method
const isLegalMove = (start, end) => {
  const startRow = parseInt(start.charAt(0));
  const startColumn = parseInt(start.charAt(1));
  const endRow = parseInt(end.charAt(0));
  const endColumn = parseInt(end.charAt(1));
  let validRowMove = math.abs(endRow - startRow) <= 2;
  let validColumnMove = math.abs(endColumn - startcolumn) === 1;
  return validRowMove && goodColumnMove;
};

class Game {
  constructor(board) {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
    // this.board.moveChecker();
  }
  moveChecker(start, end) {
    //setting variables to hold parsed input data
    const startArray = [parseInt(start.charAt(0)), parseInt(start.charAt(1))];
    const endArray = [parseInt(end.charAt(0)), parseInt(end.charAt(1))];
    if (isLegal(startArray, endArray,this.board.grid)) {      
      //moving piece
      this.board.grid[endArray[0]][endArray[1]] = this.board.grid[startArray[0]][startArray[1]];
      this.board.grid[startArray[0]][startArray[1]] = null;
      //create new var for jumped row and jumped col
      if (Math.abs(endArray[0] - startArray[0]) === 2) {
        let jumpedRow = endArray[0] - startArray[0] > 0 ? startArray[0] + 1 : endArray[0] + 1;
        let jumpedColumn =
          endArray[1] - startArray[1] > 0 ? startArray[1] + 1 : endArray[1];
        this.board.grid[jumpedRow][jumpedColumn] = null;
        this.board.checkers.pop();
      }
    } else {
      console.log("Illegal Move!");
    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question("which piece?: ", whichPiece => {
    rl.question("to where?: ", toWhere => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests

if (typeof describe === "function") {
  describe("Game", () => {
    //tests board  to make sure configuration is 8X8 and there are 24 checkers (12 for each opponent)
    it("should have a board", () => {
      assert.equal(game.board.constructor.name, "Board"); //pass
    });
    it("board should have 24 checkers", () => {
      assert.equal(
        game.board.checkers.length,
        24,
        "length of array should be 24"
      ); 
    });
  });
  //create a moveChecker function that moves the checker to a new grid location
  describe("Game.moveChecker()", () => {
    it("should move a checker", () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker("50", "41",game.board.grid); //pass
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30'); //pass
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43'); //pass
      assert(game.board.grid[4][3]);
    });
    //moveChecker function should allow move to 'jump' checker diagonally in either direction once, double jump each direction or alternating diagonal directions
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
