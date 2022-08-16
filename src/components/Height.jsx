import React from 'react';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'
import { useNavigate } from 'react-router';
import { Div1, Form1 } from '../styles/Styles1';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import {  addHeight } from '../Redux/Actions/datosAction';




const Height = () => {


    const navigate = useNavigate();
    const { uid } = useSelector(state => state.login);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            height: ''
        },
        onSubmit: (data) => {
            // console.log(data)
            dispatch(addHeight(data))
            navigate('/Weight');
        }
    });



    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />

                </DivCard2>
                <h4>Enter your height</h4>
                <>
                    <Form1 onSubmit={formik.handleSubmit} className="row" >
                        <Div1 className="col-md-3">
                            <input
                                type="number"
                                placeholder="178"
                                className="form-control"
                                onChange={formik.handleChange}
                                name="height"></input><span>cm</span>
                        </Div1>
                        <button
                            type="submit"
                        >
                            Next
                        </button>
                    </Form1>
                </>
            </DivDatos>
        </Section>
    )
}

export default Height
