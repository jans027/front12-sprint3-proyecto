import React from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button12, Div1, Form1 } from '../styles/Styles1';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { addWeight } from '../Redux/Actions/datosAction';
// import { addWeight } from '../Redux/Actions/datosAction';

// import { getDatabase, ref, child, push, update } from "firebase/database";



const Weight = () => {

    const navigate = useNavigate();
    const { uid } = useSelector(state => state.login);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            weight: ''
        },
        onSubmit: (weight) => {
            console.log(weight)
            dispatch(addWeight(weight, uid))
            navigate('/Age');
        }
    });




    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />

                </DivCard2>
                <h4>Enter your weight</h4>
                <>
                    <Form1  onSubmit={formik.handleSubmit}>
                        <Div1 className="col-md-3">
                            <input
                                type="number"
                                placeholder="78"
                                className="form-control"
                                onChange={formik.handleChange}
                                name="weight"></input><span>kg</span>
                        </Div1>
                        <Button12
                            type="submit">
                            Next
                        </Button12>
                    </Form1>
                </>
            </DivDatos>
        </Section>
    )
}

export default Weight