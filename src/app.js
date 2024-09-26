const express=require('express');

const app=express()

app.get('/user',(req,res)=>{
    const data={name:'Hamdan',age:30}
    res.send(data)
}),

app.post('/user',(req,res)=>{
    console.log('user added successfully');
    res.send('user added')
    
})

app.patch('/user',(req,res)=>{
    console.log('user updated partially');
    res.send('updated partially')
})

app.put('/user',(req,res)=>{
    console.log('user updated');
    res.send('updated the user')
})

app.delete('/user',(req,res)=>{
    console.log('user deleted');
    res.send('deleted user')
})

app.use('/test',(req,res)=>{
    res.send('test from the server')
})



app.listen(4000,console.log('server running on 4000')
)