import React from 'react';

function Brokerage() {
    return ( <>
        <div className="container">
            <div className="text-center mt-2 mb-5">
                <h5> <a href="#" className="text-decoration-none">Calculate your costs upfront </a> using our brokerage calculator</h5>
            </div>

            <div>
                <h4>Charges for account opening</h4>
                <div className="table-responsive">
                    <table className="table align-middle border border-tertiary  table-borderless table-striped">
                        <thead>
                        <tr>
                            <th scope="col-6" className="border-bottom fw-semibold text-muted">Type of account</th>
                            <th scope="col-6" className="border-bottom fw-semibold text-muted ">Charges</th>
                        </tr>
                        </thead>
                        <tbody className="p-5">
                        <tr>
                            <th scope="row" className="text-muted fw-normal">Individual account</th>
                            <td><span className="badge text-bg-success" style={{width : "10%", borderRadius : "2px"}}>FREE</span></td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-muted fw-normal">Minor account</th>
                            <td><span className="badge text-bg-success" style={{width : "10%", borderRadius : "2px"}}>FREE</span></td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-muted fw-normal">NRI account</th>
                            <td>₹500</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-muted fw-normal">HUF account</th>
                            <td><span className="badge text-bg-success" style={{width : "10%", borderRadius : "2px"}}>FREE</span> (online) / ₹500 (offline)</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-muted fw-normal">Partnership, LLP, and Corporate accounts (offline only)</th>
                            <td>₹500</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>


        </div>

        <div className="container mt-5 mb-5">
            <div>
                <h4>Demat AMC (Annual Maintenance Charge)</h4>

                <div style={{width : "200px"}} className="border-start border-primary border-4 ps-3 py-2 bg-light text-secondary">
                    Free for first year*
                </div>

                <div>
                    <h6 className="fw-normal mt-4 mb-2" style={{fontSize : "0.85em"}}>From second year onwards, for BSDA accounts:</h6>
                    <div className="table-responsive">
                        <table className="table align-middle border border-tertiary  table-borderless table-striped">
                            <thead>
                            <tr>
                                <th scope="col-6" className="border-bottom fw-semibold text-muted">
                                    Value of holdings</th>
                                <th scope="col-6" className="border-bottom fw-semibold text-muted ">AMC</th>
                            </tr>
                            </thead>
                            <tbody className="p-5">
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Up to ₹4 lakh</th>
                                <td><span className="badge text-bg-success" style={{width : "10%", borderRadius : "2px"}}>FREE</span></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">₹4 lakh – ₹10 lakh</th>
                                <td>₹100 per year + 18% GST, charged quarterly</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">₹300 per year + 18% GST, charged quarterly</th>
                                <td>₹500</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6 className="fw-normal mt-4" style={{fontSize : "0.85em"}}>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</h6>
                        <h6 className="fw-normal mt-4" style={{fontSize : "0.85em"}}>To learn more about BSDA, click here. To learn more about AMC, click here.</h6>
                        <h6 className="fw-normal mt-4" style={{fontSize : "0.85em"}}>*Resident individual accounts only.</h6>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <div>
                <h4>Charges for optional value added services</h4>
                <div>
                    <div className="table-responsive">
                        <table className="table align-middle border border-tertiary  table-borderless table-striped">
                            <thead>
                            <tr>
                                <th scope="col-6" className="border-bottom fw-semibold text-muted">Service</th>
                                <th scope="col-6" className="border-bottom fw-semibold text-muted ">Billing Frequency</th>
                                <th scope="col-6" className="border-bottom fw-semibold text-muted ">Charges</th>
                            </tr>
                            </thead>
                            <tbody className="p-5">
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Tickertape</th>
                                <td>Monthly / Quarterly / Annual</td>
                                <td>Free: 0 | Pro: 249/699/2399</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Smallcase</th>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Kite Connect</th>
                                <td>Monthly</td>
                                <td>Connect: 500 | Personal: Free</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>




    </>);
}

export default Brokerage;