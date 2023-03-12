/** Printing Hello World in Javascript console */
console.log("Hello World");
console.log('6+9');
console.log(`Hello ${4 / 2}`);

/* ================== Data Types ========================
There are eight basic data types in javascript.
1. String
2. Number
3. Boolean
4. Object
5. Null
6. Undefined
7. Symbol
8. BigInt
*/

/* ============ String ======================
Anything inside the quotation marks is a string.
There are three diffrent types of quotation marks:
1. Double Quotation ("")
2. Single Quotation ('')
3. Backtick Quotation (``);

There is no diffrence between 1 and 2. But with backtick quotation we can write javascript quote inside using ${} symbol.
*/


/* ================== Numbers ======================
There is no separate integer or floating point number in javascript.      Every mathematical number is of Number data type in js.
*/
console.log(13);

/* ============== Boolean =========================
Takes one of the two values: true or false
*/
console.log(true);

/* ============== How to check data type ===========
typeof operator is used to check the data type of a data
*/
console.log(typeof 2.2);

/* =============== Variable =================
*/
let name = "Bones";
console.log(name);
console.log(name);
console.log(name);

/* ============== Constant ===================
*/
const pi = 3.14159;
const birth_year = '2060';

/* =============== If Statement =====================
*/
let isRaining = true;
let isGoingToRain = true;
if (isRaining) {
  console.log("Carry an umbrella");
} 
else if (isGoingToRain) {
  console.log("Carry an umbrella");
} 
else {
  console.log("Don't take an umbrealla");
}

/* ================ Comparision Operators ====================
1. is greater than (>)
2. is less than (<)
3. is equal to (==)
4. is strictly equal to (===)
5. is greater than or equal to (>=)
6. is less than or equal to (<=)
*/
const num = 10;
if (num > 0) {
  console.log("Positive");
} 
else if (num < 0) {
  console.log("Negative");
} 
lse if (num === 0) {
  console.log("Zero");
}

/* Create a grade calculator that prints "Distinction" if grade is greater than or equal to 80, "First Division" if grade is greater than or equal to 60 and less than 80, "Second Division" if grade is greater than 50 and less than 60, otherwise "Fail" 
*/
let score = prompt('What score did you get?');
if (score >= 80) {
  console.log("Distinction");
}
else if (score >= 60 && score < 80) {
  console.log("First Division");
}
else if (score >= 50 && score < 60) {
  Console.log("Second Division");
}
else {
  console.log("Fail");
}

/* ================= Logical Operators ====================== 
1. AND Operator (&&) returns true if all conditions are true
2. OR Operaor (||) returns true if one of the conditions is true
3. NOT Operator (!) returns opposite of the given value
*/

/* ============== For Loops ==============================
Used when same task is being done multiple times.  Like printing a name 100 times.
for (starting_statement; stopping_condition; action) {
  // some task
}
*/
let start = 0;
let end = 10;
for (start; start < end; start++) {
  console.log(start);
}

/* ========================= While Loops ====================== 
Same use cases as for loops.
// starting condition
while(stopping_condition) {
  // some task
  // action

*/
while (start < 20) {
  console.log(start);
  start++;
}

/* ====================== Functions ============================
Functions are like machines that takes some input, process them and produce some output.
function name_of_function(input) {
  return output;
}
*/
function printer(name) {
  console.log(`Your Name is ${name}`);
}
printer(prompt('Name: '));

function add(num1, num2) {
  return num1 + num2;
}

const subtract = (num1, num2) => num1 - num2;
console.log(add(5, 6));

/* ==================== Object =====================================
Object are like collection of diffrent data. Like in real world, everything is an object and every object has some properties. Like car is a object and has properties like color, brandName, Model etc.
Similarly, Object is Javascript is just like real world objects that has some properties and values.
*/
const student = {
  name: "Fruit salad",
  roll: 13,
  greet: function() {
    return "Good Morning";
  }
}
console.log(student.name, student.roll);
console.log(student.greet());

