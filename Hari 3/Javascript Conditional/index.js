//if

var kalimat = "sanbercode"

if(kalimat == "sanbercode"){
    console.log("Ya benar ini adalah sanbercode")
}

//if else
var minimarketStatus = "open"

if(minimarketStatus == "tidak open"){
    console.log("Bisa belanja")
} else {
    console.log("Tidak bisa belanja")
}

//switch case
var buttonPushed = 2;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}

//ternary operator
var age= 20
var bisaVote= age > 20 ? "bisa vote" : "belum bisa vote" // hasilnya belum bisa vote
console.log(bisaVote)
var angka = 9
var jenisBilangan = angka % 2 === 0 ? "Bilangan Genap" : "Bukan Bilangan Genap" //hasilnya bukan bilangan genap
console.log(jenisBilangan)
