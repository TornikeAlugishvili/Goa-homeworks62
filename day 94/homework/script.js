// 1)

let userName = prompt("enter your name")

// userName === "davit" ? console.log("controller") : userName === "aleksandre" ? console.log("mentor") : console.log("i dont know")


switch(userName){
    case "aleksandre":
        console.log("controller")
        break
    case "davit":
        console.log("mentor")
        break
    default:
        console.log("i dont know")
        break
}