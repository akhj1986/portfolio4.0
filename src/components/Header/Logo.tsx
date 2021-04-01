import React, { useEffect, useRef } from 'react'
import styles from './style.module.sass'

interface Props {
    onFadeInHeader: (value: boolean) => void
}

const Logo: React.FC<Props> = (props) => {
    const canvasRef = useRef<null | HTMLCanvasElement>(null)

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')

            if (ctx) {
                draw(ctx)
            }
        }
    }, [])

    const draw = (ctx: CanvasRenderingContext2D) => {
        const cH = ctx.canvas.height
        const cW = ctx.canvas.width
        let firstCount = 0
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
            console.log('count1', firstCount)
            ctx.clearRect(0, 0, cW, cH)
            ctx.fillStyle = 'rgba(0, 118, 218, 0.8)'

            // 8
            ctx.fillStyle = '#76DA00' // green
            ctx.fillRect(
                500,
                firstCount < 250 ? cH - firstCount : cH - 250,
                10,
                firstCount < 250 ? cH - firstCount : 250
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
            ctx.fillStyle = 'rgba(218, 0, 118, 0.8)' //pink
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

            firstCount += 2

            if (firstCount >= 250) {
                secondCount += 2
            }

            if (firstCount >= 300) {
                thirdCount += 2
            }

            if (firstCount >= 350) {
                fourthCount += 2
            }

            if (firstCount >= 400) {
                fifthCount += 2
            }

            if (firstCount >= 450) {
                sixthCount += 2
            }

            if (firstCount >= 500) {
                seventhCount += 2
            }

            if (firstCount >= 550) {
                eighthCount += 2
            }

            if (firstCount >= 600) {
                ninthCount += 2
            }

            if (firstCount >= 700) {
                tenthCount += 2
            }

            if (firstCount >= 750) {
                eleventhCount += 2
            }

            if (firstCount >= 800) {
                twelthCount += 2
            }

            if (firstCount >= 850) {
                thirteenthCount += 2
            }

            if (firstCount >= 900) {
                fourteenthCount += 2
            }

            if (firstCount >= 950) {
                fifteenthCount += 2
            }

            if (firstCount >= 1000) {
                sixteenthCount += 2
            }

            if (firstCount >= 1050) {
                seventeenthCount += 2
            }

            if (firstCount >= 1100) {
                eighteenthCount += 2
            }

            if (firstCount >= 1150) {
                nineteenthCount += 2
            }

            if (firstCount > 1000) {
                props.onFadeInHeader(true)
            }

            if (firstCount > 1350) {
                clearInterval(interval)
            }
        }

        const interval = setInterval(animate, 1)
    }

    return (
        <div className={styles.container}>
            <canvas
                className={styles.gameCanvas}
                ref={canvasRef}
                width="1000"
                height="600"
            />
        </div>
    )
}

export default Logo
