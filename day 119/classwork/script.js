// 1)


// function Car(model,brand,color) {
//     this.modeli = model
//     this.brandi = brand
//     this.colori = color
// }

// let obj = new Car("bmw", "Idk", "black")
// let obje = new Car("mercedes", "Idk", "white")

// function Student(name,age,classs) {
//     this.saxeli = name
//     this.asaki = age
//     this.klasi = classs
// }

// let objA = new Student("Tornike", 12, 6)
// let objB = new Student("GIORGI", 12, 6)
// let objC = new Student("demna", 15, 9)

// function Phone(brandi,price,storage) {
//     this.brandiI = brandi
//     this.fasi = price
//     this.storagei = storage
// }

// let kutu = new Phone("Iphone", 2700, "IDK")
// let kutuA = new Phone("Google Pixel", 2200, "IDK")


// function Animal(type, name, age) {
//     this.tipi = type
//     this.saxel = name
//     this.asakini = age
// }

// let animali = new Animal("zuzumwovari", "idk", 150)
// let animal = new Animal("zuzumwovari", "idk", 1111150)

// function User(username,email,isActive) {
//     this.useri = username
//     this.emaili = email
//     this.isactivi = isActive
// }

// let user1 = new User("gela", "gelabarkalaia@gmail.com", true)
// let user2 = new User("bela", "belabarkalaa@gmail.com", false)



// 2) ---------------------------------------------------------------------

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