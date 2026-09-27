import React from "react";



function Accordion(){
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-8 ">
                    <div className="container my-5">
                        <div className="accordion" id="accordionExample" style={{
                            '--bs-accordion-btn-focus-box-shadow': 'none',
                            '--bs-accordion-active-bg': 'transparent',
                            '--bs-accordion-active-color': 'inherit'
                        }}>
                            <div className="accordion-item mb-3 rounded-0">
                                <h2 className="accordion-header">
                                    <div className="row p-0 m-0">
                                        <div className="col-1 align-content-center text-center" style={{backgroundColor : "rgba(247, 251, 254, 1)"}}>
                                                <i className="fa fa-circle-plus " style={{fontSize :'25px',  color : "rgba(57, 125, 208, 1)" }}></i>
                                        </div>
                                        <div className="col-11 m-0 p-0">
                                            <button className="accordion-button rounded-0" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                Account Opening
                                            </button>
                                        </div>
                                    </div>


                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show border-bottom"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul style={{color : "rgba(57, 125, 208, 1)"}}>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Residental individual</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Minor</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Non Resident Indian (NRI)</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Company, Partnership, HUF and LLP</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Glossary</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-3 rounded-0">
                                <h2 className="accordion-header">
                                    <div className="row p-0 m-0">
                                        <div className="col-1 align-content-center text-center" style={{backgroundColor : "rgba(247, 251, 254, 1)"}}>
                                            <i className="fa fa-circle-plus " style={{fontSize :'25px', color : "rgba(57, 125, 208, 1)" }}></i>
                                        </div>
                                        <div className="col-11 m-0 p-0">
                                            <button className="accordion-button rounded-0" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="true"
                                                    aria-controls="collapseTwo">
                                                Account Opening
                                            </button>
                                        </div>
                                    </div>


                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show border-bottom"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul style={{color : "rgba(57, 125, 208, 1)"}}>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Residental individual</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Minor</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Non Resident Indian (NRI)</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Company, Partnership, HUF and LLP</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Glossary</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-3 rounded-0">
                                <h2 className="accordion-header">
                                    <div className="row p-0 m-0">
                                        <div className="col-1 align-content-center text-center" style={{backgroundColor : "rgba(247, 251, 254, 1)"}}>
                                            <i className="fa fa-circle-plus " style={{fontSize :'25px', color : "rgba(57, 125, 208, 1)" }}></i>
                                        </div>
                                        <div className="col-11 m-0 p-0">
                                            <button className="accordion-button rounded-0" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="true"
                                                    aria-controls="collapseThree">
                                                Account Opening
                                            </button>
                                        </div>
                                    </div>


                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse show border-bottom"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul style={{color : "rgba(57, 125, 208, 1)"}}>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Residental individual</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Minor</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Non Resident Indian (NRI)</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Company, Partnership, HUF and LLP</a></li>
                                            <li className="py-2 ms-4"><a href="" className="text-decoration-none" style={{color : "rgba(57, 125, 208, 1)"}}>Glossary</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4 ">
                    <div className="container my-5 ms-2">
                        <div className="border-start border-5 ps-2 py-2 px-2 support-border-orange text-dark"
                             style={{backgroundColor: "rgba(255, 165, 0, 0.2)", borderLeftColor: "orange"}}>
                            <ul className="">
                                <li><a href="#">Current Takeovers and Delisting – September 2026 </a></li>
                                <li><a href="#">Surveillance measure on scrips - September 2026 </a></li>
                            </ul>
                        </div>

                        <div className="mt-5">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th className="text-muted" scope="col">Quick links</th>
                                </tr>
                                </thead>
                                <tbody className="p-5">
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">1. Track account
                                        opening </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">2. Track segment
                                        activation </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">3. Intraday
                                        margins </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">4. Kite user
                                        manual </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">5. Learn how to create
                                        a ticket </a></td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>


            </div>
        </div>


    </>)
}

export default Accordion;