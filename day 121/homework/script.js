const promis = new Promise((resolve,reject) => {
    resolve("hello world")
})

promis.then((resolve) => {
    console.log(resolve)
})

const por = new Promise((resolve,reject) => {
    reject("Error")
})

por.catch((result) => {
    console.log(result)
})

const poor = new Promise((resolve,reject) => {
    resolve(5)
})  

poor.then((num) => {
    num *= 2
    console.log(num)
})


const opaa = new Promise((resolve,reject) => {
    resolve("start")
})

opaa.then((end) => {
    return  "start - end"
})

const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random()

    if (random < 0.5) {
        resolve("Success")
    } else {
        reject("Fail")
    }
})

randomPromise.then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
})