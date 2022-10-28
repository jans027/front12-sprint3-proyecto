import React, { Component } from 'react';
import { Navigation } from '../styles/Styles1';
import MyTime from './MyTime';


class NavBar extends Component {
    render() {
        return (
            <Navigation>
                <p>
                    <MyTime />
                </p>
            </Navigation>
        );
    }
}

export default NavBar;