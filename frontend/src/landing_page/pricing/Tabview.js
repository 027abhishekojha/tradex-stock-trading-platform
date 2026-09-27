import React from "react";
function Tabview(){
    return (<>
        <div className="container">

            <ul className="nav nav-underline g-0" id="myTab" role="tablist" style={{gap : "0"}}>
                <li className="nav-item p-0" role="presentation">
                    <button
                        className="nav-link active px-0 fs-4 text-muted"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                        style={{width : "10rem"}}

                    >
                        Equity
                    </button>
                </li>

                <li className="nav-item p-0" role="presentation">
                    <button
                        className="nav-link px-0 fs-4 text-muted"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                        style={{width : "10rem"}}
                    >
                        Currency
                    </button>
                </li>

                <li className="nav-item p-0" role="presentation">
                    <button
                        className="nav-link px-0 fs-4 text-muted"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                        style={{width : "10rem"}}
                    >
                        Commodity
                    </button>
                </li>
            </ul>


            <div className="tab-content my-4" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                     tabIndex="0">
                    {/*<h2>Equity Tab</h2>*/}
                    <div className="table-responsive">
                        <table className="table align-middle border border-tertiary  table-borderless table-striped">
                            <thead>
                            <tr>
                                <th scope="col" style={{width : "10px"}} className="border-bottom"></th>
                                <th scope="col" style={{width : "10px", height : "50px"}} className="border-bottom fw-semibold text-muted">Equity delivery</th>
                                <th scope="col" style={{width : "30px"}} className="border-bottom fw-semibold text-muted ">Equity intraday</th>
                                <th scope="col" style={{width : "30px"}} className="border-bottom fw-semibold text-muted ">F&O - Futures</th>
                                <th scope="col" style={{width : "30px"}} className="border-bottom fw-semibold text-muted ">F&O - Options</th>
                            </tr>
                            </thead>
                            <tbody className="p-5">
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Brokerage</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">STT/CTT</th>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.05% on the sell side</td>
                                <td><ul>
                                    <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                                    <li>0.15% on sell side (on premium)</li>
                                </ul></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Transaction charges</th>
                                <td><ul className="list-unstyled">
                                    <li>NSE: 0.00307%</li>
                                    <li>BSE: 0.00375%</li>
                                </ul></td>

                                <td><ul className="list-unstyled">
                                    <li>NSE: 0.00307%%</li>
                                    <li>BSE: 0.00375%</li>
                                </ul></td>

                                <td><ul className="list-unstyled">
                                    <li>NSE: 0.00183%</li>
                                    <li>BSE: 0</li>
                                </ul></td>

                                <td><ul className="list-unstyled">
                                    <li>NSE: 0.03553% (on premium)</li>
                                    <li>BSE: 0.0325% (on premium)</li>
                                </ul></td>

                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">GST</th>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>

                            <tr>
                                <th scope="row" className="text-muted fw-normal">SEBI charges</th>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>

                            </tr>

                            <tr>
                                <th scope="row" className="text-muted fw-normal">Stamp charges</th>
                                <td>0.015% or ₹1500 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                     tabIndex="0">
                    {/*<h2>Currency Tab</h2>*/}
                    <div className="table-responsive">
                        <table className="table align-middle  border border-tertiary  table-borderless">
                            <thead>
                            <tr>
                                <th scope="col" style={{width : "30px"}} className="border-bottom"></th>
                                <th scope="col" style={{width : "40px", height : "50px"}} className="border-bottom fw-semibold text-muted">Equity delivery</th>
                                <th scope="col" style={{width : "40px"}} className="border-bottom fw-semibold text-muted ">Equity intraday</th>
                                <th scope="col" style={{width : "40px"}} className="border-bottom fw-semibold text-muted ">F&O - Futures</th>
                                <th scope="col" style={{width : "40px"}} className="border-bottom fw-semibold text-muted ">F&O - Options</th>
                            </tr>
                            </thead>
                            <tbody className="p-5">
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Brokerage</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">STT/CTT</th>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.05% on the sell side</td>
                                <td><ul>
                                    <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                                    <li>0.15% on sell side (on premium)</li>
                                </ul></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Transaction charges</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">GST</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>

                            <tr>
                                <th scope="row" className="text-muted fw-normal">SEBI charges</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>

                            <tr>
                                <th scope="row" className="text-muted fw-normal">Stamp charges</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                     tabIndex="0">
                    {/*<h2>Commodity Tab</h2>*/}
                    <div className="table-responsive">
                        <table className="table align-middle  border border-tertiary  table-borderless">
                            <thead>
                            <tr>
                                <th scope="col" style={{width : "30px"}} className="border-bottom"></th>
                                <th scope="col" style={{width : "40px", height : "50px"}} className="border-bottom fw-semibold text-muted">Equity delivery</th>
                                <th scope="col" style={{width : "40px"}} className="border-bottom fw-semibold text-muted ">Equity intraday</th>
                                <th scope="col" style={{width : "40px"}} className="border-bottom fw-semibold text-muted ">F&O - Futures</th>
                                <th scope="col" style={{width : "40px"}} className="border-bottom fw-semibold text-muted ">F&O - Options</th>
                            </tr>
                            </thead>
                            <tbody className="p-5">
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Brokerage</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">STT/CTT</th>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.05% on the sell side</td>
                                <td><ul>
                                    <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                                    <li>0.15% on sell side (on premium)</li>
                                </ul></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">Transaction charges</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-muted fw-normal">GST</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>

                            <tr>
                                <th scope="row" className="text-muted fw-normal">SEBI charges</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>

                            <tr>
                                <th scope="row" className="text-muted fw-normal">Stamp charges</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    </>)
}

export default Tabview;