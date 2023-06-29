import React from 'react'
import styles from '@/components/atoms/IconBox/iconBox.module.css'

const IconBox = ({ svg, style }) => {
    return (
        <div className={`${styles.box} ${style}`}>{svg}</div>
    )
}

export default IconBox