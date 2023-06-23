import { useEffect, useState } from 'react'

export default function useScrollDirection() {
    const [lastScrollPosition, setLastScrollPosition] = useState(0)
    const [isScrollingUp, setIsScrollingUp] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = document.documentElement.scrollTop
            setIsScrollingUp(currentScrollPosition <= lastScrollPosition || currentScrollPosition <= 0)
            setIsAtTop(currentScrollPosition <= 0)
            setLastScrollPosition(currentScrollPosition <= 0 ? 0 : currentScrollPosition)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollPosition])

    return {
        isScrollingUp,
        isAtTop
    }
}
