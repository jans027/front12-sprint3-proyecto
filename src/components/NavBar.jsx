import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faSignal, faBatteryFull } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '../styles/Styles1';
import MyTime from './MyTime';


class NavBar extends Component {
    render() {
        return (
            <Navigation>
                <p>
                    <MyTime />
                </p>
                <div>
                    <FontAwesomeIcon icon={faWifi} />
                    <FontAwesomeIcon icon={faSignal} />
                    <FontAwesomeIcon icon={faBatteryFull} />
                </div>
            </Navigation>
        );
    }
}

export default NavBar;