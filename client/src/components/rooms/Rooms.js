import React, {Component} from 'react';
import {getAllRooms, searchByDate} from "../../service/RoomService"
import DateSearch from "./DateSearch"

import RoomsData from "./RoomsData"

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            errors: {}
        };
    }

    async componentDidMount() {
        let rooms = await getAllRooms();
        this.setState({rooms})
    }

    searchByDate = async (from, to) => {
        console.log(from, to);
        const rooms = await searchByDate(from, to)
        this.setState({rooms})
    };
    sortRooms = async (type) => {
        let {rooms} = this.state;
        if (type === "price") rooms = rooms.sort((a, b) => a.price - b.price);
        if (type === "city") rooms = rooms.sort((a, b) => {
            let cityA = a.city.toLowerCase(),
                cityB = b.city.toLowerCase();
            if (cityA < cityB) return -1;
            if (cityA > cityB) return 1;
            return 0
        });
        this.setState({rooms})
    };

    render() {
        let {rooms} = this.state;
        let roomsData;
        if (rooms.length === 0) {
            roomsData = (
                <div>
                    <h3 className="m-5">
                        there is no table
                    </h3>
                </div>
            )
        } else {
            roomsData = <RoomsData sortRooms={this.sortRooms} rooms={rooms}/>
        }
        return (
            <div>
                <DateSearch searchByDate={this.searchByDate}/>
                <div className="row">
                    <div className="col-2">
                        <p>sidebar</p>
                    </div>
                    <div className="col-9">
                        {roomsData}
                    </div>
                </div>
            </div>
        );
    }
}

export default Rooms;
