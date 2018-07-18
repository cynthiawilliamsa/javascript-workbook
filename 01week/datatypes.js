// 1. program shows current date and time
console.log(Date());

// 2. program converts number to string
const num = 15;
const n = num.toString();
console.log(n); 
console.log(typeof n); //test

//3. program converts string to number
const text = '57';
const a = parseInt(text, 10);
console.log(a); 
console.log(typeof a); //test 

//4. program that tells type of datatype
const input = '5';
console.log(typeof input);

//5. program adds 2 numbers using ES6 function and ternary
const addNum = (num1, num2) => num1 + num2;
console.log(addNum(5, 9));

//6. program shows 2 things are true using ES6 function and ternary
const bothTrue = (input1, input2) => (input1 === 5) && (input2 < 10) ? true : false;
console.log(bothTrue(5, 8));

//7. program shows 1 of 2 is true using ES6 function and ternary
const oneTrue = (input1, input2) => (input1 ==='dog') || (input2 === 'cat') ?  true : false; 
console.log(oneTrue('horse', 'cat'));

//8. program shows both not true using ES6 function and ternary
const bothFalse = (input1, input2) => (typeof input1 === 'boolean') && (typeof input2 === 'string') ? true : false;  
console.log(bothFalse(5, 5));
  

