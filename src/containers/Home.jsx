
import { DivCard2, DivPadre } from '../styles/Styles1';


import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {

    const navigate = useNavigate();

    const nextWindow = () => {
        navigate("/Screen1");
    }

    
    return (
        <DivPadre onClick={nextWindow}>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
                </DivCard2>
                <span>Buffalo</span>
        </DivPadre>
    )
}

export default Home

