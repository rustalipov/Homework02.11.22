let arr = [1,12,15,22,8,25];
let arrEven = [];

for (let i=0; i < arr.length;i++){
    if(arr[i] % 2 == 0){
        arrEven.push(arr[i])
    }else{
        continue
    }
}
console.log(arr);
console.log(arrEven)