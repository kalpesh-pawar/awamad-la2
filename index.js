const express = require('express')
const app = express()
const port = 5000

app.get('/', fun,morefun)

function morefun(req,res,next){
    res.redirect('/home')
}

function fun(req,res,next){
    next()
    res.send('fun page')
    
}
app.get('/freeroute',function(req,res){
    res.send('extra route')
})

app.get('/home',(req,res)=>{
    res.send('came from fun page to home ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})