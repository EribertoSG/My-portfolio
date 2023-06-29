import Link from 'next/link'
import React from 'react'

const LinkButton = ({ href, target, children, className }) => {
    return (
        <Link href={href} target={target} className={className}>{children}</Link>
    )
}

export default LinkButton