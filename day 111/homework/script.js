// object - ობიექტი იქმნება როგორც ცვლადი და მასში ვინახავთ ცვლადის დამახასიათბელ თვისებებს

let car = {
    color: "blue",
    model: "Bmw",
    seats: "2",
    noise: console.log("gggggggggggggggggggr")
}

car.noise


// callback - ნიშნავს როდესაც ფუნქციას არგუმენტად გადაეცემა ფუნქცია მაგ:

function caller(func) {
    func()
}

caller(() => {
    console.log("function done!")
})

// function - ს შექმნა 3 ნაირად შეგვიძლია:

let function1 = function(username) {
    console.log("hello ", username)
}

function function2(username) {
    console.log("hello ", username)
}

let function3 = (username) => {
    console.log("hello ", username)
}