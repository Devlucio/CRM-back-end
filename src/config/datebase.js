//Importar modulo ou pacote
//*const express = require("express");
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

//instaciar pacote (deixar disponível)
//*const datebase = express();

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado :)")
    } catch (error) {
        console.error("Erro: ", error.message)
    }
}
   
    

//*const message = console.log("Olá, estou aqui (datebase)")

//exportar modulo
module.exports= {
    connect
}