/* ============================= Array ============================
Arrays are also the collection of diffrent data, but unlike objects they don't need properties to store data.
let favorite_animes = ["Death Note", "Steins Gate", "Classroom of Elite"];
*/
const fruit = ("Banana", "Apple", 123, {id: 1});
const top_10_movies = [
  {
    id: 1,
    name: "Aftersun",
    genre: "Drama",
  },
  {  
    id: 2,
    name: "Before Sunrise",
    genre: "Romance",
  }
]
console.log(top_10_movies[0].name);

/**  Problem 1
Write a function named "fullName" that takes input "firstName" and "lastName" and returns the fullName;
*/
function fullName() {
  let firstName = prompt("What is your first name?");
  let lastName = prompt("What is your last name?");
  let fullName = firstName + ' ' + lastName;
  return fullName;
}
console.log(`Your name is ${fullName()}.`);

/** Problem 2 
Write a function named "reverseMachine" that takes some string as input and return the reverse of that string.
Like: input = "dog" output = "god"
*/
function reverseMachine() {
  let string = prompt("Enter a string: ");
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}
console.log(`Reverse: ${reverseMachine()}`);

/** 
=============== Math methods ===============================
1. Math.PI
2. Math.round
3. Math.pow
4. Math.sqrt
5. Math.ceil
6. Math.floor
7. Math.random
*/
const fruits = {
  name: "Stawberry"
}

console.log(Math.PI);
console.log(Math.round(6.9));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(49));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.random());


/** 
=============================== String Methods =======================
1. String Length
2. indexOf
3. uppercase
4. lowercase
5. split
6. slice
7. includes

var abc = "abcdefghijklmnopqrstuvwxyz";
*/
var abc = "abcdefghijklmnopqrstuvwxyz";
console.log("String length: ", abc.length);
console.log("String at: ", abc.indexOf("lmno"));

const name = "Envelope";
console.log(name.indexOf("lope"));

console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

let cities = "Kathmandu,Manchester,Delhi,Barcelona";
let newCities = cities.split(",");
console.log(newCities);

console.log(cities.slice(0, 9));
console.log(cities.includes("Kathmandu"));

/** 
================= Array methods ============================
1. Convert to string = .toString()
2. Join items in array = .join("_")
3. Remove last element = .pop()
4. Length of array = .length
5. reverses the order = .reverse
*/
console.log(newCities.toString());
console.log(newCities.join("-"));
console.log(newCities.length);
console.log(newCities.reverse());

console.log(newCities.pop());
console.log(newCities);

console.log(newCities.push("Kathmandu"));
console.log(newCities);
/** 
================= Date Object ===================================
1. new Date();
2. Get hour from date object
3. Get Minutes
4. get Year
5. 
*/
let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getFullYear());

let time = Date.now();
console.log(new Date(time));
console.log(Date.now());

/** 
Write a function "opposite" which takes a number as input and returns the opposite number;
*/
function opposite() {
  let num = prompt("Enter a number: ");
return -num;
}
console.log(`Your number is ${opposite()}`);


/** 
Write a function "evenOrOdd" that takes an integer as an argument and returns "Even" for even numbers and "Odd" for odd numbers
*/
function evenOrOdd(){
  let num = prompt("Enter a number: ");
  if(num%2==0)
    return "Even";
  else 
    return "odd";
}
console.log(`Your number is ${evenOrOdd()}`);


/** 
Write a function "addUpto" which takes a number as an argument and add each number upoto the given input number.
Example. addUpto(5) = 1 + 2 + 3 + 4 + 5 = 15
*/



/** 
Write a function "vowelCounter" that takes a string as arguments and returns the total number of vowels in that string as output.
Example: vowelCounter("abcde") = 2
*/


/** 
write a function "getMiddle" that takes a string as argument. Your job is to return the middle character of the given string. If the string's length is odd, return the middle character and if it is even, return the middle two characters.
*/


