import {authMe} from "./auth-reducer";
import {InferActionTypes} from "./redux-store";


export type InitialStateType = typeof initialState
export type ActionsType = InferActionTypes<typeof actions>
    


let initialState = {
   initialized: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS':
            return  {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
   let promise = dispatch(authMe())
    Promise.all([promise])
        .then(() => {
        dispatch(actions.initializedSuccess())
    })
}


export default appReducer