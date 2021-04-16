import { useWindowMeasure } from 'hooks'
import React, { useContext, useEffect, useRef } from 'react'
import { actions, store } from 'store'
import Blurb from './Blurb'
import Experience from './Experience'
import styles from './style.module.sass'
import TechStack from './TechStack'

const Main: React.FC = () => {
    const { state, dispatch } = useContext(store)
    const { width } = useWindowMeasure()
    const mainRef = useRef<null | HTMLDivElement>(null)
    const delay = width < 1600 ? 100 : 0

    useEffect(() => {
        if (mainRef.current) {
            const h = mainRef.current.clientHeight

            dispatch(actions.setContentHeight(h))
        }
    }, [mainRef.current, width])

    return (
        <div className={styles.container} ref={mainRef}>
            <Blurb count={state.count} delay={delay} />
            <TechStack delay={delay} count={state.count} />
            <Experience delay={delay} count={state.count} />
        </div>
    )
}

export default Main
