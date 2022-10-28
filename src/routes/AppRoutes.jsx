import { ChakraProvider } from '@chakra-ui/react';
import '../Global.css'
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import { LogOut } from '../components/LogOut';
// import {ButtonNavBar} from '../components/ButtonNavBar';

import { Login } from '../components/LogIn';
import { SingUp } from '../components/SingUp';

import Home from '../containers/Home';
import { AuthProvider } from '../context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import Height from '../components/Height';
import Weight from '../components/Weight';
import Age from '../components/Age';
import Suscription from '../components/Suscription';
import { Home2 } from '../components/Home2';
import Choice from '../components/Choice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { PrivateRouter } from './PrivateRouter';
import Acount from '../components/Acount';






const AppRoutes = () => {

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged( auth, (user) => {
            if (user?.uid) {
                // console.log(user);
                // Posibilidad de recuperar la info luego de que se recargue la web
                setAuth(true)
            } else {
                setAuth(false)
            }
        } )
    }, [])


        return (
            <AuthProvider>
                <ChakraProvider>
                    <BrowserRouter>
                        <Routes>
                            {/* Rutas Privadas */}
                            <Route path="/Home2" element={<PrivateRouter isAutentication={auth}> <Home2 /> </PrivateRouter>} />
                            <Route path="/Acount" element={<PrivateRouter isAutentication={auth}> <Acount/> </PrivateRouter>} />
                            <Route path="/Choice" element={<PrivateRouter isAutentication={auth}> <Choice /> </PrivateRouter>} />
                            <Route path="/Suscription" element={<PrivateRouter isAutentication={auth}> <Suscription /> </PrivateRouter>} />
                            <Route path="/Age" element={<PrivateRouter isAutentication={auth}> <Age /> </PrivateRouter>} />
                            <Route path="/Weight" element={<PrivateRouter isAutentication={auth}> <Weight /> </PrivateRouter>} /> 
                            <Route path="/Height" element={<PrivateRouter isAutentication={auth}> <Height /> </PrivateRouter>} />

                            {/* Rutas publicas */}
                            <Route path="/Screen3" element={<Screen3 />} />
                            <Route path="/Screen2" element={<Screen2 />} />
                            <Route path="/Screen1" element={<Screen1 />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/SingUp" element={<SingUp />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </BrowserRouter>
                </ChakraProvider>
            </AuthProvider>

        );
}


export default AppRoutes;