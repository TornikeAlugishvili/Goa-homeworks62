//თეორიული

// 1) Promise არის დაპირება ანუ გვპირდება რომ საპასუხოდ გვიბრუნდება რაიმე შედეგი

// 2) resolve - გამოიყენება იმისთვის რომ დავაბრუნოთ დადებითი შედეგი Promise ში reject -გამოიყენება იმისთვის რომ დავაბრუნოთ უარყოფითი შედეგი Promise ში

// 3) pending - არის როდესაც არც დადებითი შედეგია და არც უარყოფითი შედეგი promise ში                fulfield -არის როდესაც დადებითი შედეგია promise ში rejected - არის როდესაც უარყოფითი შედეგია promise ში 

// 4) // PromiseResult ში ინახება რაც გადავეცით resolve ს ან reject ს არგუმენტად ანუ callback

// 5) .then() მეთოდი იხმარება მხოლოდ ისეთ მონაცემებზე და ფუნქციებზე რომლებიც აბრუნებენ ან ინახავენ Promise ში .catch() არის მეთოდი, რომელიც იგივენაირად იღებს არგუმენტად ფუნქციას callback ს და  ფუნქცია იღებს არგუმენტად PromiseResult - ს

// 6) არაფერი არ მოხდება, იქნება pending მდგომარეობაში

// 7) არა, არ შეიძლება იმიტომ რომ then მუშაობს მხოლოდ Promise - ზე



// პრაქტიკული

const newPromise = new Promise((resolve, reject) => {
    resolve("hello world")
})

const newromise = new Promise((resolve, reject) => {
    let number = prompt("enter number: ")
    if (number % 2 === 0) {
        resolve("Odd")
    } else {
        resolve("Even")
    }
})

const newromisee = new Promise((resolve, reject) => {
    let number = prompt("enter number: ")
    if (number === 1234) {
        resolve("Access granted")
    }else {
        reject("Access denied")
    }
})

const getUser = new Promise((resolve, reject) => {
    let user = {
        name: "Tornike",
        age: 2000000
    }

    resolve(user)
})

getUser.then(user => {
    console.log(user.name)
})

Promise.resolve(5)
  .then(num => {
    return num * 2
  })
  .then(num => {
    return num + 10
  })
  .then(result => {
    console.log(result)
  })



const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random()

    if (random < 0.5) {
        resolve("Success")
    } else {
        reject("Error")
    }
})

function checkUser(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Adult")
        } else {
            reject("Minor")
        }
    })
}
