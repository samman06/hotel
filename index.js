const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const keys = require('./configs/keys');
const mongoose = require('mongoose');
const RoomModel = require('./models/room');
const hotelRouter = require('./routes/roomRoute');

//start connection to database
const uri = keys.mongoURI;
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
}, err => {
    if (!err) console.log("started mongodb connection");
    else console.log(err);

});

// room router
app.use(cors());
app.use('/', hotelRouter);


const insertDummyTables = async () => {
    let rooms = await RoomModel.find();
    if (rooms.length !== 0) return;
    let {data} = await axios.get(keys.API_KEY);
    await data.map(room => {
        const newRoom = new RoomModel(room);
        newRoom.save()
    });
};
insertDummyTables().then();


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("server running on port: " + PORT);
});

module.exports = app
