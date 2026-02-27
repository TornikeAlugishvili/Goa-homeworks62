let list = [1,2,3,4,5,6,7,8,9,10]

let list1 = list.filter((num) => num % 2 == 0)
console.log(list1)

let guys = [
    {name: "Giorgi", score: 70},
    {name: "Ana", score: 10},
    {name: "Aleksandre", score: 100},
    {name: "Tornike", score: 90}
]

let failedGuys = guys.map((student) => {
    if (guys.score < 50) {
        return guys.name + "Fail"
    }

    else {
        return "Passed"
    }
})

let numbers = [];
let i = 1;

while (i <= 20) {
  numbers.push(i)
  i++
}

let whileLoop = numbers.reduce((a, b) => {
    return a * b
})

let product = [
    {name: "iphone", price: 120},
    {name: "bmw", price: 1000000000},
    {name: "toyCar", price: 40}
]

let moreThanHundred = product.map((product) => {
    if(product.price > 100) {
        return product.name
    }
})

let nums = [1,2,3,4,5,6,7,,8,9,10]

let Nums = nums.map((a,index) => {
    return a+index > 10 ? 'result is  > 10' : "result is  < 10"
})


function Car(brand, year) {
  this.brand = brand
  this.year = year
}

let car = new Car("bmw", 2005)

switch (true) {
  case car.year < 2000:
    status = "Old"
    break

  case car.year >= 2000 && car.year <= 2015:
    status = "Modern"
    break

  case car.year > 2015:
    status = "New"
    break

  default:
    status = "Unknown"
}

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Giorgi", 17)
const user2 = new User("Nino", 22)
const user3 = new User("Luka", 18)
const user4 = new User("Ana", 15)


const allUsers = [user1, user2, user3, user4]

const big = users.filter((user) => {
    return user.age >= 18
})

console.log(big)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]


const mergedArray = [...arr1, ...arr2]

for (let i = 0; i < mergedArray.length; i++) {
  console.log(mergedArray[i])
}

function isActive(object) {

  const { ...rest } = object

  return {
    ...rest,
    isActive: true
  }
}

const user = {
  name: "Giorgi",
  age: 25
}

const updatedUser = isActive(user)

console.log(updatedUser)



let words = ["apple", "banana", "kiwi", "strawberry", "orange", "demna", "tornike"]

let bigWords = words.filter((word) => {
    return word.length > 5
})

let upperCaseWords = bigWords.map(word => word.toUpperCase())

console.log(upperCaseWords)

let Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

if (Numbers > 10) {
    return Numbers > 10
}

const jobs = [
  { name: "Giorgi", role: "developer" },
  { name: "Nino", role: "designer" },
  { name: "Luka", role: "manager" },
  { name: "Ana", role: "developer" }
];

const jobsWithSalary = jobs.map((rol) => {

  switch(rol.role) {
    case "developer":
      salary = 3000
      break;
    case "designer":
      salary = 2500
      break;
    case "manager":
      salary = 4000
      break;
    default:
      salary = 2000
  }

  return { ...rol, salary }
});

console.log(jobsWithSalary)

function getEvenNumbers(arr) {
  const evenNumbers = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i])
    }
  }

  return evenNumbers
}

const Gumbers = [1, 2, 3, 4, 5, 6, 7, 8]
const evens = getEvenNumbers(Gumbers)

console.log(evens)

function Product(name, price) {
  this.name = name
  this.price = price
}

let product1 = new Product("Laptop", 1000)
let product2 = new Product("Phone", 500)
let product3 = new Product("Headphones", 150)


const products = [product1, product2, product3]

const totalPrice = products.reduce((sum, product) => sum + product.price, 0)

console.log("Total price:", totalPrice)


let ObjecT = {
    name: "Temuri"
}


let admins = [
    {name: "shavlego", admin: True},
    {name: "Madona", admin: False},
    {name: "Lia Babo", admin: False}
]

let Admins = admins.filter((admins) => {
    if(admins.admin == true) {
        return admins.name
    }
})