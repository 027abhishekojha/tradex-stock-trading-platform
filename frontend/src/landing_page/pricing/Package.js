import React from 'react';
import PackageTemplate from "./PackageTemplate";

function Package() {
    return (<>
        <div className="d-flex align-items-center justify-items-center" style={{width : "80%", justifySelf : "center"}}>
        <PackageTemplate imageURL="media/images/pricing-eq.svg" packageTitle="Free equity delivery" packageDescription="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."/>
        <PackageTemplate imageURL="media/images/other-trades.svg" packageTitle="Intraday and F&O trades" packageDescription="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."/>
        <PackageTemplate imageURL="media/images/pricing-eq.svg" packageTitle="Free direct MF" packageDescription="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."/>
        </div>
    </>)
}

export default Package;