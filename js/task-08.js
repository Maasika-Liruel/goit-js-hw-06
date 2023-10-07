const loginform = document.querySelector(".login-form");
function foo(event) {
    event.preventDefault()
    const email = loginform.email.value.trim();
    const password = loginform.password.value.trim();
    if (email === "" || password === "") {
        alert("Усі поля мають бути заповнені")
    }
    else {
        console.log({"email": email, "password" : password});
    }
    loginform.reset()
}
loginform.addEventListener("submit", foo);
