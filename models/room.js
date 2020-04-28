const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    price: {
        type: Number
    },
    date_start: {
        type: String
    },
    date_end: {
        type: String
    },
});

const Room = mongoose.model('rooms', roomSchema);
module.exports = Room;
