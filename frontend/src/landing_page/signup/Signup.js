import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Signup() {
    const [inputValue, setInputValue] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { username, email, password } = inputValue
    console.log(`username : " ${username} \n email : ${email} \n password : ${password}`);


    const handleOnChange = (event) => {
        const { name, value } = event.target         // name is event_name and value means what user has typed into that input field
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    return (
        <div className='container pt-5'>

            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <form>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <label htmlFor='username'></label>
                                        
                                        <MDBInput id='username'
                                            name='username'
                                            placeholder='Enter username'
                                            type='text'
                                            value={username}
                                            onChange={handleOnChange}
                                            className='w-200' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <label htmlFor='email'></label>
                                        <MDBInput id='email'
                                            type='email'
                                            name='email'
                                            placeholder='Enter yoour email'
                                            value={email}
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <label htmlFor="password"></label>
                                        <MDBIcon fas icon="key me-3" size='lg' />
                                        <MDBInput id='password'
                                            name='password'
                                            placeholder='Enter your password'
                                            type='password'
                                            value={password}
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className='mb-4'>
                                        <span>
                                            Already have an account? <Link to="/login">Login</Link>
                                        </span>
                                    </div>

                                    <MDBBtn className='me-1' size='lg' color='primary' style={{ width: "8em", borderRadius: "2px", backgroundColor: "rgba(57, 125, 208, 1)" }}>Register</MDBBtn>
                                </form>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    );
}

export default Signup;