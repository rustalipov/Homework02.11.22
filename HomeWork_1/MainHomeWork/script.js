let innType = document.querySelector('.innType')
let numberType = document.querySelector('.numberType')
let submitReg = document.querySelector('.submitReg')
let notificationNum = document.querySelector('#notificationNum')
let notificationInn = document.querySelector('#notificationInn')

//Проверка номера телефона
let telNum = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

//Проверка ИНН на Жен через регулярное выражение
let innW = /1\d{13}/

// Проверка ИНН на Муж через регулярное выражение
let innM = /2\d{13}/

submitReg.addEventListener('click',()=>{
    // значение input ИНН
    let a = innType.value 
    //Значение input Номера
    let b = numberType.value
    
    //проверка на инн
    if(innW.test(a)){
        notificationInn.innerHTML = 'Жен'
    }else if(innM.test(a)){
        notificationInn.innerHTML = 'Муж'
    }else{
        notificationInn.innerHTML = 'Неверный ИНН'
        notificationInn.style.color = 'red'
    }

    //проверка на номер
    if(telNum.test(b)){
        notificationNum.innerHTML = 'Success'
        notificationNum.style.color = 'green'
    }else{
        notificationNum.innerHTML = 'Failed'
        notificationNum.style.color = 'red'
    }  
})