import React, { Component } from "react";
import { DivCard, Enlace1, Section, Textos1 } from "../styles/Styles1";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import portada1 from '../images/screen1.png'


export default class Screen1 extends Component {


    render() {
        return (
            <Section>
                <NavBar/>
                <DivCard>
                    <img src={portada1} alt="Svg" border="0" />
                </DivCard>
                    <Textos1>
                        <h1>Workout</h1>
                        <p>
                            start training with usand build <br />
                            muscle or lose weight
                        </p>
                    </Textos1>
                    <Enlace1><Link to={`/Screen2`}>Next</Link></Enlace1>
            </Section>
        );
    }
}