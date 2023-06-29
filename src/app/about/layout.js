import React from 'react'
import styles from '@/app/about/about.module.css'
import SocialNetworks from '@/components/molecules/Social/SocialNetwork'

export default function layout({children}) {
    return (
        <section className={styles.about}>
            <div className={styles.backgroundAbout} />
            <div className={styles.sectionAbout}>
                {children}
            </div>
            <SocialNetworks />
        </section>
    )
}
