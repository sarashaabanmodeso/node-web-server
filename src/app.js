const express = require('express')
const geocode = require('./geocode')
const forecast = require ('./forecast')
const path = require('path')

const dirName =  __dirname ;
const filePath = path.join(dirName , '../public')

const port = process.env.PORT || 3000
const app = express(); 
app.set('view engine' , 'hbs')
app.use(express.static(filePath) )

app.get('', (req,res)=>{
    res.render('index',{ title : "Index" , name :"Sara"})
})
console.log("")
app.get('/Weather', (req, res)=>{
    
    // console.log(req.query.address)
let address = req.query.address ;
if(address){
    geocode(address,(err, { latitude ,longitude}= {})=>{

        if(err){
            res.send({error :err})
        }else{
        console.log(latitude+ " "+ longitude); 
        forecast(latitude, longitude ,( err, {temperature , feelslike} )=>{
            if(err){
                res.send({error :err})
            }else{
                res.send({ temperature , feelslike})
            // console.log('temprature equal '+temperature +' but feels like '+ feelslike )
            }
        })
        }
    });
  
   }else{
    res.send({error : "address not provided "})
   }
})
// app.get('*', (req, res)=>{
//     res.send({"res" : 'Not Found'})
// })

app.listen(port,() =>{
    console.log("working on port"+ port)
})