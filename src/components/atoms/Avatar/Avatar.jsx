'use client'
import React, { useState } from 'react'
import styles from '@/components/atoms/Avatar/avatar.module.css'
import Image from 'next/image'

const Avatar = ({ src, width, height, alt }) => {
    const [isLoading, setIsLoading] = useState(false);

    // Función para manejar la carga completa de la imagen
    const handleImageLoad = () => {
        setIsLoading(true);
    };

    return (
        <div className={styles.avatar}>
            <span className={`${styles.imageContainer} ${styles.loadingImage} ${isLoading ? styles.blur : ''}`}>
                <Image src={src} width={width} height={height} alt={alt} onLoadingComplete={handleImageLoad} />
            </span>
        </div>
    )
}

export default Avatar