const sumOfSymbol = (word,letter)=>{
    let num = 0
    for (let i = 0; i <= word.length; i++){
        if (word[i] == letter){
            num++
        }
    }
    console.log(num)
}
sumOfSymbol('sdssstytyrtssdsd','s')