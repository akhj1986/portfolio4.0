import React, { createContext, useReducer } from 'react'

type State = {
    count: number
    increment: number
    contentHeight: number
}

type IncrementCount = {
    type: 'INCREMENT_COUNT'
    payload: number
}

type SetContentHeight = {
    type: 'SET_CONTENT_HEIGHT'
    payload: number
}

type ActionTypes = IncrementCount | SetContentHeight

interface IContextProps {
    state: State
    dispatch: React.Dispatch<ActionTypes>
}

export const actions = {
    incrementCount: (value: number): IncrementCount => ({
        type: 'INCREMENT_COUNT',
        payload: value,
    }),
    setContentHeight: (value: number): SetContentHeight => ({
        type: 'SET_CONTENT_HEIGHT',
        payload: value,
    }),
}

const initialState: State = {
    count: 0,
    increment: 4.5,
    contentHeight: 1500,
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
        case 'SET_CONTENT_HEIGHT': {
            return {
                ...state,
                contentHeight: action.payload,
            }
        }
        default:
            return state
    }
}

// const logReducer = (state: State, action: ActionTypes) => {
//     const nextState = reducer(state, action)

//     logAction(action, state, nextState)

//     return nextState
// }

const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }

    return <Provider value={value}>{children}</Provider>
}

export default StateProvider
