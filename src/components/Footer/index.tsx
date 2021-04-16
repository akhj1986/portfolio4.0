import React from 'react'
import Contact from './Contact'
import styles from './style.module.sass'

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <Contact />
            <div className={styles.footer}>
                <span> &copy; Alex Harris-Jedamski 2021</span>
            </div>
        </div>
    )
}

export default Footer
