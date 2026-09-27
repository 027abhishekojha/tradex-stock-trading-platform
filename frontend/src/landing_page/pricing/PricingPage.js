import React from 'react';
import Hero from "./Hero";
import Package from "./Package";
import Tabview from "./Tabview";
import Brokerage from "./Brokerage";
import ChargesExplained from "./ChargesExplained";
function PricingPage() {
    return ( <>
        <Hero />
        <Package />
        <Tabview />
        <Brokerage />
        <ChargesExplained />
    </> );
}

export default PricingPage;