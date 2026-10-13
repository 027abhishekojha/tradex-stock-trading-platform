
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBCard,
    MDBCardBody
}
    from 'mdb-react-ui-kit';

function Login() {

    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputValue;
    console.log(`Email : ${email} password : ${password}`);
    

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className='container' style={{ marginTop: "8rem" }}>
            <MDBContainer className="p-3 d-flex flex-column w-50">

                <MDBCard className='mb-5'>
                    <MDBCardBody className='m-5'>
                        <div className='d-flex justify-content-center mb-2'>
                            <img
                                src="media/images/logo.svg"
                                className="img-fluid rounded-pill w-75 p-5"
                                alt="Townhouses and Skyscrapers"
                            />
                        </div>

                         <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                        <form>
                            <div className="d-flex align-items-center mb-4">
                                <MDBIcon fas icon="envelope" size="lg" className="me-3" style={{ color: "rgba(57, 125, 208, 1)" }} />
                                <MDBInput
                                    id="email"
                                    name='email'
                                    type="email"
                                    placeholder='Enter your email here..'
                                    wrapperClass="mb-0 flex-grow-1"
                                    value={email}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' style={{ color: "rgba(57, 125, 208, 1)" }} />
                                <MDBInput
                                    id="password"
                                    name='password'
                                    type="password"
                                    placeholder='Enter your password'
                                    wrapperClass="mb-0 flex-grow-1"
                                    value={password}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <div className="d-flex justify-content-center mb-4">
                                <MDBBtn className='w-50' color='primary' style={{ borderRadius: "2px", backgroundColor: "rgba(57, 125, 208, 1)", }}>Login</MDBBtn>
                            </div>
                        </form>


                        <div className="text-center">
                            <p>Not a member? <Link to="/Signup">Register</Link></p>
                            <p>or sign up with:</p>

                            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default Login;