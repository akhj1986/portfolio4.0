import cx from 'classnames'
import Icon from 'patterns/Icon'
import React, { useContext } from 'react'
import { store } from 'store'
import styles from './style.module.sass'

const TechStack: React.FC = () => {
    const { state } = useContext(store)

    return (
        <div
            className={cx(styles.techStack, {
                [styles.show]: state.count > 1150,
            })}
        >
            <span>Built with</span>
            <Icon icon={['fab', 'react']} />
        </div>
    )
}

export default TechStack
