// დავალება 1

// მოცემულია მასივი:

// let nums = [1, 2, 3, 4, 5];

// შექმენი ახალი მასივი, სადაც ყველა რიცხვი იქნება გაორმაგებული.

let nums = [1,2,3,4,5]

let nums1 = nums.map((element) => {
    return element*2
})

console.log(nums1)