// 1) უყურეთ ამ ვიდეოს: https://www.youtube.com/watch?v=ZOQYIWLngSU: done!
// 2) უყურეთ ამ ვიდეოს: https://www.youtube.com/watch?v=TDUz9QcGPoE: done!


// 3) დაწერე პროგრამა, რომელიც მომხმარებელს სთხოვს შეიყვანოს ნებისმიერი მთელი რიცხვი n. პროგრამამ for ციკლის გამოყენებით უნდა გამოთვალოს ყველა რიცხვის ჯამი 1-დან n-მდე.

function sumOfN(){
    let n = prompt("enter number: ")
    for(let i = 1; i<=n; i++) {
        console.log(i)
    }
}

sumOfN()


// 4) შექმენი ცვლადი password = "1234". სთხოვე მომხმარებელს შეიყვანოს პაროლი მანამ, სანამ ის სწორად არ გამოიცნობს მას. თუ შეყვანილი ტექსტი არასწორია, პროგრამამ თავიდან უნდა სთხოვოს შეყვანა.


let password = "1234";
let userInput = prompt("enter password: ");

while (userInput !== password) {
    userInput = prompt("password is inccorect! try again: ");
    if (userInput === password) {
        console.log("you did it!")
    }
}