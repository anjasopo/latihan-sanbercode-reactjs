const myFunctionPromise = (param) => {
    
    
    return new Promise(( resolve, reject ) => {

        if(param === 2){
            resolve("hallo, saya kondisi true/berhasil")
        }else{
            reject("Halo, ini kondisi false/gagal")
        }
    })

}

let execute = async () => {

    try{
        let result = await myFunctionPromise(12)
        console.log(result)
    }catch(error){
        console.log("ini catch error = ", error)
    }
}

execute()