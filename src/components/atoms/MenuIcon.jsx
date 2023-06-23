import React from 'react'

const MenuIcon = ({ styles, status, showMenu }) => {
    return (
        <span className={`${styles.menuIconContainer} ${status && styles.backgroundActive}`} onClick={showMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon} width="32" height="32" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
        </span>
    )
}

export default MenuIcon
