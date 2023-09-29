const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    courses: {
        type: String,
        required: true,
        unique: true
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


module.exports = mongoose.model('Teacher', teacherSchema);