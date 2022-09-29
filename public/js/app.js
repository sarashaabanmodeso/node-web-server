// client side js 
console.log('hi')
fetch('https://puzzle.mead.io/puzzle').then( (response)=>{
        response.json().then(data=>console.log(data))
    }
)

fetch('http://localhost:3000/weather?address=alexandria').then( (response)=>{
        response.json().then(data=>console.log(data))
    }
)