const express = require('express')
// const { PrismaClient } = require('@prisma/client')
const serverless = require('serverless-http');

// const prisma = new PrismaClient()
const app = express()
app.get('/',async(req,res)=>{
    res.send('hello express')
})


app.get('/user',async(req,res)=>{
    // const user = await prisma.user.findMany()
    // console.log(user)
    // res.send(user)
    res.send('user  list')
})
app.post("/user/add",async(req,res)=>{
    // const {name,email} = req.body
    // const result = await prisma.user.create({
    //     data:{
    //         name:name,
    //         email:email
    //     }
    // })
    // res.send(result)
    res.send('添加用户')
})

app.listen('3003',()=>{
    console.log('running')
})

module.exports = app; // 直接导出 app（Vercel 自动处理）
module.exports.handler = serverless(app); // 备用方案
