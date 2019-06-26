const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routers = require('./route/products')


//setting
//app.set('json spaces',4)

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))


// routes links 

app.use('/products', routers)



app.listen(3000,()=>{
        console.log('Running..')
})