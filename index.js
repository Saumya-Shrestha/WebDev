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
There are three different types of quotation marks:
1. Double Quotation ("")
2. Single Quotation ('')
3. Backtick Quotation (``);

There is no difference between 1 and 2. But with backtick quotation we can write javascript quote inside using ${} symbol.
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
let aname = "Bones";
console.log(aname);
console.log(aname);
console.log(aname);

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

/* ================ Comparison Operators ====================
1. is greater than (>)
2. is less than (<)
3. is equal to (==)
4. is strictly equal to (===)
5. is greater than or equal to (>=)
6. is less than or equal to (<=)
*/
const anum = 10;
if (anum > 0) {
  console.log("Positive");
} 
else if (anum < 0) {
  console.log("Negative");
} 
else if (anum === 0) {
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
2. OR Operator (||) returns true if one of the conditions is true
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
function evenOrOdd() {
  let num = prompt("Enter a number: ");
  return num % 2 == 0 ? "Even" : "Odd";
}
console.log(`Your number is ${evenOrOdd()}`);


/** 
Write a function "addUpto" which takes a number as an argument and add each number upoto the given input number.
Example. addUpto(5) = 1 + 2 + 3 + 4 + 5 = 15
*/
function addUpto(num) {
  let newNum = 0;
  for (let i = 1; i <= num; i++) {
    newNum += i;
  }
  return newNum;
}
let num = prompt("Enter a number: ");
console.log(`Sum is ${addUpto(num)}`);

/** 
Write a function "vowelCounter" that takes a string as arguments and returns the total number of vowels in that string as output.
Example: vowelCounter("abcde") = 2
*/
function vowelCounter(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (vowels.includes(letter))
      count++;
  }
  return count;
}
let astr = prompt("Enter a string: ");
console.log(`vowelCounter(${str}) = ${vowelCounter(str)}`);

/** 
write a function "getMiddle" that takes a string as argument. Your job is to return the middle character of the given string. If the string's length is odd, return the middle character and if it is even, return the middle two characters.
*/
function getMiddle(str) {
  str = str.toString();
  let midIndex = Math.floor(str.length / 2);
  if (str.length % 2 == 0)
    return str[midIndex - 1] + str[midIndex];
  else
    return str[midIndex];
}
let astr1 = prompt("Enter a string: ");
console.log(`Middle character is: ${getMiddle(astr1)}`);

/** 
Write a function "XO" that checks if a string has same amount of 'x' and 'o'. 
Output must be boolean. 
Example: XO("ooxx") = true
XO(xxoxx) = false
*/
function XO(str) {
  let flag1 = "x";
  let flag2 = "o";
  let countx = 0;
  let counto = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (flag1.includes(letter))
      countx++;
    if (flag2.includes(letter))
      counto++;
  }
  return countx == counto ? true : false;
}
let astr2 = prompt("Enter a string: ");
console.log(`${XO(astr2)}`);

/** 
Implement the facebook like system.
Write a function "likes" that takes an array as input containing the names of the people who likes an item. It must return the display text as follows:

1. likes([]) = "No one likes this";
2. likes(["Peter"]) = "Peter likes this"
3. likes(["Peter", "Jacob"]) = "Peter and Jacob like this"
4. likes(["Max", "John", "Mark"]) = "Max, John and Mark like this";
5. likes(["Alex", "Jacob", "Mark", "Max"]) = "Alex, Jacob and 2 others like this"
*/
function likes(names) {
  let size = names.length;
  if (size == 0)
    return "No one likes this";
  else if (size == 1)
    return names[0] + " likes this";
  else if (size == 2)
    return names[0] + " and " + names[1] + "like this";
  else if (size == 3)
    return `${names[0]}, ${names[1]}, ${names[2]} likes this`;
  else
    return `${names[0]}, ${names[1]}, and ${count - 2} others liked this`;
}

let count = prompt("Enter the number of users who liked the the post: ");
let names = [];
for (let i = 0; i < count; i++) {
  names.push(prompt("Enter the name: "));
}
console.log(likes(names));

