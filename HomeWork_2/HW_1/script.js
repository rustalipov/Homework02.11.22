
// let num = 0
// clearTimeout()

// const val = setInterval(()=>{
//     num++;
//     console.log(num)
//     if (num >= 50){
//         clearInterval(val)
//     }
// },100)


let block = document.querySelector('.block')

let topPos = 0
let position = 0

const moveBlock = () =>{
    if(position <= 285 && topPos == 0){
        position += 15
        block.style.left = `${position}px`
        setTimeout(moveBlock,100);
        console.log(position,topPos)
    }else if(position == 0 && topPos <= 300){
        topPos -=15
        block.style.top = `${topPos}px`
        setTimeout(moveBlock,100);
        console.log(position,topPos)
    }else if(position >=285 && topPos <= 285){
        topPos += 15
        block.style.top = `${topPos}px`
        setTimeout(moveBlock,100)
        console.log(position,topPos)
    }else if(position <= 300 && topPos == 300 ){
        position -=15
        block.style.left = `${position}px`
        setTimeout(moveBlock,100);
        console.log(position,topPos)
    }
}
moveBlock()