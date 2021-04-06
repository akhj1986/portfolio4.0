import {
    FlipProp as FontAwesomeFlipProp,
    IconProp as FontAwesomeIconType,
    library,
    RotateProp as FontAwesomeRotateProp,
    SizeProp as FontAwesomeSizeProp,
} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import React from 'react'
import styles from './style.module.sass'

library.add(fab, fas)

export type IconType = FontAwesomeIconType

export type IconSize = FontAwesomeSizeProp

export type RotateProp = FontAwesomeRotateProp

export type FlipProp = FontAwesomeFlipProp

export type IconVariant = 'subtle'

interface Props extends FontAwesomeIconProps {
    variant?: IconVariant
    fab?: boolean
}

const Icon: React.FC<Props> = (props) => {
    const { size = 'lg' } = props

    return (
        <FontAwesomeIcon
            {...props}
            size={size}
            className={cx(styles.icon, {
                [styles.variant]: props.variant,
            })}
        />
    )
}

export default Icon
