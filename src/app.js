const express=require('express');

const app=express()

app.get('/user',[(req,res,next)=>{
    console.log('rloute handler 1');
    // res.send('rout handler 1')
    next()
    
},
(req,res,next)=>{
console.log('route handler 2');
// res.send('rloute handler 2')
next()
}],

[(req,res,next)=>{
console.log('route handler 3');
// res.send('rloute handler 3');
next()
},
(req,res,next)=>{
console.log('route handler 4');
res.send('rloute handler 4')
}]

),




app.listen(4000,console.log('server running on 4000')
)