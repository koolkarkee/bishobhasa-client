const express = require('express')
const path = require('path')

const app = express()

//statically serve
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function(req, res, next){
    res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(process.env.PORT || 3002, function(){
    console.log('server listening ... >> ', process.env.PORT)
})