import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
   
}) {
    return (<>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>{productName}</h1>
                    <p className='fs-6 w-50 fw-normal'>{productDescription}</p>
                    <div className='mb-3'>
                            <a href={learnMore} className='text-decoration-none fs-6'>Learn more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className='col-6 p-3'>
                    <img src={imageURL} alt='image'></img>
                </div>
            </div>
        </div>
    </>);
}

export default RightSection;