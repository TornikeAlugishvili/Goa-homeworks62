let add = document.getElementById("add")
let adda = document.querySelector(".adda")
let sum = 0

for (let i of add) {
    i.addEventListener("click", function (){
        sum++
        add.textContent = sum
    }
)}