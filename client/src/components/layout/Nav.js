import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className='container-fluid navIBack '>
                <nav className="mb-1 navIBack navbar navbar-expand-lg navbar-dark orange lighten-1">
                    <Link to={'/'} className="navbar-brand">
                        Landing
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/rooms/'} className="nav-link">
                                    Rooms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
