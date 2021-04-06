import React from 'react'
import Logo from './Logo'
import styles from './style.module.sass'
import TechStack from './TechStack'

const Header: React.FC = (props) => {
    return (
        <div className={styles.header}>
            <Logo />
            <TechStack />
        </div>
    )
}

export default Header
