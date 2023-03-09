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
} else if (isGoingToRain) {
  console.log("Carry an umbrella");
} else {
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
} else if (num < 0) {
  console.log("Negative");
} else if (num === 0) {
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
  }
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
  printer(prompt('Name: '));
}

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

/** Problem 2 
Write a function named "reverseMachine" that takes some string as input and return the reverse of that string.
Like: input = "dog" output = "god"
*/