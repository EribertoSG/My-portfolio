import React from 'react'
import Link from 'next/link'

const SocialNetworks = ({styles, socialMediaList}) => {
    return (
        <div className={styles.socialNetworks}>
        <div className={styles.lineOne}></div>
        <div className={styles.socialNetworks__content}>
            {socialMediaList.map(element => (
                <Link href={element.link} key={element.id} target={element.target}>{element.svg}</Link>
            ))}
        </div>
        <div className={styles.lineTwo}></div>
    </div>
    )
}

export default SocialNetworks
