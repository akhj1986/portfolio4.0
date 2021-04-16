import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'
import React, { useContext, useEffect } from 'react'
import { actions, store } from 'store'

function App() {
    const { state, dispatch } = useContext(store)

    useEffect(() => {
        beginCount()
    }, [])

    const beginCount = () => {
        const increment = () => {
            dispatch(actions.incrementCount((state.count += state.increment)))

            if (state.count > state.contentHeight) {
                clearInterval(interval)
            }
        }

        const interval = setInterval(increment, 1)
    }

    return (
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    )
}

export default App
