    //Acessar o arquivos de usuário
const users = require("../models/user.json");

//Ver todos os usuários
const getALL = (req, res) => {
    //Gerenciar o que acontece na req e na res
    res.status(200).send(users);
}


            //Adicionar usuário
const createUser = (req, res) => {    
    //Acessar informação que vem do body da requisição
    const client = req.body.client;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber

if(!client || !email || !phoneNumber) {
    return res.status(404).send({
        "message": "Informações incompletas", 
        "statusCode": 404
    });
}

//Construir um objeto com as informações do novo usuário
const newUser = {
    "id": Math.random().toString(32).substring(2, 6),
    "addedAt": new Date(),
    "client": client,
    "email": email,
    "phoneNumber": phoneNumber,
}

//Adicionar o novo usuário à lista já existente
users.push(newUser);

//Envio a resposta de usuário cadastrado com sucesso
res.status(201).send({
    "message": "Novo usuário adicionado com sucesso", 
    newUser
});   
}

                //Deletar um usuário
const deleteUserById = (req, res) => {
    const requestedId = req.params.id;
    const filteredUser = users.find(user => user.id == requestedId);

    const index = users.indexOf(filteredUser);

    users.splice(index, 1);

    res.status(200).json([{
        "mensagem": "Usuário deletado com sucesso",
        users
    }]);
};
                //Atualizar o contato do usuário
const updateUserById = (req, res) => {
    // pegar os dados da requisição
    const requestedId = req.params.id;
    const newEmail = req.body.email;
    const newPhoneNumber = req.body.phoneNumber;

    // achar o item da lista que tem o mesmo id
    const filteredUser = users.find(user => user.id == requestedId);

    // o título do post filtrado seja igual ao título que vem da requisição
    filteredUser.email = newEmail;
    filteredUser.phoneNumber = newPhoneNumber;

    res.status(200).send({
        "mensagem": "Contato atualizado com sucesso",
        filteredUser
    });
};


//Exportar variavel
module.exports = {
    getALL,
    createUser,    
    deleteUserById,
    updateUserById
}