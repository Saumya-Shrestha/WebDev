let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    output.innerHTML = input;
});