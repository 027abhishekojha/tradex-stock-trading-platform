import React from "react";

function ChargesExplained(){
    return (
        <>
            <div className="container mt-5">
                <h1 className="fs-4">Charges explained</h1>
                <div className="row">
                    <div className="col-6 mt-5">
                        <h1 className="fs-5">Securities/Commodities transaction tax</h1>
                        <p className="fs-6 text-muted">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                        <p className="fs-6 text-muted">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                        <h1 className="fs-5">Transaction/Turnover Charges</h1>
                        <p className="fs-6 text-muted">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <p className="fs-6 text-muted">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                        <p className="fs-6 text-muted">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                        <p className="fs-6 text-muted">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                        <p className="fs-6 text-muted">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                        <h1 className="fs-5">Call & trade</h1>
                        <p className="fs-6 text-muted">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                        <h1 className="fs-5">Stamp charges</h1>
                        <p className="fs-6 text-muted">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                        <h1 className="fs-5">NRI brokerage charges</h1>
                        <ul>
                            <li><p className="fs-6 text-muted">For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</p>
                            </li> <li><p className="fs-6 text-muted">For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower)</p></li>
                            <li><p className="fs-6 text-muted">₹500 + GST as yearly account maintenance charges (AMC) charges.</p></li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <h1 className="fs-5">GST</h1>
                        <p className="fs-6 text-muted">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                        <h1 className="fs-5">SEBI Charges</h1>
                        <p className="fs-6 text-muted">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>


                        <h1 className="fs-5">DP (Depository participant) charges</h1>
                        <p className="fs-6 text-muted">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-3 mb-5 text-muted">
                <h5 className="fs-6">Disclaimer</h5>
                <p className="mt-2" style={{fontSize : "0.85rem"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </>
    )
}

export  default  ChargesExplained;