import React from 'react';

function Home() {
    return (
        <div className='mainHomePage'>
            <div className='mainAttractionDiv'>
                <div className='mainAttentionDiv'>
                    <p>2016</p>
                    <span>Established</span>
                </div>
                <div className='mainAttentionDiv'>
                    <p>200+</p>
                    <span>Completed Projects</span>
                </div>
                <div className='mainAttentionDiv'>
                    <p>4</p>
                    <span>Client Nations</span>
                </div>
                <div className='mainAttentionDiv'>
                    <p>1</p>
                    <span>CSR Project</span>
                </div>
            </div>
            <div className='mainSubPage'>
                <div className='subDivCard'>
                    <div className='subDivImg'>
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div className='subDivContent'>
                        <p>ABOUT US</p>
                        <span>
                        ShipTech-ICON had its humble beginning in 2016 as a start-up incubated under Cochin University of Science and Technology.
                        <br/>With the right mix of experienced hands, young professionals, and academicians, we have been providing practical yet innovative solutions for clients around the globe.
                        </span>
                    </div>
                </div>
                <div className='subDivCard'>
                    <div className='subDivImg'>
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div className='subDivContent'>
                        <p>SERVICES</p>
                        <span>
                        We offer designs for ships, boats and Offshore sector. This includes Basic design to CFD/FE Analysis.
                        <br/>We provide 3D visualisation as well as production engineering and supply boat building kits.
                        <br/>Through our partners we have started doing fabrication also.
                        </span>
                    </div>
                </div>
                <div className='subDivCard'>
                    <div className='subDivImg'>
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div className='subDivContent'>
                        <p>PROJECTS</p>
                        <span>
                        The project portfolio contains Ships and Boats in service with under our supervision and designed with class approvals.
                        <br/>Stability testing and certifications, Surveys, Conversion studies, Bid consultations.
                        <br/>Visualisation and Animation of marine machinery and Many more
                        </span>
                    </div>
                </div>
                <div className='subDivCard'>
                    <div className='subDivImg'>
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div className='subDivContent'>
                        <p>BOATS & OTHER PRODUCTS</p>
                        <span>
                        We make custom built designs, and also promoting chosen boats built by our partners under our supervision. We take up your needs and deliver approved boats on turn key basis.
                        <br/>We are offering much more than boats. For more innovative products, please keep visiting the product detail section which is updated regularly.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;