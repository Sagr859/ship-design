import React from 'react';

const SingleProject = () => {
    return (
        <div className='singleProjectLayout'> 
            <div className='singleProjectLyoutImg'>
                <img src="" alt="" />
            </div>
            <div className='singleProjectTitleDiv'>
                <div>
                    Speed Boat (Cherai, INDIA)
                </div>
                <p>
                6 pax Speed boat plying at water sports Cherai. Our role was throughout the life cycle from Basic design, Hull optimisation until testing in service conditions.
                FRP Boats basic, Detail design and subsequest class approval. 3D and physical prototypes followed by physical cutting and mould preparation were undertaken. Providing building supervision, conducting tests and trials and performance tweaking helped us achieve a rare goal - Coverage from design table to product realisation !!
                </p>
            </div>
            <div className='singleProjectGallery'>
                <p>Project Gallery</p>
                <div>
                    image carousel
                </div>
            </div>
            <div className='singleProjectAttractsLayout'>
                <div className='singleProjectAttractsDiv'>
                    <div className='singleProjectSVG'></div>
                    <div className='singleProjectAttractTitle'>
                        <p>25 Knots</p>
                        <span>Proven Speed and safe handling</span>
                    </div>
                </div>
                <div className='singleProjectAttractsDiv'>
                    <div className='singleProjectSVG'></div>
                    <div className='singleProjectAttractTitle'>
                        <p>6 Pax</p>
                        <span>Bow Rider. Adrenaline-rush forward seats and comfort ride at aft</span>
                    </div>
                </div>
                <div className='singleProjectAttractsDiv'>
                    <div className='singleProjectSVG'></div>
                    <div className='singleProjectAttractTitle'>
                        <p>3 Years</p>
                        <span>3 Years of safe operation, 5000+ riders</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SingleProject;