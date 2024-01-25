
function formdata() {

    let button2 = document.getElementById("button2")

    let name = document.getElementById("name");
    let nameText = document.getElementById("nametext");


    let email = document.getElementById("email");
    let emailText = document.getElementById("emailtext");


    let password = document.getElementById("password");
    let passwordText = document.getElementById("passwordtext");
    
     




    if (name.value.length == 0) {
        name.classList = "redborder"
        nameText.style.display="block"
    }
    else {
        name.classList = "yellowborder"
        nameText.style.display="none"
    }

    if (email.value.length == 0) {
       
        email.classList = "redborder"
        emailText.style.display="block"

    }
    else {
        email.classList = "yellowborder"
        emailText.style.display="none"
    }

    if (password.value.length == 0) {
        password.classList = "redborder"
        passwordText.style.display="block"

    }

    else {
        password.classList = "yellowborder"
        passwordText.style.display="none"
   }

if (name.value.length!=0 && email.value.length!=0 && password.value.length!=0){
    button2.disabled=true
    setTimeout(()=>{
        alert ("data has submitted succesfully")
    },3000)
 
}











}