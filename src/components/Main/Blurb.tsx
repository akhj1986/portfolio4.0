import cx from 'classnames'
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
        {/* <div className={styles.header}>
            <h3>Front-End Developer</h3>
            <img src={img} alt="" />
        </div> */}
        <h3>Front-End Developer</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            convallis arcu dui, eget convallis velit fermentum ac. Vestibulum
            turpis tortor, condimentum ut aliquet id, volutpat sed erat. Mauris
            consequat hendrerit diam ut congue. Aenean ut commodo orci. Morbi
            non iaculis est, sed varius lacus. Sed vulputate erat non rutrum
            sagittis. Etiam vel elementum dolor, at tempus tortor. Duis
            consectetur venenatis nulla, eget pulvinar lectus vulputate eget.
            Etiam imperdiet elementum dui, sed laoreet ipsum pulvinar et.
            Suspendisse pulvinar varius neque, at viverra lorem ultrices eget.
            Vestibulum faucibus diam ut nisi elementum consectetur. Integer eget
            leo vitae augue aliquam porta eu sit amet tellus.
        </p>
    </div>
)

export default Blurb
