import React from 'react'
import Logo from './Logo'
import styles from './style.module.sass'

const Header: React.FC = (props) => {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}

export default Header
