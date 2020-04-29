import React, {Component} from 'react';
import RoomItem from "./RoomItem";

class RoomsData extends Component {
    sortByName = (name) => this.props.sortRooms(name);
    sortByPrice = (price) => this.props.sortRooms(price);
    allRooms = () => this.props.allRooms();
    render() {
        const {rooms} = this.props;
        const divRoomS = {height: "80vh", overflow: "auto"};
        const roomItem = rooms.map(room => <RoomItem key={room._id} room={room}/>);
        return (
            <div>
                <div className="mt-3 offset-6">
                    <button type="button" className="btn btn-success mr-4" onClick={() => this.allRooms()}>
                        All Rooms
                    </button>
                    <button type="button" className="btn btn-primary mr-4" onClick={() => this.sortByName("name")}>
                        Sort By Name
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => this.sortByPrice("price")}>
                        Sort By Price
                    </button>
                </div>
                <div className="row" style={divRoomS}>
                    {roomItem}
                </div>
            </div>
        )
    }
}

export default RoomsData;
