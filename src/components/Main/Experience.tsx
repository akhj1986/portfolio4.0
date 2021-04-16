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
        <h3>Experience</h3>
        <p>
            Nam tincidunt interdum ante eget viverra. In consequat quam gravida
            egestas lacinia. Suspendisse pulvinar nibh nec orci convallis, in
            feugiat mauris ornare. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Sed nulla tortor, rutrum ut sagittis sed, vulputate vel
            velit. Vestibulum ligula massa, tincidunt ut ultrices eu, ultrices
            ullamcorper nulla. Proin ut mollis tortor. Suspendisse vitae porta
            velit. Cras ante leo, interdum ut sodales id, lacinia a justo. Nam
            ac porta ligula, eu fermentum lectus. Donec ut metus consectetur,
            hendrerit neque ac, bibendum magna. Quisque laoreet ante at risus
            scelerisque dictum.
        </p>
        <p>
            Etiam diam purus, lobortis vitae aliquet eget, ornare sed velit.
            Mauris vitae semper orci. Integer gravida porta quam, vel posuere
            neque pulvinar in. Maecenas vitae lacus in nisl aliquam facilisis.
            Vestibulum non magna mattis, ultricies ante euismod, aliquet nisl.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat risus vel libero mollis accumsan. Phasellus viverra dui
            tincidunt magna bibendum, vitae ultricies risus aliquam. Proin
            malesuada bibendum ante, ac fringilla leo egestas non. Etiam finibus
            accumsan hendrerit.
        </p>
    </div>
)

export default TechStack
