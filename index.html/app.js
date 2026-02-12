console.log("Hello from JavaScript!");
//var, let, const

var name1 = 'John Smith'

name1 = 'Jane Smith' // Reassigning the value

var name1 = 'Joe Smith' // Redeclaring the value

// Hoisting

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]);

fruits[1] = "blueberry";

fruits.push("orange");

fruits.pop();

fruits.unshift("grape");

fruits.shift();

let numbers = [3,6,9,12];

console.log(numbers[0] + numbers[3]);

console.log(numbers.length);

numbers.push(15,18);

numbers[1] = "null"

let colors = ["red", "blue", "green"];

colors[2] = "black";

let favourites = ["pasta", "tacos", "salmon"];

favourites.push("burger");

console.log("I like " + favourites[1], "and", favourites[3]);

// looping  from 1-10 then print //

for(let i = 1; i <=10; i++){
    console.log(i);
}

// print only even 1-20 //

for(let i = 1; i <=20; i++) {
    if(i % 2 === 0)
    console.log(i);
}

// print backwards from 10- 1

for(let i = 10; i >=1; i--){
    console.log(i)
}

// add 1-5 then print total //

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i
}
console.log(sum);

// print square of each num 1-5 //

for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}
// loop and print each animal //

let animals = ["cat", "dog", "rabbit", "parrot"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// Greeting genrator //

let names = ["Ali", "Sara", "John"];
for (let i = 0; i < names.length; i++) {
  console.log("Hello, " + names[i] + "!");
}
// Value Mulitplier //

let original = [1, 2, 3, 4];
let doubled = [];
for (let i = 0; i < original.length; i++) {
  doubled.push(original[i] * 2);
}
console.log(doubled); // [2, 4, 6, 8]

// Divisibility Drill 1st print 1-20 only divisible by 3 then count how many are odd. Print //

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
let count = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    count++;
  }
}
console.log("Odd numbers count:", count);

// Break and continue print 1-10 skip 5 then print 1-10 but stop if number is 7 //

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

// write a program that checks if a number is positive, negative, or zero//

let agez = 43;

if (agez > 0) {
    console.log("positive");
} else if (agez < 0) {
    console.log("negative");
} else{
    console.log("zero");
}

// check if some can vote. must be over 18//

let agezz = 19;

if(agezz>=18) {
    console.log("You can vote!")
} else{
    console.log("Your not old enough to vote")
}

// given a variable score, print "A" if 90 and above "B" if 75-89 "C" if 50-74 "F" if below 50//

let score = 93

if (score >= 90) {
    console.log("A");
} else if (score > 75){
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("F")
}

// people can only enter if they have ID and are an adult...use logical operators //

let isAdult = true;
let hasID = true;

if (isAdult && hasID) {
    console.log("Let em in");
}

// write an if nested statement that prints "perfect square" if both a whole number and its square root is an integer//

let nam = 12;

if (nam )





// write a program that accepts a day of the week "monday" etc and prints "weekend" or "weekday" //





// create a function that takes a number and returns double its value.//

function double(a) {
    let result = a * 2;
      return result; 
}

let sumResult = double(45);
console.log(sumResult);

function fullName() {
    let first = "Chris ";
    let second = "Godwiin";
    let all = first + second;
      return all;
}

let wholeName = fullName("Chris ", "Godwin");
console.log(wholeName);


function isEven(num) {
   return num % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(7));