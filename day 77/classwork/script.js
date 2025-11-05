let imgs = ["1.png","2.png","3.png","4.png","5.png",]

let img = document.getElementById("photo")
document.getElementById("btn").onclick = function() {
    let random = Math.floor(Math.random() * 5)
    img.src = imgs[random]
    console.log(random)
}