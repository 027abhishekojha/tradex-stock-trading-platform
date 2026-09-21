import React from 'react';


function Varsity() {
    return (<>
        <div className='container'>
            <div className='row'>
                <div className='col-5 border border-primary'>
                    <img src='media/images/education.svg' alt='education-svg'></img>
                </div>

                <div className='col-7 border border-primary'>
                    <h1>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className='text-decoration-none'><p class="fw-semibold fs-5 mx-auto ps-5">Try Kite demo <i className="fa-solid fa-arrow-right"></i></p> </a>
                </div>
            </div>
        </div>

    </>);
}

export default Varsity;
