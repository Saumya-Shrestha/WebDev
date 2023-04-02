const submitButton = document.getElementById("submitButton");
let errors = {};

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    errors = {};
    let signupForm = document.forms["signupForm"];
    let firstNameInput = signupForm.firstName;
    if(firstNameInput.value == ""){
        errors.firstName = "First Name cannot be empty";
        document.getElementsByName('firstName')[0].placeholder='';
    }

    let lastNameInput = signupForm.lastName;
    if(lastNameInput.value == ""){
        errors.lastName = "Last Name cannot be empty";
        document.getElementsByName('lastName')[0].placeholder='';
    }

    let emailInput = signupForm.email;
    if(emailInput.value == ""){
        errors.email = "Looks like this is not an email";
        document.getElementsByName('email')[0].placeholder='email@example/com';
    }
    
    let passwordInput = signupForm.password;
    if(passwordInput.value == ""){
        errors.password = "Password cannot be empty";
        document.getElementsByName('password')[0].placeholder='';
    }
    else if(passwordInput.value.length <= 5){
        errors.password = "Password must be at least 5 characters long";
        document.getElementsByName('password')[0].placeholder='';
    }

    for(let error in errors){
        let errorGroup = document.getElementById(`${error}Group`);
        let errorMessage = document.querySelector(`#${error}Group .message`);
        errorGroup.classList.add("error");
        errorMessage.textContent = errors[error];
    }
    
    if(Object.keys(errors).length == 0){
        signupForm.submit();
    }
});

