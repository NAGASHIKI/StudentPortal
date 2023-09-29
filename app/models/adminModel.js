const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


module.exports = mongoose.model('Admin', adminSchema);