const express = require('express');
const bcrypt = require('bcrypt')
const port = 8002;
const host = 'localhost';
let hashedPass = '';

const app = express()

// Set up middleware to parse request bodies
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/compare',(req,res)=>{
    res.render('compare.ejs')
})

app.post('/hashPass', async (req,res)=>{
    hashedPass = await bcrypt.hash(req.body.pass,10)
    console.log(req.body.pass+'\n'+hashedPass)
    res.send('Hashed the pass')
})

app.post('/comparePass', async (req,res)=>{
    let isEqual = await bcrypt.compare(req.body.pass,hashedPass)
    if(isEqual){
        res.send('Equal')
        console.log(req.body.pass+'\n'+hashedPass)
    }
    else{
        res.send('Not Equal')
    }
})

app.listen(port,host, ()=>{
    console.log(`Server is Listening on http://${host}:${port}/`);
})