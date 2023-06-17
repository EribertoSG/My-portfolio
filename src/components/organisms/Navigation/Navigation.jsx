import React from 'react'
import Link from 'next/link'
import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer} >
                <div className={styles.logo}>
                    <h1>ESG</h1>
                </div>
                <div className={styles.navbarContainer}>
                    <nav className={styles.navbar}>
                        <Link className={styles.item} href="/projects">Projects</Link>
                        <Link className={styles.item} href="/about">About me</Link>
                        <Link className={styles.item} href="/contact">Contact</Link>
                        <Link className={styles.item} href="/idioma">Es v</Link>
                    </nav>

                    <div className={styles.cv}>
                        <Link href="/path_to_cv_file" download className={styles.buttonResume}>Resume</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation
