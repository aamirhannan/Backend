require('dotenv').config()

const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
const port = process.env.PORT||3000

const data=[
    {
        id:1,
        title:'A joke',
        content:'This is a joke'

    },
    {
        id:2,
        title:'A joke',
        content:'This is a joke'
    },
    {
        id:3,
        title:'A joke',
        content:'This is a joke'
    },
    {
        id:4,
        title:'A joke',
        content:'This is a joke'
    }
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/jokes',(req,res)=>{
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})