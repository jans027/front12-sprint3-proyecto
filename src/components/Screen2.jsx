import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DivCard, Enlace1, Section,Textos1 } from '../styles/Styles1'
import NavBar from './NavBar'





export default class Screen2 extends Component {
    render() {
        return (
            <Section>
                <NavBar/>
                <DivCard>
                    <img src="https://i.ibb.co/sQn637k/Img-Bg-1.png" alt="Svg-1" border="0"/>
                </DivCard>
                <Textos1>
                    <h1>Discipline</h1>
                    <p>
                    Develop discipline in yourself <br/>
                        train every day 
                    </p>
                </Textos1>
                <Enlace1><Link to={`/Screen3`}>Next</Link></Enlace1>
            </Section>
        )
    }
}