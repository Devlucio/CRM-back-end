 //Importar modulo ou pacote
 const express = require("express");
 const router = express.Router();

 //Importar modulo local
const controllers = require ("../controllers/userControllers");
//const controllers = require ("../controllers/clientControllers");

        //Definir a rota e o verbo
    //Visualizar todos usuários
 router.get("/all", controllers.getALL);
    //Criar usuário
 router.post("/create", controllers.createUser);
    //Adicinar Cliente
 //router.post("/createClient", controllers.createUser);
    //Excluir um usuário
router.delete("/delete/:id", controllers.deleteUserById);
    //Atualizar email do usuário
router.patch("/updateEmail/:id", controllers.updateUserById);


 module.exports = router