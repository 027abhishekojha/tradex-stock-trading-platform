import React from 'react';


function Stats() {
    return (<>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-4'>
                    <h1 className='mb-5 fs-2'>Trust with confidence</h1>

                    <div className='mb-5'>
                        <h4 className='fs-4'>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>

                    <div className='mb-5'>
                        <h4>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='#'>Our philosophies.</a></p>
                    </div>

                    <div className='mb-5'>
                        <h4>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>

                    <div className='mb-5'>
                        <h4>Do better with money</h4>
                        <p className='text-muted'>With initiatives like <a href='#'>Nudge</a> and <a href='#'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>


                <div className='col-8'>
                    <div className='container w-75 mx-auto'>
                        <img className="img-fluid" src='media/images/ecosystem.png' />
                    </div>

                    <div className='row pl-3 pt-4'>
                        <div className='col-6'>
                        <a href='#' className='text-decoration-none text-end'><p class="fw-semibold fs-5 ps-5">Explore our products <i className="fa-solid fa-arrow-right"></i></p> </a> 
                    </div>

                    <div className='col-6'>
                        <a href='#' className='text-decoration-none'><p class="fw-semibold fs-5 mx-auto ps-5">Try Kite demo <i className="fa-solid fa-arrow-right"></i></p> </a> 
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </>);
}

export default Stats;
