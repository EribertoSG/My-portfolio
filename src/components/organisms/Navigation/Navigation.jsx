'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './navigation.module.css'
import MenuIcon from '@/components/atoms/MenuIcon'
import useScrollDirection from '@/hooks/useScroll'
import Menu from '@/components/molecules/Menu/Menu'
import Link from 'next/link'

const Navigation = () => {
    const currentRoute = usePathname()
    const [isActive, setIsActive] = useState(false)

    const handleMenu = () => {
        setIsActive(!isActive)
    }
    useEffect(() => {
        currentRoute == '/'
            ? setIsActive(false)
            : setIsActive(!isActive)
    }, [currentRoute])

    const { isAtTop } = useScrollDirection()

    return (
        <header className={`${styles.header} ${isAtTop == false && styles.activated}`}>
            <div className={styles.headerContainer} >
                <div className={styles.logo}>
                    <Link href='/'><h1>ESG</h1></Link>
                </div>
                <Menu styles={styles} isActive={isActive} />
                <MenuIcon styles={styles} status={isActive} showMenu={handleMenu} />
            </div>
        </header>
    )
}

export default Navigation
