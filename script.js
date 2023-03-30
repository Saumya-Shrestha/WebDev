let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    let signupForm = document.forms["signupForm"];
    console.log(signupForm);
    let firstNameInput = signupForm.firstName;
    console.log(firstNameInput.value);
    let lastNameInput = signupForm.lastName;
    console.log(lastNameInput.value);
    let emailInput = signupForm.email;
    console.log(emailInput.value);
});