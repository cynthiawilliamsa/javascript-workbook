//code plan
//check for valid entry and ensure not undefined...also check that the move is valid at this time.(isLegal() parent towersOfHanoi())
//remove last index from startStack and append to end of endStack (movePiece() parent towersOfHanoi())
//check length of potential winning stacks for a win (checkforWin() parent towersOfHanoi())
//reset board by setting startStacks object to stacks after winner is determined (reset() parent towersofHanoi())
//add new testcase for reset function and test case that ensures "move is valid" shows if illegal move is attempted


"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startingStacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let stacks = startingStacks;

const printStacks= ()=>{
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
//Checks user entries for no entry and that move would be valid
const isLegal = (startStack, endStack) => {
  const startInput = stacks[startStack]; //array return stored in local var
  const endInput = stacks[endStack]; //array return stored in local var
  const start = startInput[startInput.length - 1]; //access value at index stored in local var
  const end = endInput[endInput.length - 1]; //access value at index stored in local var
  if (startInput && endInput) {
    if (end === undefined || start < end) {
      return true;
    } else {
      return false;
    }
  }
};
//moves piece by using pop method on startStack and places with push method on endStack
const movePiece = (startStack, endStack) => {
  const startInput = stacks[startStack]; //array return stored in local var
  const endInput = stacks[endStack]; //array return stored in local var
  const value = startInput.pop(); //store popped index of startInput into local var
  endInput.push(value); //append value to end of endstack input array
};
//evaluates stacks b and c length for win
const checkForWin = () => { 
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
};
//resets board state to start state after win
const reset = () => {
  stacks = startingStacks;
};
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    if (checkForWin(stacks)) {
      reset();
      return "You Win!";
    }
  } else {
    return "Move is invalid";
  }
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}
// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
  describe("#towersOfHanoi()", () => {
    it("should not to move a block if illegal", () => {  
      const expected =    {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      stacks = expected;
      const expectedreturn="Move is invalid"
      const returnstring = towersOfHanoi("a", "b");
      assert.equal(expectedreturn,returnstring)
      assert.deepEqual(expected, stacks);
    });
  });
  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe("#reset()", () => {
    it("should reset the board", () => {
      reset();
      assert.equal(startingStacks, stacks);
    });
  });  
} else {
  getPrompt();
}
