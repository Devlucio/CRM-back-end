//Importar modulo ou pacote
const app = require ('./src/app')

//Porta do servidor
const PORT = process.env.PORT

//Função para servidor rodar (app.listen(PORT))
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))