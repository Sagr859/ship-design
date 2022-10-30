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
            <div className='aboutUsDiv'>
                <p className='aboutUsDivHead'>
                    We Are
                </p> 
                <div className='aboutUsDivCard'>
                Innovation with Strong engineering background was the aim of founding this company.
                Our team comprises of dynamic young engineers and Experienced industry hands guided by mentors with strong academic background.
                Innovations are the key to path breaking solutions. Our aim is to innovate, and improve the product and client processes so as to have cost effective and better solutions
                </div>
                <div className='aboutUsDivImg'>
                    <img src="https://picsum.photos/200" alt="" />
                </div>
            </div>
            <div className='aboutUsDivided'>
                <div className='aboutUsDivSec'>
                    <p>Team</p> 
                    <div className='aboutUsDivSecDesc'>
                    The Team comprises of NAVAL ARCHITECTS, STRUCTURAL ENGINEERS and DRAFTSMEN.
The team is lead by a Naval Architect with 20 years of industry experience working in various countries.
<br/><br/>
To apply for a job with ShipTech-ICON please send a cover letter together with your C.V. to: <a href='/services#contact_us' className='copyUrlLink'>info@ShipTech-ICON.com</a>
                    </div>
                </div>
                <div className='aboutUsDivSec'>
                    <p>Capacity</p> 
                    <div className='aboutUsDivSecDesc'>
                    We have access to a pool of professional who have expertise in Structural design, Computational Fluid Dynamics, Product visualisation etc.
We also enjoy mentorship from Academicians, Marine Engineers etc
                    </div>
                </div>
            </div>
            <div className='servicesDiv'>
                <p>Services</p> 
                <div className='servicesImages'>
                    <div>
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                </div>
                <div className='servicesDescp'>
                We offer designs for ships, boats and Offshore sector. This includes Basic design to CFD/FE Analysis.
We provide 3D visualisation as well as production engineering and supply boat building kits.
Through our partners we have started doing fabrication also.
                </div>
            </div>
            <div className='avlBoatsDiv'>
                <p>Available Boats</p>
                <div className='avlBoatsDivDesc'>
We make custom built designs, and also promoting chosen boats built by our partners under our supervision. We take up your needs and deliver approved boats on turn key basis.
We are offering much more than boats. For more innovative products, please keep visiting the product detail section which is updated regularly.
                </div>
            </div>
            <div className='avlBoatsDiv'>
                <p>Our Projects</p>
                <div className='avlBoatsDivDesc'>
The project portfolio contains Ships and Boats in service with under our supervision and designed with class approvals.
Stability testing and certifications, Surveys, Conversion studies, Bid consultations.
Visualisation and Animation of marine machinery and Many more
                </div>
            </div>
        </div>
    );
}

export default Home;