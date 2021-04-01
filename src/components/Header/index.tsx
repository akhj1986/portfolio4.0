import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import Logo from './Logo'
import styles from './style.module.sass'

const Header: React.FC = (props) => {
    const [fadeInHeader, setFadeInHeader] = useState(false)

    const headerStyles = useSpring({
        config: { duration: 800 },
        opacity: fadeInHeader ? 0.9 : 0,
    })

    return (
        <div className={styles.header}>
            <Logo onFadeInHeader={(value) => setFadeInHeader(value)} />
            <animated.h2 style={headerStyles}>Harris-Jedamski</animated.h2>
        </div>
    )
}

export default Header
