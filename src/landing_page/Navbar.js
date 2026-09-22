import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (<>
        <div className='container-fluid p-0'>
            <nav className="navbar navbar-expand-lg bg-white border-bottom w-100">

                <div className="container p-2">
                    <Link className="navbar-brand" to={"/"}><img src='media/images/logo.svg' style={{width : "30%"}} alt='logo'></img>  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/Signup"}> Signup </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/About"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/Products"}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/Pricing"}>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/Support"}>Support</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>);
}

export default Navbar;
