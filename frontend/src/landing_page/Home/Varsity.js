import React from 'react';


function Varsity() {
    return (<>
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <img src='media/images/education.svg' alt='education-svg'></img>
                </div>

                <div className='col-7 p-5'>
                    <h1 className='fs-3'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className='text-decoration-none'><p class="fw-semibold fs-6 mx-auto">Varsity <i className="fa-solid fa-arrow-right"></i></p> </a>
                    <p className='pt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>
                    <a href='#' className='text-decoration-none'><p class="fw-semibold fs-6 mx-auto">Varsity <i className="fa-solid fa-arrow-right"></i></p> </a>
                </div>
            </div>
        </div>

    </>);
}

export default Varsity;
