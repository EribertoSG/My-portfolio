import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/molecules/Card/card.module.css'

const Card = ({ src, title, description, href }) => {
    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <Link href={href}>
                    <Image src={src} width={450} height={250} alt='my-portfolio' />
                </Link>
            </div>
            <div className={styles.cardBody}>
                <Link href={href}><h3>{title}</h3></Link>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Card