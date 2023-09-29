const mongoose = require('mongoose')
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    level: {
        type: String,
        required: false
    },
    Class: {
        type: String,
        required: false
    },
    dob: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Student', studentSchema)