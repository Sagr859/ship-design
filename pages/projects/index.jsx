import React from 'react'
import styles from '../../styles/Projects.module.css'

export default function index() {
  return (
    <div className={styles.projectsLayout}>
      <div className={styles.projectsLayHead}>
        Projects  
      </div>     
      <div className={styles.prokectsLayoutList}>
        <div className={styles.projectsCard}>
          <div className={styles.projectsCardTitleDiv}>
            <div className={styles.projectsCardImg}>
              <img src="https://picsum.photos/200/200" alt="" />
            </div>
            <p>Speed Boat (Cherai, INDIA)</p>
          </div>  
          <div className={styles.projectsCadDesc}>
            6 pax Speed boat plying at water sports Cherai. Our role was throughout the life cycle from Basic design, Hull optimisation until testing in service conditions.
          </div>
        </div>
        <div className={styles.projectsCard}>
          <div className={styles.projectsCardTitleDiv}>
            <div className={styles.projectsCardImg}>
              <img src="https://picsum.photos/200/200" alt="" />
            </div>
            <p>Speed Boat (Cherai, INDIA)</p>
          </div>  
          <div className={styles.projectsCadDesc}>
            6 pax Speed boat plying at water sports Cherai. Our role was throughout the life cycle from Basic design, Hull optimisation until testing in service conditions.
          </div>
        </div>
        <div className={styles.projectsCard}>
          <div className={styles.projectsCardTitleDiv}>
            <div className={styles.projectsCardImg}>
              <img src="https://picsum.photos/200/200" alt="" />
            </div>
            <p>Speed Boat (Cherai, INDIA)</p>
          </div>  
          <div className={styles.projectsCadDesc}>
            6 pax Speed boat plying at water sports Cherai. Our role was throughout the life cycle from Basic design, Hull optimisation until testing in service conditions.
          </div>
        </div>  
      </div>   
    </div>
  )
}
