
let btn = document.getElementById("btn")
let result = document.getElementById("result")
async function getProducts() {
    let id1 = Number(document.getElementById("id1").value)
    let id2 = Number(document.getElementById("id2").value) 
    if (id1 > id2) {
        alert("id2 should to be more than id1 or Torniko will knock you out")
    }
  
    try {
        let response = await fetch("https://api.escuelajs.co/api/v1/products/")
        let data = await response.json()  
        let filtered = data.filter(product =>
            product.id >= id1 && product.id <= id2
        )     
        result.innerHTML = "" 
        filtered.forEach(product => {
            let div = document.createElement("div")
            div.innerHTML = `
            <h3>${product.title}</h3>
            <p>ID: ${product.id}</p>
            `
            result.appendChild(div)
        })
        
    } catch (error) {
        console.log("Error:", error)
    }
}
btn.addEventListener("click", getProducts)