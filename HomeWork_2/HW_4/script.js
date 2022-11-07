let arr = ["a","b","c","d","e","f"]

console.log(arr)

//создаю цикл для перебора массива
for (i in arr){
    let b = arr[i]
    let c = b.toUpperCase()
    arr[i] = c
}

console.log(arr)