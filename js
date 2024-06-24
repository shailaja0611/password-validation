function Validation() {
    let password = document.getElementById("password").value;
    let cnformPassword = document.getElementById("cnformpassword").value;
    let message = document.getElementById("message");

    if(password.length >= 5) {
        if(password === cnformPassword) {
            message.textContent = "Passwords match";
            message.style.backgroundColor = "#1dcd59";
        }
        else{
            message.textContent = "wrong Password";
            message.style.backgroundColor = "#ff4d4d";
        }
    }  
    else{
        message.textContent = "password must be above 5";
        message.style.backgroundColor = "#ff4d4d";
    }
}
