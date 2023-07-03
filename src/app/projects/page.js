import React from 'react'
import styles from '@/app/projects/projects.module.css'
import SocialNetworks from '@/components/molecules/Social/SocialNetwork'
import Card from '@/components/molecules/Card/Card'
import data from '../../../public/data/data.json'


export default function page() {
    return (
        <section className={styles.projects}>
            <div className={styles.backgroundProjects} />
            <div className={styles.sectionProjects}>
                {data.map(({ id, src, title, description }) => (
                    <Card
                        key={id}
                        src={src}
                        href={`/projects/${id}`}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
            <SocialNetworks />
        </section>
    )
}
