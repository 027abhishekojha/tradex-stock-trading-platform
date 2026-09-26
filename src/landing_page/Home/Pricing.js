import React from 'react';


function Pricing() {
    return (<>
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-4'>
                    <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div>
                    <a href='#' className='text-decoration-none'><p class="fw-semibold fs-6">See pricing <i className="fa-solid fa-arrow-right"></i></p> </a>
                </div>
                </div>
                <div className='col-8'>
                    <div className='row '>
                        {/* First Image */}
                        <div className='col-auto d-flex align-items-center p-5'>
                            {/* 1. Explicitly set dimensions on the image to keep it compact */}
                            <img
                                className='img-fluid'
                                src='media/images/pricing-eq.svg'
                                alt='pricing-eq'
                                style={{ width: '120px', height: 'auto' }}
                            />

                            {/* 2. Text styles: small font, line-height adjustment, and margin removal */}
                            <p 
                                className='mb-0 text-muted'
                                style={{
                                    fontSize: '0.75rem',
                                    lineHeight: '1.2',
                                    maxWidth: '90px',
                                    marginLeft: '-20px',
                                    marginTop: '22px'
                                }}
                            >
                                Free account opening
                            </p>
                        </div>

                        {/* Second Image */}
                         <div className='col-auto d-flex align-items-center'>
                            {/* 1. Explicitly set dimensions on the image to keep it compact */}
                            <img
                                className='img-fluid '
                                src='media/images/pricing-eq.svg'
                                alt='pricing-eq'
                                style={{ width: '120px', height: 'auto' }}
                            />

                            {/* 2. Text styles: small font, line-height adjustment, and margin removal */}
                            <p 
                                className='mb-0 text-muted'
                                style={{
                                    fontSize: '0.75rem',
                                    lineHeight: '1.2',
                                    maxWidth: '150px',
                                    marginLeft: '-20px',
                                    marginTop: '22px'
                                }}
                            >
                                Free equity delivery and direct mutual funds
                            </p>
                        </div>


                         {/* Third Image */}
                         <div className='col-auto d-flex align-items-center'>
                            {/* 1. Explicitly set dimensions on the image to keep it compact */}
                            <img
                                className='img-fluid '
                                src='media/images/other-trades.svg'
                                alt='pricing-eq'
                                style={{ width: '120px', height: 'auto' }}
                            />

                            {/* 2. Text styles: small font, line-height adjustment, and margin removal */}
                            <p 
                                className='mb-0 text-muted'
                                style={{
                                    fontSize: '0.75rem',
                                    lineHeight: '1.2',
                                    maxWidth: '90px',
                                    marginLeft: '-4px',
                                      marginTop: '12px'
                                }}
                            >
                                Intraday and F&O
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>





        </div>
    </>);
}

export default Pricing;
