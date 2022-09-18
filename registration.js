var saveBtn = document.getElementById("save");

function saveData() {
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ?
        JSON.parse(localStorage.getItem("users")) :
        [];
    if (
        user_records.some((storedData) => {
            return storedData.email == email;
        })
    ) {
        window.alert("email already present");
    } else {
        user_records.push({
            name: name,
            email: email,
            password: password,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        // window.alert("account created successfully");
        if (window.confirm("account created successfully, do you want to login?")) {
            window.location.href = "login.html";
        }
    }
}
saveBtn.addEventListener("click", saveData);