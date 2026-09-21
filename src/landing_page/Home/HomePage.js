import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Varsity from './Varsity';

function HomePage() {
    return (<>
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <Varsity />
        <OpenAccount />
        <Footer />

    </>);
}

export default HomePage;
