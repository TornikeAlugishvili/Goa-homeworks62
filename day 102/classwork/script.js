list = [1,2,3,4,5,6,7,8,9,10]

list1 = list.reduce((a,b) => {
    return a+b
})

console.log(list1)

Names = ["M", "i", "d", "r", "a", "d"]
names1 = Names.reduce((split) => {
    return Names[0] + Names[4] + Names[2] + Names[3] + Names[1] + Names[5]
})

console.log(names1)


let List = [1,2,3,4,5,6,7,8,9,10]
let List1 = List.reduce((sum,yy) => {
    return sum+yy > List.length()
})