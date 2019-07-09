//1. function that shows current date and time using Date() method
const currentDateTime = () => {
    return Date();
  }
  //test
  console.log(currentDateTime());
  
  // 2. function converts number to string  
  const numberToString = (num1) => {
    const newStr = num1.toString();  
    return newStr;
  }
  //test
  console.log(numberToString(500));
  
  // 3. function converts string to number
  const stringToNum = (num1) => {
    const newNum = parseInt(num1, 10);
    return newNum;
  }
  //test
  console.log(stringToNum("500"));
  
  //4. function that tells type of datatype
  const inputDatatype = (input) => {
    return typeof input;
  }
  //tests
  console.log(inputDatatype('rollerskate')); // returns string
  console.log(inputDatatype()); // returns undefined
  console.log(inputDatatype(5020)); // returns number
  
  // //5. function adds 2 numbers using ES6 function and ternary
  const addNum = (num1, num2) => num1 + num2;
  //test
  console.log(addNum(5, 9)); //returns 14
  
  //6. function shows 2 things are true using ES6 function and ternary
  const bothTrue = (input1, input2) => input1 && input2 ? true: false;
  //tests
  console.log(bothTrue(5, 0)); //one evaluates to true so return is false
  console.log(bothTrue('hi', 100)); //both evaluate to true so return is true
  
  //7. program shows 1 of 2 is true using ES6 function and ternary
  const oneTrue = (input1, input2) => input1 && !input2 || !input1 && input2 ?  true : false;
  //tests
  console.log(oneTrue('horse', 'cat')); //both inputs evaluate true so return is false
  console.log(oneTrue(0, 100)); //one input evaluates to true so return is false
  
  //8. program shows both not true using ES6 function and ternary
  const bothFalse = (input1, input2) => !input1 && !input2 ? true : false;
  //tests  
  console.log(bothFalse("true", true)); //one input evaluates true so return is true
  console.log(bothFalse(0, 0));//both inputs evaluate to false so return is true
    
  