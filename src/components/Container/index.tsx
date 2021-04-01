import React from 'react'
import styles from './style.module.sass'

const Container: React.FC = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default Container
