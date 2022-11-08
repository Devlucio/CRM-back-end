//Importar modulo ou pacote
const app = require ('./src/apps')

//Porta do servidor
const PORT = process.env.PORT

console.log("EXPRESS instanciado e exportado do arquivo app.js.")

//Função para servidor rodar (app.listen(PORT))
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))