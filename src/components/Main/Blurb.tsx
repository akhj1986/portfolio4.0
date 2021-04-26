import img from 'assets/headshot3.jpg'
import cx from 'classnames'
import Icon from 'patterns/Icon'
import React from 'react'
import styles from './style.module.sass'

interface Props {
    count: number
    delay: number
}

const Blurb: React.FC<Props> = (props) => (
    <div
        className={cx(styles.blurb, {
            [styles.fadeIn]: props.count - props.delay > 1050,
        })}
    >
        <h3>
            <span>{'<'}</span>ModernWebApps <span>{'/>'}</span>
        </h3>
        <p>
            <img src={img} alt="" />
            Hi, I'm Alex, a front-end developer who has been building
            professional web applications using the React ecosystem since 2019.
            I am passionate about developing in clean, re-usable code and
            providing elegant and usable design. I believe when it comes to UX
            design that neither form nor function can be disposed with. As a
            React developer, I take great pleasure in functional programming
            (hooks are surely the most beautiful invention of the past 5 years{' '}
            <span className={styles.emoji}>
                <Icon icon="smile-beam" size="lg" />
            </span>
            ), while still recognising that object-oriented programming has its
            place within React applications. I pay great attention to detail in
            the code, function and apperance of applications. I care about the
            work I do!
        </p>
    </div>
)

export default Blurb
