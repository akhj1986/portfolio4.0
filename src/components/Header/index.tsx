import Logo from 'components/Logo'
import React from 'react'
import styles from './style.module.sass'

const Header: React.FC = (props) => {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}

export default Header
