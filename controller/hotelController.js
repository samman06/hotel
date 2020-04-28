const roomModels = require('../models/room');
const validation = require("../validation/hotel");


class Hotel {
    async getAllRooms(req, res) {
        try {
            const rooms = await roomModels.find();
            res.json(rooms)
        } catch (e) {
            console.log(e);
        }
    };

    async getRoomsByCity(req, res) {
        const {city} = req.params;
        const {errors, isValid} = validation.validateCity(city);
        if (!isValid) return res.json({errors});
        try {
            const rooms = await roomModels.find({city});
            return res.json(rooms);
        } catch (e) {
            console.log(e);
        }
    };

    async getRoomsByHotel(req, res) {
        const {name} = req.params;
        const {errors, isValid} = validation.validateName(name);
        if (!isValid) return res.json({errors});
        try {
            const rooms = await roomModels.find({name});
            return res.json(rooms);
        } catch (e) {
            console.log(e);
        }
    };

    async getRoomsByDate(req, res) {
        const {start, end} = req.params;
        const {errors, isValid} = validation.validateDate(start, end);
        if (!isValid) return res.json({errors});
        try {
            const rooms = await roomModels.find({date_start: {$gte: start}, date_end: {$lte: end}});
            return res.json(rooms);
        } catch (e) {
            console.log(e);
        }
    };

    async getRoomsByPrice(req, res) {
        const {min, max} = req.params;
        const {errors, isValid} = validation.validatePrice(min, max);
        if (!isValid) return res.json({errors});
        try {
            const rooms = await roomModels.find({
                $and: [{price: {$gte: min}}, {price: {$lte: max}}]
            });
            res.json(rooms);
        } catch (e) {
            console.log(e);
        }
    };

    async getRoomsByMultiConditions(req, res) {
        const {city, min, max} = req.params;

        const {errors, isValid} = validation.validateMulti(city, min, max);
        if (!isValid) return res.json({errors});
        try {
            const rooms = await roomModels.find({
                city, $and: [{price: {$gte: min}}, {price: {$lte: max}}]
            });
            res.json(rooms);
        } catch (e) {
            console.log(e);
        }
    };

}

const hotelController = new Hotel();
module.exports = hotelController;
