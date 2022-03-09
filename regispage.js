const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "gowthami@gmail.com" && password === "gowthu58"||username==="divya@gmail.com"&&password==="divya123") {
        alert("successfully logged");
        open("///C:/Users/Gowth/Desktop/Gowthami/reg1.html");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})