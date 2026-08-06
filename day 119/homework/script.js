try {
    const gela = "gela"
    gela = "mela"
}

catch (e) {
   console.log(e.message)
}

let name = "luka"

try {
    name()
}

catch (e) {
    console.log("this isn't function!")
}

let data = {
    name: "luka"
}

try {
    JSON.parse(data)
}

catch (e) {
    console.log("wrong JSON")
}

let arr = [1,2,3]

try {
    arr.toUperCase() 
}

catch {
    console.log("Wrong method")
}

function devide(a,b) {
    return a/b
    if (b === 0) {
        try {
            a/0
        }

        catch {
            console.log("not allowed to devide on 0")
        }
    }
}

console.log(devide(5,5))