import React from 'react'
import styles from '@/components/atoms/Avatar/avatar.module.css'
import Image from 'next/image'

const Avatar = ({ src, width, height, alt }) => {
    return (
        <div className={styles.avatar}>
            <span className={styles.imageContainer}>
                <Image src={src} width={width} height={height} alt={alt} />
            </span>
        </div>
    )
}

export default Avatar