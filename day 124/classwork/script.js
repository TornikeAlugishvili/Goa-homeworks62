fetch('https://api.escuelajs.co/api/v1/products/')
    .then(res => res.json())
    .then(pr => console.log(pr))

let submit = document.getElementById('sub')
let result = document.getElementById('y')

submit.addEventListener('click', () => {
    let input = document.getElementById('input').value
    response.then(data => {
        data.map(x => {
            if (x.title == input){
                result.textContent = x.description
                return 0
            }
        })
    })
})