import { useEffect, useState } from 'react'

export const useWindowMeasure = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const updateValue = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize', updateValue)

        return () => {
            window.removeEventListener('resize', updateValue)
        }
    }, [])

    return { width, height }
}
