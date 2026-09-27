import React from 'react';

function PackageTemplate({imageURL, packageTitle, packageDescription}) {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col align-items-center justify-items-center text-center">
                    <img src={imageURL} alt="package-image" className="w-75 mx-3"/>
                    <h3>{packageTitle}</h3>
                    <p className="text-muted pt-2 p-5">{packageDescription}</p>
                </div>
            </div>
        </div>
    </>)
}

export default PackageTemplate;