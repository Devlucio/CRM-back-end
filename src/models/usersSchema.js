const mongoose = require('mongoose');

//Templeide que cadastra os usuários
const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//Exportar as informações do usuáro
module.exports = mongoose.model('user', userSchema);
