//Importar modulo ou pacote
const express = require("express");
const cors = require("cors");
require('dotenv-safe').config();

//instaciar pacote (deixar disponível)
const app = express();
app.use(cors());

//body parse (quebra do body)
app.use(express.json());

//Importar modulo local
const userRoutes = require("./routes/userRoutes")

//Definir rota principal
app.use("/users", userRoutes);

//Importar modulo local
const datebase = require("./config/datebase");
console.log(datebase);

//exportar modulo
module.exports = app;