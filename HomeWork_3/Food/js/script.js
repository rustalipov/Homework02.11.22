const tabItems = document.querySelectorAll('.tabheader__item')
const tabContent = document.querySelectorAll('.tabcontent')
const tabParent = document.querySelector('.tabheader__items')

const hideTabContent = () =>{
    tabContent.forEach((item) => {
        item.classList.add('hide')
        item.classList.remove('show')
    })
    tabItems.forEach((item) => {
        item.classList.remove("tabheader__item_active") 
    })
}


const showContent = (i = 0) => {
    tabContent[i].classList.add('show')
    tabContent[i].classList.remove('hide')
    tabItems[i].classList.add('tabheader__item_active')
}

hideTabContent()
showContent()

tabParent.addEventListener('click', (event) => {
    const target = event.target

    if(!target.classList.contains('tabheader__item_active')){
        tabItems.forEach((item,idx)=> {
            if(target === item){
                hideTabContent()
                showContent(idx)         
            }
        }) 
    }
})


const modal = document.querySelector(".modal")
const closeModel = document.querySelector('.modal__close')
const openModal = document.querySelector("#open")

openModal.addEventListener('click',()=>{
    modal.style.display = 'block'
})
closeModel.addEventListener('click',()=>{
    modal.style.display = 'none'
})