// array of fruits
const fruits = ['apple', 'banana', 'orange', 'mango', 'lemon'];

console.log(fruits.length)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]+" is in basket position "+i)
}

console.log("DONE")

fruits.forEach((fruit, index) => {
    console.log(fruit+" is in basket position "+index)
})