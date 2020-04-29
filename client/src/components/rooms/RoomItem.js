import React, {Component} from 'react';

class RoomItem extends Component {
    render() {
        const {room} = this.props;
        return (
            <div className="col-5 row border mt-2 ml-3 p-2">
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
                    <p className="h3">Date Start : {room.date_start.slice(0,10)}</p>
                </div>
                <div className="col-12">
                    <p className="h3">Date End : {room.date_end.slice(0,10)}</p>
                </div>
            </div>
        );
    }
}

export default RoomItem;
