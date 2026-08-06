function uppercase(a){
    let res = []
    for (let i of a){
        if (typeof i == "string"){
            res.push(i.toUpperCase())
        }else {
            res.push(i)
        }
    }
    return res
}