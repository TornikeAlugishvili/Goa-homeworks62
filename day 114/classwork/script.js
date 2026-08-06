function number(a) {
    let number = promt("enter number: ")
    console.log(Math.floor(number))
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(Math.max(numbers))
console.log(Math.min(numbers))

let input = promt("enter number: ")
console.log(input*2)

let input2 = promt("enter a float number: ")
console.log(Math.floor(input2))

console.log(Math.random() * 100)

let input3 = promt("enter number 1-10: ")
if (input3 === Math.random() * 10) {
    console.log("Correct")
}

else {
    console.log("Incorrect, Wrong")
}