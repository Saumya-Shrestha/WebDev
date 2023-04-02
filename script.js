let submitButton = document.getElementById("submitButton");
let errors = {};
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    errors = {};
    let signupForm = document.forms["signupForm"];
    let firstNameInput = signupForm.firstName;
    if(firstNameInput.value == ""){
        errors.firstName = "First Name cannot be empty.";   
    }

    let lastNameInput = signupForm.lastName;
    if(lastNameInput.value == ""){
        errors.lastName = "Last Name cannot be empty.";
    }

    let emailInput = signupForm.email;
    if(emailInput.value == ""){
        errors.email = "Email cannot be empty.";
    }

    let passwordInput = signupForm.password;
    if(passwordInput.value == ""){
        errors.password = "Password cannot be empty.";
    }
    else if(passwordInput.value.length <= 5){
        errors.password = "Password must be at least 5 characters long.";
    }

    for(let error in errors){
        let lastNameGroup = document.getElementById(`${error}Group`);
        let LastNameMessage = document.querySelector(`#${error}Group .message`);
        lastNameGroup.classList.add("error");
        LastNameMessage.textContent = errors[error];
    }
    
    if(Object.keys(errors).length == 0){
        signupForm.submit();
    }
});