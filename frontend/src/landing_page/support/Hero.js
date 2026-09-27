import React from "react";

function SupportHero(){
    return (<>
        <div className="w-100 mx-auto bg-light">
            <div className="container my-5">
            <div className="row">
                <div className="col-3 justify-content-start mt-5">
                    <h1 className="p-0 m-0 fs-2 fw-semibold text-start"> Support Page</h1>
                </div>
                <div className="col-9">
                    <div className="d-flex justify-content-end mt-5">
                        <button className="btn btn-primary btn-lg fw-semibold p-2" style={{width: "8em" , borderRadius : "2px", backgroundColor : "rgba(57, 125, 208, 1)"}}
                                type="button">My tickets
                        </button>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="input-group">
                        <span className="input-group-text" style={{backgroundColor : "white" , borderRadius : "2px", height : "3rem"}}  id="visible-addon"><i className='fa fa-search'></i></span>
                        <input type="text" className="form-control" placeholder="Eg: How do I open my account, How do i activate F&O..." aria-label="Username"
                               aria-describedby="visible-addon" style={{borderLeft : "none"}}/>
                        <input type="text" className="form-control d-none" placeholder="Hidden input"
                               aria-label="Hidden input" aria-describedby="visible-addon"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>)
}

export default SupportHero;