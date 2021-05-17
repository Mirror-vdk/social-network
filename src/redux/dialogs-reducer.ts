import {InferActionTypes} from "./redux-store";


type DialogsType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'И вам добрый день'},
        {id: 3, message: 'Как ваши дела?'},
        {id: 4, message: 'Отлично'},
        {id: 5, message: 'Учишь React?'},
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Вася'},
        {id: 2, name: 'Петя'},
        {id: 3, name: 'Коля'},
        {id: 4, name: 'Лина'},
        {id: 5, name: 'Женя'}
    ] as Array<DialogsType>
}

export type initialStateType = typeof initialState
type ActionType = InferActionTypes<typeof actions>

export const actions = {
    sendMessage : (newMessageText : string) => ({type: 'dialogs/SEND-MESSAGE', newMessageText} as const)
}

const dialogsReducer = (state = initialState, action: ActionType) : initialStateType => {

    switch (action.type) {
        case 'dialogs/SEND-MESSAGE':
            let body = action.newMessageText
            return {...state, messages: [...state.messages, {id: 6, message: body}] }
        default:
            return state
    }
}



export default dialogsReducer