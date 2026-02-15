let button = document.getElementById("btn")
let message = document.getElementById("message")
let para = document.getElementById("para")
let inp = document.getElementsByClassName("input")[0]


button.addEventListener("click", () => {
    para.textContent = inp.value
    message.style.transform = "translate(0px)"
    setTimeout(() => {
        message.style.transform = "translate(365px)"
    }, 3000)
})