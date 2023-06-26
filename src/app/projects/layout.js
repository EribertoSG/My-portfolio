import React from 'react'
import styles from '@/styles/projects.module.css'
import SocialNetworks from '@/components/molecules/Social/SocialNetwork'

export default function layout({ children }) {
    return (
        <section className={styles.projects}>
            <div className={styles.backgroundProjects} />
            <div className={styles.sectionProjects}>
                {children}
            </div>
            <SocialNetworks />
        </section>
    )
}
