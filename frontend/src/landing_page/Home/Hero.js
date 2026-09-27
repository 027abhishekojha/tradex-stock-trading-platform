import React from 'react';


function Hero() {
    return (<>
        <div className='container'>
            <div className='row'>
                <img  className="mb-5" src='media/images/homeHero.png' alt='Hero Image'/>
                <h1 className='mt-5 text-center'>Invest in everything</h1>
                <p className='mt-2 text-center'>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <div className='d-flex justify-content-center'>
                        <button type="button" class="btn btn-primary btn-lg">Sign up for free</button>
                    </div>
            </div>

        </div>
    </>);
}

export default Hero;



