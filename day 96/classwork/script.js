// function Car(model, color, age,) {
//     this.carmodel = model
//     this.carcolor = color
//     this.carcolor = age
//     this.info = function() {
//         console.log("this model is", model, "its color", color, "its from",age)
//     }
// }

// let bmw = new Car("BMW", "BLACK", "1984")
// bmw.info()

// // ------------------------------------------------------------


// // nested object - არის ობიექტი რომლის შიგნითაც ინახება კიდევ ერთი ობიექტი...


function func(name, age) {
    console.log("i am" + name + "am" + age)
}

let func1 = function(name, age) {
    console.log("i am" + name + "am" + age)
}

let func2 = (name, age) => {
    console.log("i am" + name + "am" + age)
}

// of გამოიყენება როდესაც ვუვლით ლისტს, ხოლო in როდესაც ვუვლით სტრინგს