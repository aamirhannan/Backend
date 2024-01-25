require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('Welcome to twitter')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('Got to <href>youtube.com</href>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})