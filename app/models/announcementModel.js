const mongoose = require('mongoose');
const { Schema } = mongoose;

const announcementSchema = new Schema({
    selectedImages: [Object],
    postedContent: {
        type: String,
        required: true
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'Teacher, Admin' }]
});


module.exports = mongoose.model('Announcement', announcementSchema);