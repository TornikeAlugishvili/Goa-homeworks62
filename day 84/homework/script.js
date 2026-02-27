const human = document.getElementById('human')
const robot = document.getElementById('robot') // scores

const result = document.getElementById('result')

const balls = document.getElementsByClassName('circle')
const balls2 = document.getElementsByClassName('circle2')

const button = document.getElementById('butonashvili')

const cube1 = document.getElementById("Quadrilateral1")
const cube2 = document.getElementById("Quadrilateral2")


let boolean = true

let count = 0
let count2 = 0

button.onclick = () => {
    if (boolean == true) {
        let random1 = Math.floor(Math.random() * 6)
        let random2 = Math.floor(Math.random() * 6)
        for (let i = 0; i < random1; i++) {
            balls[i].style.display = 'none'
        }
        for (let i = 0; i < random2; i++) {
            balls2[i].style.display = 'none'
        }
        if (random1 < random2) {
            result.textContent = 'Win'
            count++
            human.textContent = count
        }
        else if (random1 > random2) {
            result.textContent = 'Lose'
            count2++
            robot.textContent = count2
        }
        else {
            result.textContent = 'Draw'
        }
        boolean = false
        button.textContent = 'Restart'
    }
    else if (boolean == false) {
        for (let i = 0; i < 6; i++) {
            balls[i].style.display = 'flex'
        }
        for (let i = 0; i < 6; i++) {
            balls2[i].style.display = 'flex'
        }
        boolean = true
        result.textContent = 'Reseted'
    }
}