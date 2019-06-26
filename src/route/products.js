const express = require('express')
const router = express.Router()
 const {products} = require('../db.json')


//const db = require('../db.json')


console.log(products)

router.route('/')

.get((req, res)=>{
    res.json({"productos" : products})
})



.post((req, res)=>{})




module.exports = router;