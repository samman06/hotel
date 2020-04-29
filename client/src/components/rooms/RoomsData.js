import React, {Component} from 'react';

class RoomsData extends Component {
    render() {
        const {rooms} = this.props;
        const divRoomS = {height: "80vh", overflow: "auto"};
        const roomsInfo = rooms.map(room => (
            <div key={room._id} className="col-5 row border mt-2 ml-3 p-2">
                <div className="col-12">
                    <p className="h3">Name : {room.name} </p>
                </div>
                <div className="col-12">
                    <p className="h3">Price : {room.price}</p>
                </div>
                <div className="col-12">
                    <p className="h3">City : {room.city}</p>
                </div>
                <div className="col-12">
                    <p className="h3">Date Start : {room.date_start.slice(0, 10)}</p>
                </div>
                <div className="col-12">
                    <p className="h3">Date End : {room.date_end.slice(0, 10)}</p>
                </div>
            </div>
        ));
        return (
            <div className="row" style={divRoomS}>
                {roomsInfo}
            </div>
        )
    }
}

export default RoomsData;