/** 
Write a JavaScript program to find the largest of three given integers
*/
function largest(first, second, third) {
  if (first > second && first > third)
    return first;
  else if (second > first && second > third)
    return second;
  else
    return third;
}
let afirst = prompt("Enter a number: ");
let second = prompt("Enter a number: ");
let third = prompt("Enter a number: ");
console.log(`Largest number is ${largest(afirst, second, third)}`);


/** 
Write a function that takes an integer minutes and converts it to seconds.
Examples
convert(5) ➞ 300
convert(3) ➞ 180
convert(2) ➞ 120
*/
function convert(min) {
  return min * 60;
}
let min = prompt("Enter the time in minutes: ");
console.log(`Time in seconds: ${convert(min)}`);

/** 
Write a function that takes the base and height of a triangle and return its area.
triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50
The area of a triangle is: (base * height) / 2
*/
function area(base, height) {
  return (base * height) / 2;
}
let base = prompt("Enter the base: ");
let height = prompt("Enter the height: ");
console.log(`Area of triangle: ${area(base, height)}`);

/** 
Create a function that takes the age in years and returns the age in days.
Examples
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
*/
function age(years) {
  return years * 365;
}
let years = prompt("Enter your age: ");
console.log(`Age in days: ${age(years)}`);

/** 
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples:
points(1, 1) ➞ 5
points(7, 5) ➞ 29
points(38, 8) ➞ 100
*/
function points(two, three) {
  return two * 2 + three * 3;
}
let two = prompt("Enter the no. of 2-pointers: ");
let three = prompt("Enter the no. of 3-pointers: ");s
console.log(`Total score: ${points(two, three)}`);

/** 
Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

    wins get 3 points
    draws get 1 point
    losses get 0 points

  Examples

footballPoints(3, 4, 2) ➞ 13
footballPoints(5, 0, 2) ➞ 15
footballPoints(0, 0, 1) ➞ 0
*/
function footballPoints(win, draw, lose) {
  return win * 3 + draw * 1;
}
let win = prompt("Enter the no. of wins: ");
let draw = prompt("Enter the no. of draws: ");
let lose = prompt("Enter the no. of loses: ");
console.log(`Total score: ${footballPoints(win, draw, lose)}`);

/** 
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)

... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
*/
function profitableGamble(prob, prize, pay) {
  return (prob * prize > pay ? true : false)
}
let prob = prompt("Enter the probability: ");
let prize = prompt("Enter the prize: ");
let pay = prompt("Enter the pay: ");
console.log(`${profitableGamble(prob, prize, pay)}`);

/** 
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.
Examples

calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100

Notes
    Distance will be a number greater than zero.
    Return 100 if the calculated fuel turns out to be less than 100.
*/


/** 
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
Examples

comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false

*/
function comp(str1, str2) {
  return str1.length == str2.length ? true : false;
}
let str1 = prompt("Enter the first string: ");
let str2 = prompt("Enter the second string: ");
console.log(`${comp(str1, str2)}`);


/** 
Given two strings, firstName and lastName, return a single string in the format "last, first".
Examples

concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary"
*/
function concatName(first, last) {
  return last + ", " + first;
}
let first = prompt("Enter the first name: ");
let last = prompt("Enter the last name: ");
console.log(`"${concatName(first, last)}"`);

/** 
Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

    The person is at least 15 years old.
    They have parental supervision.

The function accepts two parameters, age and isSupervised. Return a boolean.
Examples

acceptIntoMovie(14, true) ➞ true

acceptIntoMovie(14, false) ➞ false

acceptIntoMovie(16, false) ➞ true

*/
function acceptIntoMovie(age, isSupervised) {
  return age >= 15 || isSupervised == "true" ? true : false;
}
let age = prompt("Enter the age: ");
let isSupervised = prompt("Is the kid supervised? ");
console.log(`${acceptIntoMovie(age, isSupervised)}`);


/** 
Write a program to reverse a sentence.
Example: "Hello World" = "World Hello"
*/
function reverse(str) {
  let newStr = str.split(" ");
  return newStr.reverse().join(" ");
}
let str = prompt("Enter a sentence: ")
console.log(`${reverse(str)}`);