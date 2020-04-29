import React, {Component} from 'react';
import {getAllRooms, searchByDate} from "../../service/RoomService"
import SearchDate from "./SearchDate"
import SideBar from "./SideBar"

import RoomsData from "./RoomsData"

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            roomsForDisplay: [],
            errors: {}
        };
    }

    async componentDidMount() {
        let rooms = await getAllRooms();
        this.setState({rooms, roomsForDisplay: rooms})
    }

    searchByDate = async (from, to) => {
        console.log(from, to);
        const roomsForDisplay = await searchByDate(from, to);
        this.setState({rooms: roomsForDisplay, roomsForDisplay})
    };
    sortRooms = async (type) => {
        let {roomsForDisplay} = this.state;
        if (type === "price") roomsForDisplay = roomsForDisplay.sort((a, b) => a.price - b.price);
        if (type === "city") roomsForDisplay = roomsForDisplay.sort((a, b) => {
            let cityA = a.city.toLowerCase(),
                cityB = b.city.toLowerCase();
            if (cityA < cityB) return -1;
            if (cityA > cityB) return 1;
            return 0
        });
        this.setState({roomsForDisplay})
    };
    filterCity = (city) => {
        let {rooms} = this.state;
        let roomsForDisplay = rooms.filter(room => room.city.toLowerCase().includes(city));
        this.setState({roomsForDisplay})
    };
    filterName = (name) => {
        let {rooms} = this.state;
        let roomsForDisplay = rooms.filter(room => room.name.toLowerCase().includes(name));
        this.setState({roomsForDisplay})
    };
    filterPrice = (price) => {
        let {rooms} = this.state;
        let roomsForDisplay = rooms.filter(room => (room.price >= (price - 50)) && (room.price <= (price + 50)));
        this.setState({roomsForDisplay})
    };
    searchByAll = () => {
    };

    render() {
        let {roomsForDisplay} = this.state;
        let roomsData;
        if (roomsForDisplay.length === 0) {
            roomsData = <h3 className="m-5">there is no table</h3>
        } else {
            roomsData = <RoomsData sortRooms={this.sortRooms} rooms={roomsForDisplay}/>
        }
        return (
            <div>
                <SearchDate searchByDate={this.searchByDate}/>
                <div className="row border mt-2">
                    <div className="col-2 border m-2">
                        <SideBar filterCity={this.filterCity} filterName={this.filterName}
                                 filterPrice={this.filterPrice} searchByAll={this.searchByAll}/>
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
