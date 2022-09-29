// client side js 
console.log('hi')
fetch('https://puzzle.mead.io/puzzle').then( (response)=>{
        response.json().then(data=>console.log(data))
    }
)

fetch('/weather?address=alexandria').then( (response)=>{
        response.json().then(data=>console.log(data))
    }
)