import Link from 'next/link';
import React from 'react';
import styles from '../styles/TopBar.module.css'

function TopBar(props) {
    return (
        <div className={styles.topBarNav}>
            <div className={styles.topBarNavLeftBtnGrp}>
                <Link key='boats' href={'/boats'}>Boats</Link>
                <Link key='projects' href={'/projects'}>Projects</Link>
            </div>
            <div className={styles.topBarNavLogoBtn}>
                Logo Shiptech
            </div>
            <div className={styles.topBarNavRightBtnGrp}>
                <Link key='services' href={'/services'}>Services</Link>
                <Link key='aboutUs' href={'/about-us'}>About Us</Link>
            </div>
        </div>
    );
}

export default TopBar;