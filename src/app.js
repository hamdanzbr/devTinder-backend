const express=require('express');

const app=express()

app.use('/get',(req,res)=>{
    res.send('hello from the server')
})

app.listen(4000,console.log('server running on 4000')
)