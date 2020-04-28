const axios = require('axios')

// Get All rooms
export const getAllRooms = () => {
    return axios.get(`http://127.0.0.1:4000/`)
        .then(({data}) => data)
        .catch(err => err);
};

// Get All Room in a range of date
export const searchByDate = (from,to) => {
    return axios.get(`http://127.0.0.1:4000/date/${from}/${to}`)
        .then(({data}) => data)
        .catch(err => err);
};

