import Link from 'next/link';
import React from 'react';
import styles from '../styles/TopBar.module.css'

function TopBar(props) {
    return (
        <div className={styles.topBarNav}>
            <div className={styles.topBarNavLeftBtnGrp}>
                <Link key='projects' href={'/projects'}>Projects</Link>
                <Link key='csrproj' href={'/csr-project'}>CSR Project</Link>
            </div>
            <div>
            <Link key="home" href={'/'} className={styles.topBarNavLogoBtn}>
                Logo Shiptech
            </Link>
            </div>
            <div className={styles.topBarNavRightBtnGrp}>
                <Link key='boats' href={'/boats'}>Boats</Link>
                <Link key='services' href={'/services'}>Services</Link>
            </div>
        </div>
    );
}

export default TopBar;