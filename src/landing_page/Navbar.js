import React from 'react';


function Navbar() {
    return (<>
        <div className='container-fluid p-0'>
            <nav className="navbar navbar-expand-lg bg-white border-bottom w-100">

                <div className="container p-2">
                    <a className="navbar-brand" href="#"><img src='media/images/logo.svg' style={{width : "30%"}} alt='logo'></img>  </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Support</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>);
}

export default Navbar;
