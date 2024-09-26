const express=require('express');

const app=express()

const {adminAuth,userAuth}=require('./middlewares/auth')

app.use('/admin',adminAuth)

app.get('/admin/getUsers',(req,res)=>{
    console.log('user data fetched');
    res.send('user data fetched!!')
})

app.get('/admin/deleteUser', (req,res)=>{
    console.log('user data deleted');
    res.send('user data deleted!!')
})

app.post('/user/login',(req,res)=>{
    res.send('user loggined')
})

app.get('/user/getData',userAuth,(req,res)=>{
    res.send('data fetched successfully')
})

app.listen(4000,console.log('server running on 4000')
)