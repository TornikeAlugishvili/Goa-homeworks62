let fectAPI = fetch('https://api.escuelajs.co/api/v1/products/')
let promi = fectAPI.then(res => res.json())

let submit = document.getElementById('sub')
let result = document.getElementById('y')

const createNewCard = (product) => {
    let parentDiv = document.createElement("div")
    parentDiv.style.width = "300px"
    parentDiv.style.hieght = "400px"
    parentDiv.style.border = "1px solid black"
    parentDiv.style.padding = "15px"
    parentDiv.style.display = "flex"
    parentDiv.style.flexDirection = "column"
    parentDiv.style.alignItems = "center"
    parentDiv.style.gap = "10px"
    parentDiv.id = product.id

    let productImage = document.createElement("img")
    productImage.src = product.images[0]
    productImage.style.width = "200px"

    let productTitle = document.createElement("h1")
    productTitle.textContent = product.title

    let productDescription = document.createElement("p")
    productDescription.textContent = product.description

    let productPrice = document.createElement("h2")

    productPrice.textContent = product.price


    parentDiv.append(productImage, productTitle, productDescription, productPrice)

    return parentDiv
}


submit.addEventListener('click', () => {
    let input = document.getElementById('input').value
        promi.then(data => {
            data.map(x => {
                if (x.title == input) {
                    let product = createNewCard(x)
                    document.body.appendChild(product)
                }
            })
        })
})
