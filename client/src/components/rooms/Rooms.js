import React, {Component} from 'react';
import {getAllRooms, searchByDate} from "../../service/RoomService"
import SearchDate from "./SearchDate"
import SideBar from "./SideBar"

import RoomsData from "./RoomsData"

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [], roomsForDisplay: [], errors: {},
            name: "", city: "", price: 0, from: "", to: ""
        };
    }

    async componentDidMount() {
        let rooms = await getAllRooms();
        this.setState({rooms, roomsForDisplay: rooms})
    }

    onChange = (target) => {
        let {name, value} = target;
        if (name === "price") {
            let valuePrice = 0;
            if (value !== "") {
                if (value < 0) value = 0;
                valuePrice = parseInt(value);
                value = parseInt(value);
            }
            this.filterPrice(valuePrice);
        }
        if (name === "name") this.filterName(value);
        if (name === "city") this.filterCity(value);
        this.setState({[name]: value});
    };
    searchByDate = async () => {
        const {from, to} = this.state;
        const roomsForDisplay = await searchByDate(from, to);
        if (roomsForDisplay.errors) {
            this.setState({errors: roomsForDisplay.errors})
        } else {
            this.setState({roomsForDisplay, errors: {}})
        }
    };
    sortRooms = async (type) => {
        let {roomsForDisplay} = this.state;
        if (type === "price") roomsForDisplay = roomsForDisplay.sort((a, b) => a.price - b.price);
        if (type === "name") roomsForDisplay = roomsForDisplay.sort((a, b) => {
            let cityA = a.name.toLowerCase(),
                cityB = b.name.toLowerCase();
            if (cityA < cityB) return -1;
            if (cityA > cityB) return 1;
            return 0
        });
        this.setState({roomsForDisplay, errors: {}})
    };
    filterCity = (city) => {
        let {rooms} = this.state;
        let roomsForDisplay = rooms.filter(room => room.city.toLowerCase().includes(city));
        this.setState({roomsForDisplay, name: ""})
    };
    filterName = (name) => {
        let {rooms} = this.state;
        let roomsForDisplay = rooms.filter(room => room.name.toLowerCase().includes(name));
        this.setState({roomsForDisplay, errors: {}, city: "", price: 0})
    };
    filterPrice = (price) => {
        let {rooms, roomsForDisplay} = this.state;
        if (price === 0) {
            roomsForDisplay = rooms;
        } else {
            roomsForDisplay = rooms.filter(room => (room.price >= (price - 50)) && (room.price <= (price + 50)));
        }
        this.setState({roomsForDisplay, errors: {}, name: ""})
    };
    searchByAll = () => {
        const {rooms, city, price} = this.state;
        console.log(city, typeof price);
        if (price === 0) {
            this.filterCity(city)
        } else {
            let roomsForDisplay = rooms.filter(room =>
                (((room.price >= (price - 50)) && (room.price <= (price + 50))) || room.city.toLowerCase().includes(city))
            );
            this.setState({roomsForDisplay, errors: {}})
        }
    };
    allRooms = async () => {
        let rooms = await getAllRooms();
        this.setState({rooms, roomsForDisplay: rooms})
    };

    render() {
        let {roomsForDisplay, errors, name, city, price, from, to} = this.state;
        let roomsData;
        if (roomsForDisplay.length === 0) {
            roomsData = <h3 className="m-5">Rooms are loading or there is no Room</h3>
        } else {
            roomsData = <RoomsData sortRooms={this.sortRooms} allRooms={this.allRooms} rooms={roomsForDisplay}/>
        }
        return (
            <div>
                <SearchDate from={from} to={to}
                            onChange={this.onChange}
                            searchByDate={this.searchByDate}
                            errors={errors}/>
                <div className="row mt-2 ml-0 mr-0">
                    <div className="col-2 m-2">
                        <SideBar name={name} city={city} price={price}
                                 onChange={this.onChange}
                                 filterCity={this.filterCity}
                                 filterName={this.filterName}
                                 filterPrice={this.filterPrice}
                                 searchByAll={this.searchByAll}/>
                    </div>
                    <div className="col-9 border m-2">
                        {roomsData}
                    </div>
                </div>
            </div>
        );
    }
}

export default Rooms;
