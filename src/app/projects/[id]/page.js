'use client'
import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from '@/app/projects/[id]/landingPage.module.css'
import LinkButton from '@/components/atoms/Link/LinkButton'
import data from '../../../../public/data/data.json'
import SocialNetworks from '@/components/molecules/Social/SocialNetwork'

export default function page({ params }) {
    const { id } = params
    const result = data.filter(el => el.id == id)

    if (result.length === 0) {
        notFound()
    }

    if (result.length !== 0) {
        return result.map(({ id, src, alt, title, description, functionalities, technologies, download, link }) => (
            <div className={styles.landing} key={id}>
                <div className={styles.secondSection}>
                    <div className={styles.imageContainer}>
                        <Image src={src} width={650} height={400} alt={alt} />
                    </div>
                </div>
                <div className={styles.firstSection} >
                    <div className={styles.titleAndDescription}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <ul>
                            {functionalities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.informationContainer}>
                        <p>Cómo se construyó esta App</p>
                        <ul className={styles.techList}>
                            {technologies.map((item, index) => (
                                <li className={styles.item} key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconCheck} width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7.933 13.481-3.774-3.774 1.414-1.414 2.226 2.226 4.299-5.159 1.537 1.28-5.702 6.841z"></path></svg>
                                    <span className={styles.nameTech}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.button}>
                        <LinkButton href={link} target='_blank' className={styles.linkButton}>
                            <span>{download ? 'Descarga la app' : 'Visita la app'}</span>
                            {download ?
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.linkExternal} width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.linkExternal} width="24" height="24" viewBox="0 0 24 24"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                            }
                        </LinkButton>
                    </div>
                </div>
                <SocialNetworks />
            </div>
        ))
    }

}
