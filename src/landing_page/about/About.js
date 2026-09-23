import React from 'react';
import Hero from './Hero';

function About() {
    return (<>
        <div className='container '> 
            <div className='row'>
            <div className='col mt-5 d-flex flex-column align-items-center'>
                {/* <img src='media/images/nithin-kamath.jpg' alt='nitin-image' style={{height : "250px" , width : "250px" , borderRadius : "50%"}}></img> */}
                <img src='media/images/nithin-kamath.jpg'
                    alt='nitin-image'
                    className='rounded-circle h-50'
                ></img>
                <h1 className='fs-5 pb-2 pt-2'>Nithin Kamath</h1>
                <p className='fs-6'>Founder, CEO</p>
            </div>
            <div className='col'>
                <h1 className='fs-2 pb-5'>People</h1>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on Homepage / TradingQnA / Twitter</p>
            </div>
        </div>
        </div>
    </>);
}

export default About;