const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telephone: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('User', userSchema);