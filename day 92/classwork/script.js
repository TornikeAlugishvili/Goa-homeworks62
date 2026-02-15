let form = document.getElementById("frm")
let emailError = document.getElementById("email-error")
let passwordError = document.getElementById("password-error")


form.addEventListener("submit", function(e){
    e.preventDefault()
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    if (email.value === ''){
        email.style.border = "1px solid red"
        emailError.style.display = "block"
    }else {
        email.style.border = "1px solid black"
        emailError.style.display = "none"
    }

    if (password.value === ''){
        password.style.border = "1px solid red"
        passwordError.style.display = "block"
    }else {
        password.style.border = "1px solid black"
        passwordError.style.display = "none"
    }


    if (email.value !== '' && password.value !== '') {
        email.value = ''
        password.value = ''
    }
})