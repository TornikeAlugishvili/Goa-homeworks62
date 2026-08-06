class Car {
    constructor(brand, model, year, speed) {
        this.band = brand
        this.modela = model
        this.weli = year
        this.sicqare = speed
        this.func = function () {
            console.log("car is moving")
            this.sicqare += 30
        }
    }
}

class Students {
    constructor(name, age, grade) {
        this.saxeli = name
        this.asaki = age
        this.gradei = grade
    }

    studentsinfo() {
        console.log("hello, my name is:", this.name)
    }

    isPassed() {
        if (this.grade >= 51) {
            grade = true
        }
        else {
            grade = false
        }
    }
}

class retangle {
    constructor(width, height) {
        this.sigrze = width
        this.sigane = height
    }

    getArea() {
        this.width * this.height
    }

    getperimeter() {
        this.width * 2 + this.height * 2 
    }
}


class bankAccount {
    constructor(owner,balance) {
        this.mflobeli = owner
        this.balansi = balance
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }

    getBalance() {
        this.balance = this.balance
    }
}


class Phone {
    constructor(brand, model, battary) {
        this.brendi = brand
        this.modeli =  model
        this.bataria = battary
    }

    charge() {
        this.battary = 100
    }

    use(amount) {
        this.battary -= amount
    }
}

class Animal {
    constructor(name,type,sound) {
        this.saxelii = name
        this.tipi = type
        this.xma = sound
    }

    makeSound() {
        console.log(this.sound)
    }

    info() {
        console.log("this is: ", this.type, "named: ", this.name)
    }
}