import React from 'react';

function Awards() {
    let showLatestPost = true;

    return (<>
        {
            showLatestPost ?
                <div className='container'>
                    <div className='row mt-5 mb-5'>
                        <div className='col-6'>
                            <img src='media/images/largestBroker.svg' />
                        </div>
                        <div className='col-6'>
                            <h1 className='mb-3'>Largest stock broker in India</h1>
                            <p className='mb-5'>2+ million Zerodha clinets Contribute to over 15% aof all rtetial order volumes in India daily by trading and investing in</p>

                            <div className='row'>
                                <div className='col' style={{ height: "100px" }}>
                                    <ul className='d-flex flex-column justify-content-between h-100'>
                                        <li>Futures and options</li>
                                        <li>Commodity derivatives</li>
                                        <li>Currency derivatives</li>
                                    </ul>
                                </div>

                                <div className='col' style={{ height: "100px" }}>
                                    <ul className='d-flex flex-column justify-content-between h-100'>
                                        <li>Stocks & IPOs</li>
                                        <li>Direct mutual funds</li>
                                        <li>Bonds and Government Policies</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='mt-5 p-2'>
                                <img src='media/images/pressLogos.png' />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-4'>
                            <h1 className='mb-5'>Trust with confidence</h1>

                            <div className='mb-5'>
                                <h4>Customer-first always</h4>
                                <p>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                            </div>

                            <div className='mb-5'>
                                <h4>No spam or gimmicks</h4>
                                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='#'>Our philosophies.</a></p>
                            </div>

                            <div className='mb-5'>
                                <h4>The Zerodha universe</h4>
                                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                            </div>

                            <div className='mb-5'>
                                <h4>Do better with money</h4>
                                <p>With initiatives like <a href='#'>Nudge</a> and <a href='#'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                            </div>
                        </div>

                        <div className='col-8'>
                            <img className="img-fluid" src='media/images/ecosystem.png' />
                        </div>
                    </div>
                </div>
        }

        {/* Promotion Banner */}
        <div className='w-100 mx-auto text-bg-light p-3 rounded'>
            <div className='row d-flex align-items-center justify-content-center'>

                {/* Left Logo */}
                <div className='col-auto'>
                    <img src='media/images/kc-logo-landing.svg' alt='kc logo' />
                </div>

                {/* Middle Text Content */}
                <div className='col-5'>
                    <p style={{fontSize : "15px"}} className='m-0'>
                        Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. Explore <span><i className="fa-solid fa-arrow-right"></i></span>
                    </p>
                </div>

                {/* Right Banner Image */}
                <div className='col-auto'>
                    <img src='media/images/kc-banner-image.svg' alt='kc-banner-image' />
                </div>

            </div>
        </div>

    </>);
}

export default Awards;
