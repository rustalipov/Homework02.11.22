let number = document.querySelector('#number')
let submit = document.querySelector('.submit')
let result = document.querySelector('.result')

//основной обрабочик событий при нажатии для вычисления

  submit.addEventListener('click', ()=>{
    //принимаем значение в переменной через value
    let numberValue = number.value
    
    //Функция умножение значения внутри фунцкции(замыкание)
    function myMultiplication(x) {
        return function() {
          return x * x;
        };
      };
    
    //присвоение перемоной созданой функции со значение с инпут
    let add = myMultiplication(numberValue);


    //вывод текста в спан
    result.innerText = add()
})