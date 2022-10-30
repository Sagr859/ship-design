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
            <div className={styles.topBarNavLogoBtn}>
                Logo Shiptech
            </div>
            <div className={styles.topBarNavRightBtnGrp}>
                <Link key='boats' href={'/boats'}>Boats</Link>
                <Link key='services' href={'/services'}>Services and Contact</Link>
            </div>
        </div>
    );
}

export default TopBar;