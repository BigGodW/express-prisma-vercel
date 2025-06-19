const express = require('express')
const { PrismaClient } = require('@prisma/client')
const serverless = require('serverless-http');

 const prisma = new PrismaClient()
const app = express()
app.get('/',async(req,res)=>{
    const time = new Date().toLocaleString()
    console.log(`请求时间: ${time}`)
    res.send('hello express'+` ${time}`)
})


app.get('/user',async(req,res)=>{
    const user = await prisma.user.findMany()
    console.log(user)
    res.send(user)
})
app.post("/user/add",async(req,res)=>{
    const {name,email} = req.body
    const result = await prisma.user.create({
        data:{
            name:name,
            email:email
        }
    })
    res.send(result)
})

// app.listen('3003',()=>{
//     console.log('running')
// })

module.exports = app; // 直接导出 app（Vercel 自动处理）
module.exports.handler = serverless(app); // 备用方案
