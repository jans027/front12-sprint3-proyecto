import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Div7, DivCuenta, Form2, Section } from '../styles/Styles1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faWeightHanging, faArrowsUpDown, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'



const Acount = () => {
    return (
        <Section>
            <DivCuenta>
                <div>
                    <Link to={`/Home2`}> <FontAwesomeIcon icon={faAngleLeft} />
                    </Link>
                </div>
                <div>
                    <h2>Account</h2>
                    <div></div>
                </div>
                <Div7>
                    <section> <FontAwesomeIcon icon={faWeightHanging} /> 28 </section>
                    <section> <FontAwesomeIcon icon={faArrowsUpDown} /> 178</section>
                    <section> <FontAwesomeIcon icon= {faArrowRotateLeft} /> 28 </section>
                </Div7>
                <Fragment>
                    <Form2 className="row" >
                        <div className="col-md-3">
                            <input
                                type="number"
                                placeholder="Ralph "
                                className="form-control"

                                name="height">

                            </input>

                            <input
                                type="number"
                                placeholder="Edwards"
                                className="form-control"

                                name="height">

                            </input>

                            <input
                                type="number"
                                placeholder="Example@gmail.com"
                                className="form-control"

                                name="height">

                            </input>
                        </div>
                        <button
                            type="submit"
                        >
                            Next
                        </button>
                    </Form2>
                </Fragment>
            </DivCuenta>
        </Section>
    )
}

export default Acount;