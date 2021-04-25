const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

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

const dialogsReducer = (state = initialState, action: any) : initialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText
            return {...state, messages: [...state.messages, {id: 6, message: body}] }
        default:
            return state
    }
}


type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}

export const sendMessageCreator = (newMessageText : string) : sendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageText})




export default dialogsReducer