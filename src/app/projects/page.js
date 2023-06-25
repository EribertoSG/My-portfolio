import Card from '@/components/molecules/Card/Card'
import React from 'react'

export default function page() {
    const data = [
        {
            id: 1,
            src: '/projects/unsplash.png',
            title: 'Aqui va el titulo',
            description: 'La description'
        },
        {
            id: 1,
            src: '/projects/portfolio.png',
            title: 'aqui va el titulo',
            description: 'La description'
        }
    ]

    return data.map(element => <Card src={element.src} title={element.title} description={element.description} />)
}
