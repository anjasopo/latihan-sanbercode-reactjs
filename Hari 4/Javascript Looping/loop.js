var angka = 1

while(angka < 10){
    console.log(angka)
    angka++; // angka = angka + 1
}

// loop kondisi
var i = 0

while( i < 5){

    if(i === 3){
        console.log("ini while denga kondisi")
    }else{
        console.log(i)
    }

    i++;
}

// loop for
for (let angkaFor = 0; angkaFor < 10; angkaFor++){
    console.log("ini proses for yang ke -", (angkaFor+1))
}