/use a loop to log each item in the array
const carsInReverse = ['Ford', 'Honda', 'Chevrolet', 'Mazda', 'Toyota', 'Volvo']
carsInReverse.forEach((item)=> {
  console.log(item);
});

//create an object called persons
//use a for in loop to console log each key
//then use for in loop and state to console.log the value associated with the key birthDate
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

for (let i in persons) {
  console.log(persons[i]);
}

for (let i in persons) { 
  console.log(persons.birthDate)
} //printing of all...how do I pick one

//use a while loop to console.log the numbers from 1 to 1000
// let num = 0;
// while (num < 1000) {
//   num++
//   console.log(num);
// }

//use do while loop to console.log the numbers from 1 to 1000
num = 0;
result = '';
do {
  num = num + 1
  result = result + num
} while (num < 1000);
console.log(result);

//when is a for loop better than a while loop?
  //A for loop is usually better when you want a piece of code to run a certain number of times, and a while loop is better when the condition for the code to keep running is more general.
//how is the readability of the code affected?
//what is the difference between a for loop and a for in loop?
  //for loops contain three sets of conditions that are executed before the code runs and iterate over and increments/decrements each loop pass through.  For in loops are simpler syntax and iterate over enumerable properties of objects.
//what is the difference between a while loop and a do while loop?
  //a while loop continues until the while condition is true. Do...while loops through a block of code once, and then repeats the loop while a specified condition is true.
