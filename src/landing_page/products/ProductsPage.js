import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import PartnerPlatform from './PartnerPlatform';
import Universe from './Universe';


function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection imageURL={"media/images/products-kite.png"}
                productName={"Kite"}
                productDescription={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
                tryDemo={"https://kite-demo.zerodha.com/dashboard"}
                learnMore={"https://zerodha.com/products/kite"}
                googlePlay={"https://play.google.com/store/apps/details?id=com.zerodha.kite3"}
                appStore={"https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"} />
            <RightSection
                imageURL="media/images/products-console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="https://zerodha.com/products/console"
            />

            <LeftSection imageURL={"media/images/products-coin.png"}
                productName={"Coin"}
                productDescription={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
                coin={"https://coin.zerodha.com/"}
                googlePlay={"https://play.google.com/store/apps/details?id=com.zerodha.kite3"}
                appStore={"https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"} />


            <RightSection
                imageURL="media/images/landing.svg"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="https://zerodha.com/products/api/"
            />

            <LeftSection imageURL={"media/images/varsity-products.svg"}
                productName={"Varsity mobile"}
                productDescription={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
                coin={"https://coin.zerodha.com/"}
                googlePlay={"https://play.google.com/store/apps/details?id=com.zerodha.kite3"}
                appStore={"https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"} />



            <div className='container text-center mb-5'>
                <h1 className='fs-5 fw-normal'>Want to know more about our technology stack? Check out the <a href='#' className='text-decoration-none'>  Zerodha.tech </a> blog.</h1>
            </div>


            <Universe />

            <div className="container my-5">
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <PartnerPlatform
                            imageURL="media/images/zerodhafundhouse.png"
                            description="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
                        />
                    </div>
                    <div className="col-md-4">
                        <PartnerPlatform
                            imageURL="media/images/sensibullLogo.svg"
                            description="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
                        />
                    </div>
                    <div className="col-md-4">
                        <PartnerPlatform
                            imageURL="media/images/tijori.svg"
                            description="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
                        />
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <PartnerPlatform
                            imageURL="media/images/streak-logo.png"
                            description="Systematic trading platform that allows you to create and backtest strategies without coding."
                        />
                    </div>
                    <div className="col-md-4">
                        <PartnerPlatform
                            imageURL="media/images/smallcase-logo.png"
                            description="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
                        />
                    </div>
                    <div className="col-md-4">
                        <PartnerPlatform
                            imageURL="media/images/ditto-logo.png"
                            description="Personalized advice on life and health insurance. No spam and no mis-selling Sign up for free"
                        />
                    </div>

                </div>

                <div className="d-flex justify-content-center mt-5 mb-5">
                    <button className="btn btn-primary btn-lg fw-semibold p-2" style={{width : "12em"}} type="button">Sign up for free</button>
                </div>
            </div>



        </>
    );
}

export default ProductsPage;