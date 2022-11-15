let som = document.querySelector("#som")
let dollar = document.querySelector("#dollar")


function request(){
    const request = new XMLHttpRequest()
    request.open('GET','data.json')
    request.setRequestHeader('Content-Type','application/json')
    request.send()
    
    request.addEventListener('load',()=>{
        let file = JSON.parse(request.response)
        let kurs = file.usd
        console.log(kurs*som.value);
        
        som.oninput = ()=>{
            dollar.value = kurs*som.value
        }
        dollar.oninput = ()=>{
            som.value = dollar.value / kurs
        }   
    
    })
}
request()