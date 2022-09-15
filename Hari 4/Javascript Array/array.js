var array = [1, 2, 3]
array.push(10) // menambahkan nilai

console.log(array[3])
console.log(array.length)

array.pop() // menghapus nilai belakang
console.log(array[3])

//destructuring
let numbers = [1,2,3]

const [numberOne, numberTwo, numberThree] = numbers

console.log(numberOne)