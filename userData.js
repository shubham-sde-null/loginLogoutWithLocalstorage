var user_data = new Array();
user_data = JSON.parse(localStorage.getItem("users"));
console.log(user_data[0]);
// var namep = document.getElementById("name");
// // console.log(name.textContent);
// console.log(namep);
// namep.innerHTML = user_data[0].name;
let dataContainer = document.querySelector(".dataContainer");
for (let i = 0; i < user_data.length; i++) {
    let dataToEnter = document.createElement("div");
    dataToEnter.innerHTML = `<div class="rowData">
<p>${user_data[i].name}</p>
<p>${user_data[i].email} </p>
<p>${user_data[i].name}</p>
         </div>`;
    dataContainer.appendChild(dataToEnter);
}