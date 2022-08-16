import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
// import { UseAuth } from '../context/AuthContext';
import { DivNav2 } from '../styles/Styles1';
import NavSettings from './NavSettings';



<FontAwesomeIcon icon="fa-solid " />




const NavigationBar2 = () => {




    const logout = () => {
        const auth = getAuth();
        signOut(auth)
        
            .then(() => {
                // console.log(auth)
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    };


    return (
        <DivNav2>
            <NavSettings />
            <FontAwesomeIcon onClick={logout} icon={faRightFromBracket} />
        </DivNav2>
    )
}

export default NavigationBar2;