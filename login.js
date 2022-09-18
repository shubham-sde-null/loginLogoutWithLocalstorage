var loginBtn = document.getElementById("login");
let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
if (name != "") {
    window.alert("you are already logged, click ok to visit your profile page");
    window.location.href = "profilePage.html";
}

function loginData() {
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ?
        JSON.parse(localStorage.getItem("users")) :
        [];

    if (
        user_records.some((storedData) => {
            return storedData.email == email && storedData.password == password;
        })
    ) {
        window.alert("login successful");
        let current_user = user_records.filter((storedData) => {
            return storedData.email == email && storedData.password == password;
        })[0];
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);
        window.location.href = "profilePage.html";
    } else {
        window.alert("login unsuccessful");
    }
}
loginBtn.addEventListener("click", loginData);