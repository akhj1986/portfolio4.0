import cx from 'classnames'
import React from 'react'
import styles from './style.module.sass'

interface Props {
    count: number
    delay: number
}

const TechStack: React.FC<Props> = (props) => (
    <div
        className={cx(styles.blurb, {
            [styles.fadeIn]: props.count - props.delay > 1300,
        })}
    >
        <h3>
            <span>{'<'}</span>Experience <span>{'/>'}</span>
        </h3>
        <p>
            In 2019 I left a career in teaching to accept my first software
            support contract. Since then I have provided consistent service to a
            major client in IPC Systems, Inc. I have provided consultancy and
            development services for internal and customer-facing web-based
            applications. The service I have provided has included coding,
            design and input on overall approach to meeting client objectives.
            This has been done in collaboration with the client.
        </p>
        <p>
            I have worked extensively with back-end teams that are building
            custom server-side Java applications, including collaboration on
            development of appropriate and readable data structures, security
            measures and RESTful API.
        </p>
    </div>
)

export default TechStack
