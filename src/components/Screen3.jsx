import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DivCard, Enlace1, Section, Textos1 } from '../styles/Styles1'
import NavBar from './NavBar'
import portada3 from "../images/screen3.png"


export default class Screen3 extends Component {
    render() {
        return (
            <Section>
                <NavBar/>
                <DivCard>
                <img src={portada3} alt="Svg-2" border="0"/>
                </DivCard>
                <Textos1>
                    <h1>Сharacter</h1>
                    <p>
                    Cultivate in you an iron character <br/>
                        for training
                    </p>
                </Textos1>
                <Enlace1><Link to={`/Login`}>Next</Link></Enlace1>
            </Section>
        )
    }
}