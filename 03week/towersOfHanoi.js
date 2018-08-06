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

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

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
const movePiece = (startStack, endStack) => {
  const startInput = stacks[startStack]; //array return stored in local var
  const endInput = stacks[endStack]; //array return stored in local var
  const value = startInput.pop(); //store popped index of startInput into local var
  endInput.push(value); //append value to end of endstack input array
};

const checkForWin = () => { 
  if (stacks.b.length === 4 || stacks.c.length === 4) { //check length of both possible winning arrays
    return true;
  } else {
    return false;
  }
};
const reset = () => {
  stacks = startingStacks;  //resets state of game to starting state
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

function getPrompt() {
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
} else {
  getPrompt();
}
