
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

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

    const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

    const handleError = (msg) => toast.error(msg, { position: "bottom-left" });

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:3002/Login",
                inputValue, { withCredentials: true });

            const { success, message } = data;

            if (success) {
                handleSuccess(message || "User Logged In Successfully!!!!");
                setInputValue({ email: "", password: "" });
                setTimeout(() => {
                    navigate("/NewHome");
                }, 1000)
            } else {
                handleError(message || "Username password wrong");
            }
        } catch (error) {
            console.error("Error is : ", error);
        }
    }

    const dummyToast = () => {
        toast("This is dummy toast");
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

                        <form onSubmit={handleOnSubmit}>
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
                                <MDBBtn type='submit' className='w-50' color='primary' noRipple style={{ borderRadius: "2px", backgroundColor: "rgba(57, 125, 208, 1)", }}>Login</MDBBtn>
                                {/* <MDBBtn type='submit' className='w-50' color='primary' onClick={dummyToast} style={{ borderRadius: "2px", backgroundColor: "rgba(57, 125, 208, 1)", }}>Toast</MDBBtn> */}
                            </div>
                        </form>
                        <ToastContainer />


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