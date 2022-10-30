import React from 'react'

export default function CSR() {
  return (
    <div className='csrProjHomeDiv'>
      <div className='csrProjHead'>CSR Project</div>
      <div className='csrProjMainContent'>
        <div className='csrProjMainContentBody'>
        At ShipTech-ICON, We believe Responsibility to society is always there regardless of your corporate status.
        <br/>
        KMRLs PET scrapping and recycling machine installed at stations did not have enough utilisation owing to less awareness among public. We shifted the machine to CUSAT campus for few days and returned the same after doubling its overall usage counters. We had maintained a container made of waste bottles, in the shape of a boat for making it as the primary collection area for those who didnt have time to queue up and see the bottle getting pelletised. The Last day saw really enthusiastic school groups who  ensured that the campus was bottle free. We ran short of bottles for demo and had to reluctantly allow them to dismantle our BOATle and feed the machine. 
        </div>
        <div className='csrProjMainContentImg'>
          <img src="https://picsum.photos/700/500" alt="" />
          <p>School children</p>
        </div>
      </div>
      <div className='csrProjGalleryDiv'>
        <div className='csrProjGalSec'>
            <div>
              <img src="https://picsum.photos/500" alt="" />
              <p>PET Crusher at CUSAT Metro</p>
            </div>
            <div>
              <img src="https://picsum.photos/500" alt="" />
              <p>Even I can contribute</p>
            </div>
        </div>
        <div className='csrProjGalSec'>
            <div>
              <img src="https://picsum.photos/500" alt="" />
              <p>PET crusher drive inauguration</p>
            </div>
            <div>
              <img src="https://picsum.photos/500" alt="" />
              <p>PET Collection 'BOAT'le</p>
            </div>
        </div>
      </div>
    </div>
  )
}
