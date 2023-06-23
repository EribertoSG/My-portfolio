import React from 'react'
import Link from 'next/link'
import styles from '@/components/molecules/Menu/menu.module.css'

const Menu = () => {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <Link className={styles.item} href="/projects">Projects</Link>
                <Link className={styles.item} href="/about">About me</Link>
                <Link className={styles.item} href="/contact">Contact</Link>
                <div className={styles.item}>
                    <span>EN</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronDown} width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" /></svg>
                </div>
            </nav>

            <div className={styles.cv}>
                <Link href="/path_to_cv_file" download className={styles.buttonResume}>Resume</Link>
            </div>
        </div>
    )
}

export default Menu