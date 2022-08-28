//for single user

// let username1 = document.getElementById("username");                   
// let password1 = document.getElementById("password");
// let loginBtn = document.getElementById("btn")


// loginBtnaddEventListener('click',()=>{
//    let username = localStorage.getItem("username");
//    let password = localStorage.getItem("password");
// })

// if(username1==username && password1==password){
//     document.write("right");
// }
// else{
//     document.write("wrong");
// }




//for multiple user

let username1 = document.getElementById("username");
let password1 = document.getElementById("password");
let loginBtn = document.getElementById("btn")


loginBtn.addEventListener('click', () => {
    let users_data = new Array();
    users_data = JSON.parse(localStorage.getItem("users_data"))
    for (let i = 0; i < users_data.length; i++) {
        if (username1.value === users_data[i].username && password1.value === users_data[i].password) {
            document.write("right");
            break;
        }
        
        
    }
})
