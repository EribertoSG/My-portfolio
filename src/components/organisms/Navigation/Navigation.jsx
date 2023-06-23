'use client'
import React, { useState } from 'react'
import styles from './navigation.module.css'
import MenuIcon from '@/components/atoms/MenuIcon'
import useScrollDirection from '@/hooks/useScroll'
import Menu from '@/components/molecules/Menu/Menu'

const Navigation = () => {
    const [isActive, setIsActive] = useState(false)
    const handleMenu = () => {
        setIsActive(!isActive)
    }

    const { isAtTop } = useScrollDirection()

    return (
        <header className={`${styles.header} ${isAtTop == false && styles.activated}`}>
            <div className={styles.headerContainer} >
                <div className={styles.logo}>
                    <h1>ESG</h1>
                </div>
                <Menu styles={styles} isActive={isActive} />
                <MenuIcon styles={styles} status={isActive} showMenu={handleMenu} />
            </div>
        </header>
    )
}

export default Navigation
