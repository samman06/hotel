import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-2 text-center">
                                <h1 className="mb-4 font-weight-bold">Welcome To our Site</h1>
                                <p className="lead font-weight-bold">
                                    {' '}
                                    Enjoy With Our Rooms
                                </p>
                                <hr/>
                                <Link to="/rooms" className="btn btn-lg btn-dark">
                                    Rooms
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
