import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Nav from "./components/layout/Nav";
import Home from "./components/layout/Home";
import Rooms from "./components/rooms/Rooms"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    {/*<Route path='/' exact component={Nav}/>*/}
                    <Route path='/' exact component={Home}/>

                    <Route path='/rooms' exact component={Nav}/>
                    <Route path='/rooms' exact component={Rooms}/>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
