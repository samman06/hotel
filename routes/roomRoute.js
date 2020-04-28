const express = require('express');
const hotelController = require("../controller/hotelController");
const hotelRouter = express.Router();

//get all tables
hotelRouter.get('/', async (req, res) => await hotelController.getAllRooms(req, res));
hotelRouter.get('/sort/:sort', async (req, res) => await hotelController.sortRooms(req, res));
hotelRouter.get('/city/:city', async (req, res) => await hotelController.getRoomsByCity(req, res));
hotelRouter.get('/hotel/:name', async (req, res) => await hotelController.getRoomsByHotel(req, res));
hotelRouter.get('/price/:min/:max', async (req, res) => await hotelController.getRoomsByPrice(req, res));
hotelRouter.get('/date/:start/:end', async (req, res) => await hotelController.getRoomsByDate(req, res));
hotelRouter.get('/room/:city/:min/:max', async (req, res) => await hotelController.getRoomsByMultiConditions(req, res));

module.exports = hotelRouter;
