import cx from 'classnames'
import { useWindowMeasure } from 'hooks'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { store } from 'store'
import styles from './style.module.sass'

interface Props {}

const Logo: React.FC<Props> = (props) => {
    const { state } = useContext(store)
    const canvasRef = useRef<null | HTMLCanvasElement>(null)
    const rightLineCanvasRef = useRef<null | HTMLCanvasElement>(null)
    const leftLineCanvasRef = useRef<null | HTMLCanvasElement>(null)
    const [fadeInHeader, setFadeInHeader] = useState(0)
    const startRightLineRef = useRef<boolean>(false)
    const startLeftLineRef = useRef<boolean>(false)
    const { height } = useWindowMeasure()

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d')

            if (ctx) {
                draw(ctx)
            }
        }

        if (rightLineCanvasRef.current) {
            const lineCtx = rightLineCanvasRef.current.getContext('2d')

            if (lineCtx) {
                drawRightLine(lineCtx)
            }
        }

        if (leftLineCanvasRef.current) {
            const lineCtx = leftLineCanvasRef.current.getContext('2d')

            if (lineCtx) {
                drawLeftLine(lineCtx)
            }
        }
    }, [])

    const drawLeftLine = (ctx: CanvasRenderingContext2D) => {
        // const cH = ctx.canvas.height
        // const cW = ctx.canvas.width
        // let count = 0
        // const animate = () => {
        //     ctx.clearRect(0, 0, cW, cH)
        //     // ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
        //     ctx.fillStyle = 'rgba(0,50,69, 0.2)' //primary
        //     ctx.fillRect(0, 0, 2, count)
        //     if (startLeftLineRef.current === true) {
        //         count += state.increment
        //     }
        //     if (count > state.contentHeight) {
        //         clearInterval(interval)
        //     }
        // }
        // const interval = setInterval(animate, 1)
    }

    const drawRightLine = (ctx: CanvasRenderingContext2D) => {
        // const cH = ctx.canvas.height
        // const cW = ctx.canvas.width
        // let count = 0
        // const animate = () => {
        //     ctx.clearRect(0, 0, cW, cH)
        //     // ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
        //     ctx.fillStyle = 'rgba(0,50,69, 0.2)' //primary
        //     ctx.fillRect(0, 0, 2, count)
        //     if (startRightLineRef.current === true) {
        //         count += state.increment
        //     }
        //     console.log('state', state.contentHeight, count)
        //     if (count > state.contentHeight) {
        //         clearInterval(interval)
        //     }
        // }
        // const interval = setInterval(animate, 1)
    }

    const draw = (ctx: CanvasRenderingContext2D) => {
        const cH = ctx.canvas.height
        const cW = ctx.canvas.width
        let secondCount = 0 //first = 250
        let thirdCount = 0 //first = 300
        let fourthCount = 0 //first = 350
        let fifthCount = 0 //first = 400
        let sixthCount = 0 // first = 450
        let seventhCount = 0 //first = 500
        let eighthCount = 0 //first = 550
        let ninthCount = 0 //first = 600
        let tenthCount = 0 //first = 700
        let eleventhCount = 0 //first = 750
        let twelthCount = 0 //first = 800
        let thirteenthCount = 0 //first = 850
        let fourteenthCount = 0 //first = 900
        let fifteenthCount = 0 //first = 950
        let sixteenthCount = 0 //first = 1000
        let seventeenthCount = 0 //first = 1050
        let eighteenthCount = 0 //first = 1100
        let nineteenthCount = 0 //first = 1150

        const animate = () => {
            ctx.clearRect(0, 0, cW, cH)
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)'

            // 8
            ctx.fillStyle = '#76DA00' // green
            ctx.fillRect(
                500,
                state.count < 250 ? cH - state.count : cH - 250,
                10,
                state.count < 250 ? cH - state.count : 250
            )
            ctx.fillRect(
                500,
                cH - 250,
                secondCount < 100 ? secondCount : 100,
                10
            )
            ctx.fillRect(
                600,
                cH - 250,
                10,
                fourthCount < 150 ? fourthCount : 150
            )

            // 6
            ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
            ctx.fillRect(300, cH - 400, 12, ninthCount < 100 ? ninthCount : 100)
            ctx.fillRect(
                fifthCount < 200 ? 300 + (200 - fifthCount) : 300,
                cH - 400,
                fifthCount < 200 ? fifthCount : 200,
                12
            )
            ctx.fillRect(
                500,
                secondCount < 150 ? cH - (250 + secondCount) : cH - 400,
                12,
                secondCount < 150 ? secondCount : 150
            )

            // // 13
            ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
            ctx.fillRect(
                850,
                cH - 100,
                thirteenthCount < 100 ? thirteenthCount : 100,
                12
            )
            ctx.fillRect(
                950,
                cH - 100,
                12,
                fifteenthCount < 100 ? fifteenthCount : 100
            )

            // // 11
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)' //blue
            ctx.fillRect(700, cH - 200, ninthCount < 150 ? ninthCount : 150, 10)
            ctx.fillRect(
                850,
                cH - 200,
                10,
                eleventhCount < 200 ? eleventhCount : 200
            )

            // // 10
            ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
            ctx.fillRect(
                550,
                thirdCount < 50 ? cH - (250 + thirdCount) : cH - 300,
                12,
                thirdCount < 50 ? thirdCount : 50
            )
            ctx.fillRect(
                550,
                cH - 300,
                fourthCount < 150 ? fourthCount : 150,
                12
            )
            ctx.fillRect(
                700,
                cH - 300,
                12,
                seventhCount < 300 ? seventhCount : 300
            )

            // // 7
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)' //blue
            ctx.fillRect(
                450,
                sixthCount < 100 ? cH - (400 + sixthCount) : cH - 500,
                10,
                sixthCount < 100 ? sixthCount : 100
            )
            ctx.fillRect(
                450,
                cH - 500,
                eighthCount < 100 ? eighthCount : 100,
                10
            )
            ctx.fillRect(
                ninthCount < 50 ? 550 + (50 - ninthCount) : 550,
                cH - 500,
                ninthCount < 50 ? ninthCount : 50,
                10
            )
            ctx.fillRect(
                600,
                fifthCount < 200 ? cH - (300 + fifthCount) : cH - 500,
                10,
                fifthCount < 200 ? fifthCount : 200
            )

            // // 9
            ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
            ctx.fillRect(
                550,
                cH - 100,
                10,
                eighthCount < 100 ? eighthCount : 100
            )
            ctx.fillRect(
                600,
                cH - 100,
                seventhCount < 50 ? seventhCount : 50,
                10
            )
            ctx.fillRect(
                seventhCount < 50 ? 600 - seventhCount : 550,
                cH - 100,
                seventhCount < 50 ? seventhCount : 50,
                10
            )
            ctx.fillRect(
                650,
                cH - 100,
                10,
                eighthCount < 100 ? eighthCount : 100
            )

            // // 12
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)' //blue
            ctx.fillRect(
                800,
                tenthCount < 100 ? cH - (200 + tenthCount) : cH - 300,
                10,
                tenthCount < 100 ? tenthCount : 100
            )
            ctx.fillRect(
                800,
                cH - 300,
                twelthCount < 100 ? twelthCount : 100,
                10
            )
            ctx.fillRect(
                900,
                cH - 300,
                10,
                fourteenthCount < 100 ? fourteenthCount : 100
            )
            ctx.fillRect(
                900,
                fourteenthCount < 100 ? cH - (100 + fourteenthCount) : cH - 200,
                10,
                fourteenthCount < 100 ? fourteenthCount : 100
            )

            // // 4
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)' //blue
            ctx.fillRect(
                250,
                cH - 300,
                10,
                eleventhCount < 300 ? eleventhCount : 300
            )
            ctx.fillRect(300, cH - 300, tenthCount < 50 ? tenthCount : 50, 10)
            ctx.fillRect(
                tenthCount < 50 ? 250 + (50 - tenthCount) : 250,
                cH - 300,
                tenthCount < 50 ? tenthCount : 50,
                10
            )
            ctx.fillRect(
                350,
                cH - 300,
                10,
                eleventhCount < 100 ? eleventhCount : 100
            )

            // // 5
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)' //blue
            ctx.fillRect(
                300,
                cH - 200,
                10,
                fourteenthCount < 200 ? fourteenthCount : 200
            )
            ctx.fillRect(
                350,
                cH - 200,
                thirteenthCount < 100 ? thirteenthCount : 100,
                10
            )
            ctx.fillRect(
                thirteenthCount < 50 ? 350 - thirteenthCount : 300,
                cH - 200,
                thirteenthCount < 50 ? thirteenthCount : 50,
                10
            )
            ctx.fillRect(
                450,
                cH - 200,
                10,
                fifteenthCount < 200 ? fifteenthCount : 200
            )

            // // 3
            ctx.fillStyle = '#76DA00' // green
            ctx.fillRect(
                150,
                cH - 150,
                10,
                sixteenthCount < 50 ? sixteenthCount : 50
            )
            ctx.fillRect(
                fourteenthCount < 100 ? 250 - fourteenthCount : 150,
                cH - 150,
                fourteenthCount < 100 ? fourteenthCount : 100,
                10
            )

            // 1
            ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
            ctx.fillRect(
                50,
                cH - 200,
                12,
                nineteenthCount < 200 ? nineteenthCount : 200
            )
            ctx.fillRect(
                sixteenthCount < 150 ? 200 - sixteenthCount : 50,
                cH - 200,
                sixteenthCount < 150 ? sixteenthCount : 150,
                12
            )
            ctx.fillRect(
                200,
                fifteenthCount < 50 ? cH - (150 + fifteenthCount) : cH - 200,
                12,
                fifteenthCount < 50 ? fifteenthCount : 50
            )

            // // 2
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)' //blue
            ctx.fillRect(
                100,
                cH - 100,
                12,
                eighteenthCount < 100 ? eighteenthCount : 100
            )
            ctx.fillRect(
                150,
                cH - 100,
                seventeenthCount < 50 ? seventeenthCount : 50,
                12
            )
            ctx.fillRect(
                seventeenthCount < 50 ? 150 - seventeenthCount : 100,
                cH - 100,
                seventeenthCount < 50 ? seventeenthCount : 50,
                12
            )
            ctx.fillRect(
                200,
                cH - 100,
                12,
                eighteenthCount < 100 ? eighteenthCount : 100
            )

            if (state.count >= 250) {
                secondCount += state.increment
            }

            if (state.count >= 300) {
                thirdCount += state.increment
            }

            if (state.count >= 350) {
                fourthCount += state.increment
            }

            if (state.count >= 400) {
                fifthCount += state.increment
            }

            if (state.count >= 450) {
                sixthCount += state.increment
            }

            if (state.count >= 500) {
                seventhCount += state.increment
            }

            if (state.count >= 550) {
                eighthCount += state.increment
            }

            if (state.count >= 600) {
                ninthCount += state.increment
            }

            if (state.count >= 700) {
                tenthCount += state.increment
            }

            if (state.count >= 750) {
                eleventhCount += state.increment
            }

            if (state.count >= 800) {
                twelthCount += state.increment
            }

            if (state.count >= 850) {
                thirteenthCount += state.increment
            }

            if (state.count >= 900) {
                fourteenthCount += state.increment
            }

            if (state.count >= 950) {
                fifteenthCount += state.increment
            }

            if (state.count >= 1000) {
                sixteenthCount += state.increment
            }

            if (state.count >= 1050) {
                seventeenthCount += state.increment
            }

            if (state.count >= 1100) {
                eighteenthCount += state.increment
            }

            if (state.count >= 1150) {
                nineteenthCount += state.increment
            }

            if (state.count > 600) {
                setFadeInHeader(state.count - 600)
            }

            if (state.count > 1050) {
                startRightLineRef.current = true
            }

            if (state.count > 1350) {
                clearInterval(interval)
                startLeftLineRef.current = true
            }
        }

        const interval = setInterval(animate, 1)
    }

    return (
        <div className={styles.logo}>
            <canvas
                className={styles.cityCanvas}
                ref={canvasRef}
                width="1000"
                height="600"
            />
            <canvas
                className={styles.leftLineCanvas}
                ref={leftLineCanvasRef}
                width="20"
                height={state.contentHeight}
            />
            <canvas
                className={styles.rightLineCanvas}
                ref={rightLineCanvasRef}
                width="20"
                height={state.contentHeight}
            />
            <span>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 0,
                    })}
                >
                    H
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 40,
                    })}
                >
                    a
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 80,
                    })}
                >
                    r
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 120,
                    })}
                >
                    r
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 160,
                    })}
                >
                    i
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 200,
                    })}
                >
                    s
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 240,
                    })}
                >
                    -
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 280,
                    })}
                >
                    J
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 320,
                    })}
                >
                    e
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 360,
                    })}
                >
                    d
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 400,
                    })}
                >
                    a
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 440,
                    })}
                >
                    m
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 480,
                    })}
                >
                    s
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 520,
                    })}
                >
                    k
                </h2>
                <h2
                    className={cx({
                        [styles.show]: fadeInHeader > 560,
                    })}
                >
                    i
                </h2>
            </span>
        </div>
    )
}

export default Logo
