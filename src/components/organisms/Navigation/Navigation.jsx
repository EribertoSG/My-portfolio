'use client'
import React from 'react'
import styles from './navigation.module.css'
import { BREAKPOINTS } from '@/constants/ breakpoints'
import useMediaQuery from '@/hooks/useResponsive'
import MenuIcon from '@/components/atoms/MenuIcon'
import useScrollDirection from '@/hooks/useScroll'
import Menu from '@/components/molecules/Menu/Menu'

const Navigation = () => {
    const { isAtTop } = useScrollDirection()
    console.log("🚀 ~ file: Navigation.jsx:11 ~ Navigation ~ isAtTop:", isAtTop)

    return (
        <header className={`${styles.header} ${isAtTop ==false && styles.activated}`}>
            <div className={styles.headerContainer} >
                <div className={styles.logo}>
                    <h1>ESG</h1>
                </div>
                <Menu styles={styles}/>
                <MenuIcon styles={styles} />
            </div>
        </header>
    )
}

export default Navigation
