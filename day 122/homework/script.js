class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = false
    }

    read() {
        this.isRead = true
    }

    getSummary() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}


class Laptop {
    constructor(brand, ram, storage) {
        this.brand = brand
        this.ram = ram
        this.storage = storage
        this.isOn = false
    }

    turnOn() {
        this.isOn = true
    }

    turnOff() {
        this.isOn = false
    }

    upgradeRam(amount) {
        this.ram += amount
    }
}



class Player {
    constructor(username) {
        this.username = username
        this.health = 100
        this.level = 1
    }

    takeDamage(amount) {
        this.health -= amount
        if (this.health < 0) this.health = 0
    }

    heal(amount) {
        this.health += amount
        if (this.health > 100) this.health = 100
    }

    levelUp() {
        this.level += 1
    }
}


class ShoppingCart {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName)
    }

    getTotalItems() {
        return this.items.length
    }
}


class Timer {
    constructor(time) {
        this.time = time
        this.interval = null
    }

    start() {
        if (this.interval) return

        this.interval = setInterval(() => {
            console.log(this.time)
            this.time--

            if (this.time < 0) {
                this.stop()
            }
        }, 1000)
    }

    stop() {
        clearInterval(this.interval)
        this.interval = null
    }

    reset() {
        this.stop()
        this.time = 0
    }
}