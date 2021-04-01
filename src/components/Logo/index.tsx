import React, { useRef } from 'react'
import styles from './style.module.sass'

const Logo: React.FC = () => {
    const canvasRef = useRef<null | HTMLCanvasElement>(null)

    return (
        <div className={styles.container}>
            <canvas
                className={styles.gameCanvas}
                ref={canvasRef}
                width="500"
                height="500"
            />
        </div>
    )
}

export default Logo
