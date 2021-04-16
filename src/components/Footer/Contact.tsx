import data from 'assets/data.json'
import { IconType } from 'patterns/Icon'
import React from 'react'
import ContactLink from './ContactLink'
import styles from './style.module.sass'

const Contact: React.FC = () => {
    const { contactDetails } = data

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contact}>
                <ul>
                    {contactDetails.slice(0, 2).map((item, i) => (
                        <ContactLink
                            key={i}
                            text={item.text}
                            href={item.href}
                            fab={item.fab}
                            target={item.target}
                            icon={item.icon as IconType}
                        />
                    ))}
                </ul>
                <ul>
                    {contactDetails.slice(2, 4).map((item, i) => (
                        <ContactLink
                            key={i}
                            text={item.text}
                            href={item.href}
                            fab={item.fab}
                            target={item.target}
                            icon={item.icon as IconType}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Contact
