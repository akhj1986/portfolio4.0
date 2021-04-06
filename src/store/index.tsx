import React, { createContext, useReducer } from 'react'

type State = {
    count: number
}

type IncrementCount = {
    type: 'INCREMENT_COUNT'
    payload: number
}

type ActionTypes = IncrementCount

interface IContextProps {
    state: State
    dispatch: React.Dispatch<ActionTypes>
}

const logAction = (action: ActionTypes, prevState: State, nextState: State) => {
    const isDev = process.env.NODE_ENV === 'development'

    if (isDev) {
        console.info(`PREV STATE:`, prevState)
        console.info(`ACTION: ${action.type}`, action.payload)
        console.info('NEXT STATE:', nextState)
    }
}

export const actions = {
    incrementCount: (value: number): IncrementCount => ({
        type: 'INCREMENT_COUNT',
        payload: value,
    }),
}

const initialState: State = {
    count: 0,
}

export const store = createContext({} as IContextProps)

const { Provider } = store

const reducer = (state: State, action: ActionTypes) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {
                ...state,
                count: action.payload,
            }
        default:
            return state
    }
}

const logReducer = (state: State, action: ActionTypes) => {
    const nextState = reducer(state, action)

    logAction(action, state, nextState)

    return nextState
}

const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(logReducer, initialState)
    const value = { state, dispatch }

    return <Provider value={value}>{children}</Provider>
}

export default StateProvider
