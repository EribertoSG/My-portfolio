import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/notFound.module.css'

export default function notFound() {
    return (
        <section className={styles.notFound}>
            <div className={styles.imageContainer}>
                <Image src='/other/404.svg' width={600} height={400} alt='Error 404' />
            </div>
            <Link href='/projects' className={styles.backButton}>Explora mis proyectos</Link>
        </section>
    )
}
