// console.log("Javascript");

// Alert dialog box
// window.alert("Hello");

// Confirm dialog box
// let answer = window.confirm("Are you sure you want to exit?");
// console.log(answer);

// Prompt dialog box
// let answer = window.prompt("What is your name?");
//     if(answer == "Shreyash Sexit")
//         window.alert("You are correct.");
// console.log(answer);

// Document
// console.log(window.document.body);
// console.log(window.document.body.style.backgroundColor = "red");
// document.body.style.textAlign = "center";
// document.body.innerHTML = "<h1> CSS </h1>"

// Selector
// let movies = document.getElementsByClassName("moviesList");
// console.log(movies);

// Query Selector
let movies = document.querySelector(".moviesList");
// movies.style.backgroundColor = "red";
movies.classList.add("big-red");

// Query Selector All
let movies1 = document.querySelectorAll(".moviesList");
movies1[1].style.backgroundColor = "blue";

// Event Listener
document.addEventListener("click", function () {
    window.alert("You clicked");
});