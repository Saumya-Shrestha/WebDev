let submitButton = document.getElementById("submitButton");
let errors = {};
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    let signupForm = document.forms["signupForm"];

    let firstNameInput = signupForm.firstName;
    if(firstNameInput.value == ""){
        errors.firstName = "First Name cannot be empty.";   
    }

    let lastNameInput = signupForm.lastName;
    if(signupForm.lastName.value == ""){
        errors.lastName = "Last Name cannot be empty.";
    }

    console.log(errors);

    for(let error in errors){
    }
});