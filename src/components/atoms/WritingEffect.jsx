'use client'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation'

const WritingEffect = ({ styles }) => {
    return (
        <div className={styles.name}>
            <TypeAnimation
                sequence={[
                    1000,
                    "Hi!, I´m Eriberto Santos.",
                    10000,
                    "Hi!, I´m a frontend developer.",
                    5000
                ]}
                wrapper="h1"
                speed={25}
                style={{ fontSize: '2em', display: 'inline-block', color: '#35A4F2' }}
                repeat={Infinity}
                cursor={false}
                className={styles.type}
            />
        </div>
    )
}

export default WritingEffect
