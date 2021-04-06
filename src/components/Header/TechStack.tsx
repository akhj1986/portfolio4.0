import Icon from 'patterns/Icon'
import React from 'react'
import styles from './style.module.sass'

const TechStack: React.FC = () => {
    return (
        <div className={styles.techStack}>
            <span>Built with</span>
            <Icon icon={['fab', 'react']} />
        </div>
    )
}

export default TechStack
