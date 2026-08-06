setTimeout(() => {
    console.log("A")
}, 3000)

setTimeout(() => {
    console.log("B")
}, 1000)

setTimeout(() => {
    console.log("C")
}, 2000)

// _______________________________



let pomis = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello")
    }, 2000)
})

pomis.then((data) => {
    console.log(data).then(() => {
        console.log("World")
    })
})

let .func

let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("eat")
    }, 2000)

    setTimeout(() => {
        console.log("sleep")
    }, 1000)
})

prom.then((hello, mello) => {
    console.log(mello).then(() => {
        console.log(hello)
    })
})

let proms = new Promise(() => {
    setTimeout(() => {
        console.log("Task 1")
    }, 3000)

    setTimeout(() => {
        console.log("Task 2")
    }, 2000)

    setTimeout(() => {
        console.log("Task 3")
    }, 1000)
})


proms.then((bela, gela, maia) => {
    console.log(maia)
})

let myPromise = new Promise((resolve, reject) => {
    let random = Math.random()

    if (random < 0.5) {
        resolve("Success")
    } else {
        reject("Error")
    }
})