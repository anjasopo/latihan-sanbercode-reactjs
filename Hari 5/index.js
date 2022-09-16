var obj = {
    angka1: 1,
    angka2: 2,
    angka3: 3,
}

console.log(obj)
console.log(obj.angka3)

// mengisi obj
var obj2 = {}

obj2.angka1 = 1
obj2["angka kedua"] = 2

console.log(obj2)
console.log(obj2.angka1)
console.log(obj2["angka kedua"])

//method foreach
var array = [1,2,3,4,5]

// for(let i = 0; i < array.length; i++){ <=== kaya begitu
//     console.log(array[i])
// }

var mobil = [
    {merk: "BMW", warna: "merah", tipe: "sedan"}, 
    {merk: "toyota", warna: "hitam", tipe: "box"}, 
    {merk: "audi", warna: "biru", tipe: "sedan"}
    ]

mobil.forEach(function
     (result){
        console.log(result.merk)
     })

//method map
var output = mobil.map(function(result){
    return result.warna
})

console.log(output)

//method filter
var outputfilter = mobil.filter(function(result){
    return result.merk === "BMW"
})

console.log(outputfilter)