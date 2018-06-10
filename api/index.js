'use strict'

var mongoose = require('mongoose');
var app=require('./app');
var port=process.env.PORT || 3800

mongoose.connect('mongodb://localhost:27017/RedSocial',{useMongoClient: true}, (err, res)=>{
    if(err){
        throw err;
    }else{
        console.log('Conexión correcta a la base de datos');

        app.listen(port, function(){
            console.log("Servidor escuchando en http://localhost:"+port);
        })
    }
    
});