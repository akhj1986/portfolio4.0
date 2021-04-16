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
        <h3 className={styles.left}>Tech Stack</h3>
        <p>
            Mauris aliquam ligula a ligula gravida viverra. Morbi tristique ex
            tempor molestie cursus. Proin a ultricies dui. Maecenas elementum
            odio ac tincidunt ornare. Cras mi turpis, malesuada at egestas ac,
            pharetra vitae eros. Sed augue orci, fringilla nec rhoncus eget,
            viverra in nibh. Praesent semper diam vitae turpis lobortis
            condimentum. Fusce vel imperdiet arcu. Ut ut sem lorem. Maecenas
            lacinia venenatis malesuada.
        </p>
        <p>
            Donec in erat vel nisi vehicula fermentum. Nam facilisis magna non
            orci feugiat, sit amet facilisis urna fermentum. Quisque dignissim
            lobortis tortor in dictum. Duis gravida justo arcu, ut pulvinar
            velit tempus nec. Suspendisse eget vulputate sem, nec consequat
            risus. Pellentesque pulvinar, tellus at aliquam convallis, mauris
            nibh cursus metus, a cursus urna lacus non sem. Vestibulum a purus
            ut ipsum aliquet pharetra id eu quam. Duis interdum mollis est, at
            scelerisque est.{' '}
        </p>
    </div>
)

export default TechStack
