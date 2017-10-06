const
    express = require('express')
    app = express()
    logger = require('morgan')
    bodyParser = require('body-parser')
    mongoose = require('mongoose')
    appartmentRouter = require('./routes/apartment.js')
    
    PORT = 3000

app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, (err)=>{
    console.log(err || `👍 on port ${PORT}`)
})

mongoose.connect('mongodb://localhost/apartment', (err)=>{
    console.log(err || `database is 👍`)
})

app.get('/', (req, res)=>{
    res.send("homepage")
})

app.use('/apartments', apartmentsRouter)