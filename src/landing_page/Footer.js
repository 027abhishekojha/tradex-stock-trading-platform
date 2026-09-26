import React from 'react';

function Footer() {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </symbol>
                <symbol id="instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </symbol>
                <symbol id="twitter-x" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </symbol>
                <symbol id="linkedin" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </symbol>
                <symbol id="youtube" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </symbol>
                <symbol id='whatsapp' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </symbol>
                <symbol id='telegram' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </symbol>
            </svg>

            <footer className='bg-light bg-gradient'>
                <div className='container-fluid border-top mb-5 '>

                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col'>
                                <div>
                                    <img src='media/images/logo.svg' style={{ width: "75%" }}></img>
                                    <p className='fs-6 mb-0'>&copy; 2010 - 2026, Zerodha Broking Ltd.</p>
                                    <p className='mt-0'>All rights reserved.</p>
                                </div>


                                <div className="d-flex gap-4 mt-3">
                                    <a href="https://instagram.com" className="text-body-secondary" aria-label="twitter-x">
                                        <svg width="24" height="24" fill="currentColor">
                                            <use href="#twitter-x" />
                                        </svg>
                                    </a>
                                    <a href="https://facebook.com" className="text-body-secondary" aria-label="Facebook">
                                        <svg width="24" height="24" fill="currentColor">
                                            <use href="#facebook" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com" className="text-body-secondary" aria-label="Instagram">
                                        <svg width="24" height="24" fill="currentColor">
                                            <use href="#instagram" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com" className="text-body-secondary" aria-label="Instagram">
                                        <svg width="24" height="24" fill="currentColor">
                                            <use href="#linkedin" />
                                        </svg>
                                    </a>

                                </div>

                                <hr className='border border-tertiary' />

                                <div className="d-flex gap-4 mt-3">
                                    <a href="https://instagram.com" className="text-body-secondary" aria-label="twitter-x">
                                        <svg width="24" height="24" fill="currentColor">
                                            <use href="#youtube" />
                                        </svg>
                                    </a>
                                    <a href="https://facebook.com" className="text-body-secondary" aria-label="Facebook">
                                        <svg width="24" height="24" fill="currentColor">
                                            <use href="#whatsapp" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com" className="text-body-secondary" aria-label="Instagram">
                                        <svg width="24" height="24" fill="currentColor">
                                            <use href="#telegram" />
                                        </svg>
                                    </a>

                                </div>

                                <div className='d-flex mt-4 gap-2'>
                                    <img src='media/images/google-play-badge-light.svg' className='image-fluid' ></img>
                                    <img src='media/images/appstore-badge-light.svg' className='image-fluid'></img>
                                </div>

                            </div>
                            <div className='col '>
                                <h1 className='fs-5 mb-4'>Account</h1>
                                <ul className='nav flex-column'>
                                    <li className="nav-item mb-3 text-muted">Open Demat Account</li>
                                    <li className="nav-item mb-3 text-muted">Minor demat account</li>
                                    <li className="nav-item mb-3 text-muted">NRI demat account</li>
                                    <li className="nav-item mb-3 text-muted">HUF demat account</li>
                                    <li className="nav-item mb-3 text-muted">Commodity</li>
                                    <li className="nav-item mb-3 text-muted">Dematerialisation</li>
                                    <li className="nav-item mb-3 text-muted">Fund transfer</li>
                                    <li className="nav-item mb-3 text-muted">MTF</ li>
                                </ul>
                            </div>
                            <div className='col '>
                                <h1 className='fs-5 mb-4'>Support</h1>
                                <ul className='nav flex-column'>
                                    <li className="nav-item mb-3 text-muted">Contact us Account</li>
                                    <li className="nav-item mb-3 text-muted">Support portal</li>
                                    <li className="nav-item mb-3 text-muted">How to file a complaint?</li>
                                    <li className="nav-item mb-3 text-muted">Status of your complaints</li>
                                    <li className="nav-item mb-3 text-muted">Bulletin</li>
                                    <li className="nav-item mb-3 text-muted">Circular</li>
                                    <li className="nav-item mb-3 text-muted">Z-Connect blog</li>
                                    <li className="nav-item mb-3 text-muted">Downloads</ li>
                                </ul>
                            </div>

                            <div className='col '>
                                <h1 className='fs-5 mb-4'>Company</h1>
                                <ul className='nav flex-column'>
                                    <li className="nav-item mb-3 text-muted">About</li>
                                    <li className="nav-item mb-3 text-muted">Philosophy</li>
                                    <li className="nav-item mb-3 text-muted">Press & media</li>
                                    <li className="nav-item mb-3 text-muted">Careers</li>
                                    <li className="nav-item mb-3 text-muted">Zerodha Cares (CSR)</li>
                                    <li className="nav-item mb-3 text-muted">Zerodha.tech</li>
                                    <li className="nav-item mb-3 text-muted">Open source</li>
                                    <li className="nav-item mb-3 text-muted">Referral program</ li>
                                </ul>
                            </div>

                            <div className='col '>
                                <h1 className='fs-5 mb-4'>Quick links</h1>
                                <ul className='nav flex-column'>
                                    <li className="nav-item mb-3 text-muted">Upcoming IPOs</li>
                                    <li className="nav-item mb-3 text-muted">Brokerage charges</li>
                                    <li className="nav-item mb-3 text-muted">Market holidays</li>
                                    <li className="nav-item mb-3 text-muted">Economic calendar</li>
                                    <li className="nav-item mb-3 text-muted">Calculators</li>
                                    <li className="nav-item mb-3 text-muted">Markets</li>
                                    <li className="nav-item mb-3 text-muted">Sectors</li>
                                    <li className="nav-item mb-3 text-muted">Gift Nifty</ li>
                                </ul>
                            </div>

                        </div>

                        <div className='w-0'>
                            <p className='text-muted' style={{ fontSize: "0.75rem" }}> Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Limited – SEBI Registration no.: IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances
                            </p>

                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                Smart Online Dispute Resolution | Grievances Redressal Mechanism
                            </p>


                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                            </p>

                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                            </p>

                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                India's largest broker based on networth as per NSE. NSE broker factsheet
                            </p>

                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                            </p>

                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                            </p>

                            <p className='text-muted' style={{ fontSize: "0.75rem" }}>
                                Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                            </p>
                        </div>

                        <div className=''>
                            <ul className='d-flex gap-5 nav' style={{ fontSize: "0.75rem", justifyContent: "center" }}>
                                <li>NSE</li>
                                <li>BSE</li>
                                <li>MCX</li>
                                <li>MSEI</li>
                                <li>Terms & conditions</li>
                                <li>Policies & procedures</li>
                                <li>Privacy policy</li>
                                <li>Disclosure </li>
                                <li>For investor's attention </li>
                                <li>Investor charter </li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;
