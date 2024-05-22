const express = require('express')
const dbConnect = require('./db/dbconfig')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true}))

app.get('/interview/:id', (req, res) => {
  let id = req.params.id;
  res.json({"message":`Data Received for ${id}`});
})


const PORT = 5000
app.get('/',(req,res)=>{
    res.send('<h1>Hello REST</h1>')
})

app.get('/interview',(req,res)=>{
    const data = [
        {id:1,company:'xyz'},
        {id:2,company:'abc'},
        {id:3,company:'pqr'}
    ]
    res.json(data)
})

app.post('/interview',(req,res)=>{
    const data=req.body
    console.log(data)
    res.json('Interview added successfully!')
})

app.put('/interview/:id',(req,res)=>{
    const data = req.body
    const {id} = req.params
    console.log(id);
    console.log(data);
    res.status(200).json({"message":`Updated Data for id ${id}`})
})

app.delete("/interview/:id",(req,res)=>{
    res.status(200).json({"message":"Deleted the interview record"})
});

dbConnect()

app.listen(PORT,()=>console.log(`Server started at localhost ${PORT}`))