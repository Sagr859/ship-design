import React from 'react'
import styles from '../../styles/Services.module.css'

export default function index() {
  return (
    <div className={styles.servicesDivLayout}>
      <div className={styles.servicesDivHead}>
        Services
      </div>
      <div className={styles.servicesDivGrid}>
        <div className={styles.servicesDivCard}>
          <div className={styles.servicesCardDivImg}>
            <img src="https://picsum.photos/400/300" alt="" />
          </div>
          <div className={styles.servicesCardContent}>
            <div>DESIGN & TESTS</div>
            <p>
              We provide engineering designs for boats and ships. We also conduct sea trials, stability assessments and support the owner in getting his vessel certified by providing relevant documents as well as liasing with statutes
            </p>
          </div>
        </div>
        <div className={styles.servicesDivCard}>
          <div className={styles.servicesCardDivImg}>
            <img src="https://picsum.photos/400/300" alt="" />
          </div>
          <div className={styles.servicesCardContent}>
            <div>ENGINEERING (CAD/ CAE)</div>
            <p>
            We do detail design of vessels including renovation and refurbishment projects. We have experience in doing CFD for analysing resistance and propulsion. We also do structural analysis by means of FE
            </p>
          </div>
        </div>
        <div className={styles.servicesDivCard}>
          <div className={styles.servicesCardDivImg}>
            <img src="https://picsum.photos/400/300" alt="" />
          </div>
          <div className={styles.servicesCardContent}>
            <div>PRODUCT DESIGNS</div>
            <p>
            We undertake projects on feasibility studies of logistics vessels and navigation. We also prepare animations and product videos for presentations and review purposes. 2D and 3D mechanical designs creation from manufacture's concept or ideas is also undertaken
            </p>
          </div>
        </div>
        
      </div>
      <div id="contact_us" className={styles.servicesDivHead}>
        Contact Us
      </div>
      <div  className='contactUsDiv'>
        <div>
          map
        </div>
        <div>
          <div>
            <div>Inquiries</div>
            <p>For any inquiries, questions or commendations, please mail: info@shiptech-icon.com or fill out the following form</p>
          </div>
          <div>
            <div>Employment</div>
            <p>To apply for a job with ShipTech-ICON please send a cover letter together with your C.V. to: info@ShipTech-ICON.com</p>
          </div>
        </div>
        <div>
          <div>
            <div>
              Head Office
            </div>
            <p>CITTIC, CUSAT - 682 022<br/>Cochin, Kerala, INDIA<br/>info@ShipTech-ICON.com</p>
          </div>
          <div>
            <p>Contact Us</p>
            <div className=''>
              <form>
                <div>
                  <label>Enter Your Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Enter Your Email</label>
                  <input type="email" />
                </div>
                <div>
                  <label>Enter Subject</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Enter Your Message</label>
                  <textarea type="text" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
