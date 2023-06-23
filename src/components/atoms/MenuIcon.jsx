import React from 'react'

const MenuIcon = ({ styles }) => {
    return (
        <span className={`${styles.menuIconContainer} `}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon} width="28" height="28" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
        </span>
    )
}

export default MenuIcon
