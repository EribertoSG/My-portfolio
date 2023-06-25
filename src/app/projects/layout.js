import React from 'react'
import styles from '@/styles/projects.module.css'
import SocialNetworks from '@/components/molecules/Social/SocialNetwork'

export default function layout({ children }) {
    return (
        <section className={styles.sectionProjects}>
            <div className={styles.backgroundProjects} />
            {children}
            <SocialNetworks />
        </section>
    )
}
