const axios = require('axios')

// Get All rooms
export const getAllRooms = async () => {
    try {
        const {data} = await axios.get(`http://127.0.0.1:4000/`);
        return data
    } catch (e) {
        console.log(e);
    }
};

// Get All Room in a range of date
export const searchByDate = async (from, to) => {
    from = from || "1";
    to = to || "1";
    try {
        const {data} = await axios.get(`http://127.0.0.1:4000/date/${from}/${to}`);
        return data
    } catch (e) {
        console.log(e);
    }
};

