import React from 'react'
import styles from '@/components/atoms/bottom/bottom.module.css'

const Bottom = ({ text }) => {
    return (
        <button className={styles.button} >{text}</button>
    )
}

export default Bottom