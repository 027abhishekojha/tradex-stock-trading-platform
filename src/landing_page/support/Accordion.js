import React from "react";



function Accordion(){
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-8 ">
                    <div className="container my-5">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header">

                                    <div className="row m-0 p-0 align-items-center" style={{ backgroundColor : "rgb(223, 235, 240)"}}>
                                        <div className="col" style={{width:'0.5rem'}}>
                                            <i className="fa fa-plus-circle" style={{color : "grey"}}></i>
                                        </div>
                                        <div className="col-11 m-0 p-0">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne">
                                                Account Opening
                                            </button>
                                        </div>

                                    </div>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the
                                        collapse plugin adds the appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default variables.
                                        It’s also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until
                                        the collapse plugin adds the appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default variables.
                                        It’s also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the
                                        collapse plugin adds the appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default variables.
                                        It’s also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4 ">
                    <div className="container my-5 ms-2">
                        <div className="border-start border-5 ps-2 py-2 px-2 support-border-orange text-dark" style={{backgroundColor : "rgba(255, 165, 0, 0.2)", borderLeftColor: "orange"}} >
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
                                    <td scope="row"><a className="text-decoration-none" href="#">1. Track account opening </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">2. Track segment activation </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">3. Intraday margins </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">4. Kite user manual </a></td>
                                </tr>
                                <tr>
                                    <td scope="row"><a className="text-decoration-none" href="#">5. Learn how to create a ticket </a></td>
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