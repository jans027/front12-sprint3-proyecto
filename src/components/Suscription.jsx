import React, { useState } from 'react';
// import { useNavigate } from 'react-router'
import { Boton, DivCard2, DivDatos, Section, Selection } from '../styles/Styles1'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';





const Suscription = () => {

    const navigate = useNavigate();

    const [suscription, setSuscription] = useState( )

    const mostrarClick = (event) => {
        console.log(event.target.value)
        setSuscription(event.target.value)
        if (event.target.value === "montly") {
            console.log("soy montly")
        } else {
            console.log("soy early")
        }
    }

    const enviarDatos = (event) =>{
        event.preventDefault()
        console.log(event, suscription)
        navigate('/Home2')
    }


    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <div>
                        <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
                    </div>
                </DivCard2>
                <span>
                    <h4>Choose a subscription</h4>
                    <h5>We believe that our application will help you achieve your goals</h5>
                </span>
                <Selection onSubmit={enviarDatos}>

                    <div>
                    <Button 
                    variant="outline-info"
                    value={'montly'}
                        onClick={mostrarClick}
                    >
                        
                        <span>Montly</span>
                        <span>8.99 usd</span>
                    </Button>{' '}

                    <Button 
                    variant="outline-info"
                    value={'early'}
                        onClick={mostrarClick}
                    >
                        
                        <span>Early</span>
                        <span>99.45 usd</span>
                    </Button>{' '}
                    </div>

                    <Boton type='submit'>
                        Next
                    </Boton>
                </Selection>

            </DivDatos>
        </Section>
    )
}
export default Suscription


