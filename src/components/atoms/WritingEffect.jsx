'use client'
import { TypeAnimation } from 'react-type-animation'

const WritingEffect = ({ styles }) => {
    return (
        <div className={styles.nameContainer}>
            <h1 className={styles.name}>¡Hola!, soy
                <TypeAnimation
                    sequence={[
                        1000,
                        "Eriberto Santos.",
                        10000,
                        "desarrollador frontend.",
                        5000
                    ]}
                    wrapper="span"
                    speed={25}
                    repeat={Infinity}
                    cursor={false}
                    className={styles.type}
                />
            </h1>
        </div>
    )
}

export default WritingEffect
