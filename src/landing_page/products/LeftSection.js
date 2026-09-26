import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (<>
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL} alt='image'></img>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>{productName}</h1>
                    <p className='fs-6 w-50 fw-normal'>{productDescription}</p>
                    <div className='mb-3'>
                        <div className='row'>
                        <div className='col-3'>
                            <a href={tryDemo} className='text-decoration-none fs-6'>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className='col-3'>
                        <a href={learnMore} className='text-decoration-none fs-6' >learn More <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <a href={googlePlay} > <img src="media/images/googlePlayBadge.svg" alt='googlePlay-image' className='w-25'></img>  </a>
                        <a href={appStore}> <img src="media/images/appstoreBadge.svg" alt='appStore-image' className='w-25'></img>  </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </>);
}

export default LeftSection;