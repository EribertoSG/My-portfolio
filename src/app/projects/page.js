import Card from '@/components/molecules/Card/Card'
import React from 'react'

export default function page() {
    const data = [
        {
            id: 1,
            src: '/projects/unsplash.png',
            title: 'Aqui va el titulo y si es demasiado largo se tiene que ocultar el resto del titulo y todo lo demas ',
            description: 'La description de este proyecto es demasiado larga, asi que se necesita que se restriga a 4 lineas. Al final ponerle un especie de ellipsis para que se vea chingona. Es necesario que se vea bien en todo los tamaños.    '
        },
        {
            id: 1,
            src: '/projects/unsplash.png',
            title: 'Aqui va el titulo y si es demasiado largo se tiene que ocultar el resto del titulo y todo lo demas ',
            description: 'La description de este proyecto es demasiado larga, asi que se necesita que se restriga a 4 lineas. Al final ponerle un especie de ellipsis para que se vea chingona. Es necesario que se vea bien en todo los tamaños.    '
        },
        {
            id: 1,
            src: '/projects/unsplash.png',
            title: 'Aqui va el titulo y si es demasiado largo se tiene que ocultar el resto del titulo y todo lo demas ',
            description: 'La description de este proyecto es demasiado larga, asi que se necesita que se restriga a 4 lineas. Al final ponerle un especie de ellipsis para que se vea chingona. Es necesario que se vea bien en todo los tamaños.    '
        },
        {
            id: 1,
            src: '/projects/portfolio.png',
            title: 'aqui va el titulo',
            description: 'La description'
        },
        {
            id: 1,
            src: '/projects/portfolio.png',
            title: 'aqui va el titulo',
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
