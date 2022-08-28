//for single user

// let name = document.getElementById("name");
// let phoneNumber = document.getElementById("phone no.");
// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let signupButton = document.getElementById("btn");



// signupButton.addEventListener("click",()=>{
//     localStorage.setItem("name", name.value);
//     localStorage.setItem("phoneNumber", phoneNumber.value);
//     localStorage.setItem("password", password.value);
//     localStorage.setItem("username", username.value);
// })


//for multiple user

let name = document.getElementById("name");
let phoneNumber = document.getElementById("phone no.");
let username = document.getElementById("username");
let password = document.getElementById("password");
let signupButton = document.getElementById("btn");


let users_data=new Array();
users_data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    
signupButton.addEventListener("click",()=>{
    users_data.push({
        "name":name.value,
        "phoneNumber":phoneNumber.value,
        "password":password.value,
        "username":username.value
      })
    localStorage.setItem("users_data", JSON.stringify(users_data));

})

