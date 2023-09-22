'use client'
// Importa useState
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/molecules/Card/card.module.css';

const Card = ({ src, title, description, href }) => {
    // Agrega un estado para controlar si la imagen se ha cargado
    const [isLoading, setIsLoading] = useState(false);

    // Función para manejar la carga completa de la imagen
    const handleImageLoad = () => {
        setIsLoading(true);
    };

    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <Link href={href}>
                    {/* Aplica un efecto de desenfoque si isLoading es true */}
                    <div className={`${styles.loadingImage} ${isLoading ? styles.blur : ''}`}>
                        <Image
                            src={src}
                            width={450}
                            height={250}
                            alt='my-portfolio'
                            onLoadingComplete={handleImageLoad}
                        />
                    </div>
                </Link>
            </div>
            <div className={styles.cardBody}>
                <Link href={href}>
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default Card;
