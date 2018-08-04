//code plan
//moving the piece
  //check to make sure last index of stack moving from is less than last piece of stack piece would be moved to.
  //.pop to remove index and push to place in input array.

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// let stacks = fresh

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
//if isLegal() let boardPiece = startstack.pop()
function movePiece(startStack, endStack) {
  if(isLegal()) {
    let boardPiece = startStack.pop()
    endStack.push(boardPiece);
  }
 

}
//if start stack is < endstack then return true
//false
function isLegal(arg1,arg2) {
  // Your code here

}

//if a is [4,3,2,1] else if b else if c else false
function checkForWin() {
  // Your code here

}

function reset(){
  stacks = fresh
}
function towersOfHanoi(startStack, endStack) {
  // Your code here
  let boardPiece = stacks[startStack].pop()
  stacks[endStack].push(boardPiece);

  //move
  //checkforwin



}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      // printStacks()
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    // it('should allow a legal move', () => {
    //   stacks = {
    //     a: [4, 3, 2, 1],
    //     b: [],
    //     c: []
    //   };
    //   assert.equal(isLegal('a', 'c'), true);
    // });
  });
  describe('#checkForWin()', () => {
    // it('should detect a win', () => {
    //   stacks = { a: [], b: [4, 3, 2, 1], c: [] };
    //   assert.equal(checkForWin(), true);
    //   stacks = { a: [1], b: [4, 3, 2], c: [] };
    //   assert.equal(checkForWin(), false);
    // });
  });
  describe('#reset',()=>{
    it('should reset the stacks to the original values',()=>{
      stacks = {
        a: [4, 2],
        b: [1],
        c: [3]
      };
      reset()
      assert.equal(stacks,fresh)

    })

  })

} else {

  getPrompt();
  

}
