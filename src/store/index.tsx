import React, { createContext, useReducer } from 'react'

type State = {
    siteOpen: boolean
}

type ActionTypes =
    | {
          type: 'CLOSE_SITE'
      }
    | {
          type: 'OPEN_SITE'
      }

interface Actions {
    [key: string]: ActionTypes
}

interface IContextProps {
    state: State
    dispatch: React.Dispatch<ActionTypes>
}

export const actions: Actions = {
    openSite: {
        type: 'OPEN_SITE',
    },
    closeSite: {
        type: 'CLOSE_SITE',
    },
}

const initialState: State = {
    siteOpen: false,
}

export const store = createContext({} as IContextProps)

const { Provider } = store

const reducer = (state: State, action: ActionTypes) => {
    switch (action.type) {
        case 'OPEN_SITE':
            return {
                ...state,
                siteOpen: true,
            }
        case 'CLOSE_SITE':
            return {
                ...state,
                siteOpen: false,
            }
        default:
            return state
    }
}

const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }

    return <Provider value={value}>{children}</Provider>
}

export default StateProvider
