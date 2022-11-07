let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let result = document.querySelector('#result');
let resultNum = 0





btnStart.addEventListener('click',()=>{
    let a = setInterval(()=>{
        resultNum++
        result.innerText = resultNum
    },1000)
    btnStop.addEventListener('click', ()=>{   
        clearInterval(a)
    })  
})




 
 