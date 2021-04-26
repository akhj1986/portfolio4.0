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
            [styles.fadeIn]: props.count - props.delay > 1150,
        })}
    >
        <h3 className={styles.left}>
            <span>{'<'}</span>TechStack <span>{'/>'}</span>
        </h3>
        <p>
            I have worked primarily within a React environment that includes
            Redux for state management (including Redux-Saga for handling
            side-effects). I have developed in both TypeScript and ES6, with a
            preference for TypeScript, especially once an application reaches a
            certain size (about the same time an application is large enough to
            warrant Redux!). I normally use Sass modules for styling, though
            have also developed with Styled-Components.
        </p>
        <p>
            I have built smaller applications using React's native Context API
            for state management to reduce overheads associated with Redux.
        </p>
        <p>
            The React ecosystem can easily take advantage of a multitude of
            third party libraries, both React-specific and more general purpose.
            Some of the libraries I have used with frequency include:
        </p>
        <ul>
            <li>AmCharts</li>
            <li>Axios</li>
            <li>Classnames</li>
            <li>DayJs</li>
            <li>Formik (with Yup)</li>
            <li>Node-Sass</li>
            <li>React-Router</li>
            <li>React-Spring</li>
            <li>Redux</li>
            <li>Redux-Saga</li>
        </ul>
        <p> ...amongst many others!</p>
    </div>
)

export default TechStack
