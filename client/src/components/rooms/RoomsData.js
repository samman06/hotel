import React, {Component} from 'react';
import RoomItem from "./RoomItem";

class RoomsData extends Component {
    sortByName = (name) =>this.props.sortRooms(name);
    sortByPrice = (price) =>this.props.sortRooms(price);
    render() {
        const {rooms} = this.props;
        const roomItem = rooms.map(room => <RoomItem key={room._id} room={room}/>);
        return (
            <div>
                <div className="mt-3 offset-8">
                    <button type="button" className="btn btn-primary mr-2" onClick={()=>this.sortByName("city")}>Sort By Name</button>
                    <button type="button" className="btn btn-primary" onClick={()=>this.sortByPrice("price")}>Sort By Price</button>
                </div>
                <div className="row">
                    {roomItem}
                </div>
            </div>
        )
    }
}

export default RoomsData;
