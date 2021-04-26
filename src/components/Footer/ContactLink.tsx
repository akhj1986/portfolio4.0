import { IconName } from '@fortawesome/fontawesome-common-types'
import Icon, { IconType } from 'patterns/Icon'
import React from 'react'
import styles from './style.module.sass'

interface Props {
    icon: IconType
    text: string
    href: string
    target?: string
    fab?: boolean
}

const ContactLink: React.FC<Props> = (props) => {
    return (
        <li className={styles.contactLink}>
            <div className={styles.icon}>
                <Icon
                    icon={
                        props.fab ? ['fab', props.icon as IconName] : props.icon
                    }
                />
            </div>
            <a href={props.href} target={props.target} rel="noreferrer">
                {props.text}
            </a>
        </li>
    )
}

export default ContactLink
