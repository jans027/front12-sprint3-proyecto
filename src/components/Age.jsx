import { useFormik } from 'formik';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addAge } from '../Redux/Actions/datosAction';
import { Div1, Form1 } from '../styles/Styles1';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'






const Age = () => {

    const navigate = useNavigate();
    const { uid } = useSelector(state => state.login);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            age: ''
        },
        onSubmit: (age) => {
            console.log(age)
            dispatch(addAge(age, uid))
            navigate('/Choice');
        }
    });



    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
                    
                </DivCard2>
                <h4>Enter your age</h4>
                <Fragment>
            <Form1 onSubmit={formik.handleSubmit}>
                <Div1 className="col-md-3">
                    <input
                        type="number"
                        placeholder="28"
                        className="form-control"
                        onChange={formik.handleChange}
                        name="age"></input>
                </Div1>
                <button
                    type="submit"
                    >
                    Next
                </button>
            </Form1>
        </Fragment>
            </DivDatos>
        </Section>
    )
}

export default Age