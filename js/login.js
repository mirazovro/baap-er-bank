//step 1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //   step 2: get the email adress inside the email input field
  //alwayes keep in mind to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //step-3: get password
  //step-3.a: set id on the html element
  //step-3.b: get the element
  //step-3.c: get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(email, password);

  //danger: do not verify email password on the client side
  //step-4: verify email and password and check weather valid user or not
  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
});
