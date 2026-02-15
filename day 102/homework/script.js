list = [1,2,3,4,5,6,7,8,9,10]
list1 = list.reduce((a,b) => {
    return a+b
})

// console.log(list1)


Names = ["M", "a", "d", "r", "i", "d"]
names1 = Names.reduce((a,b) => {
    return a+b
})

// console.log(names1)

let List = [1,2,3,4,5,6,7,8,9,10]
let List1 = List.reduce((a,b) => {
    return a+b 
}) / List.length


// map არის ფორ ლოოპის შემოკლებული ვერსია და სტილავს ლისტს
// filter არის ერთ ხაზიანი კოდი რომლითაც შეგვიძლია დავაბრუნოთ გაილტრული რიცხვები მაგ: სიიდან ამოიღოს კენტი რიცხვები
// reduce ში ვქმნით ფუნქციას რომელიც დააბრუნებს არამარტო გასტილულ ლისტს, არამედ შეასრულებს ნებისმიერ ფუნქციას