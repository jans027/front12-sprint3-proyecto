import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addGender } from '../Redux/Actions/datosAction'
import { DivCard2, DivDatos, Gender, Section } from '../styles/Styles1'




const Choice = () => {


    const navigate = useNavigate();
    const { uid } = useSelector(state => state.login);

    const dispatch = useDispatch();
    const formik = useFormik({
        
        initialValues: {
            gender: ''
        },
        onSubmit: (gender) => {
            console.log(gender)
            dispatch(addGender(gender, uid))
            navigate('/Suscription');
        }
    });
    


    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />

                </DivCard2>
                <h4>Choose gender</h4>
                <Gender onSubmit={formik.handleSubmit}>
                    <button type='submit' value="male" name="male">
                        <FontAwesomeIcon icon={faMars} />
                    </button>
                    <span>Male</span>
                    <button type='submit' value='female' name="female" >
                        <FontAwesomeIcon icon={faVenus} />
                    </button>
                    <span>Female</span>
                </Gender>
            </DivDatos>
        </Section>
    )
}

export default Choice