const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'И вам добрый день'},
        {id: 3, message: 'Как ваши дела?'},
        {id: 4, message: 'Отлично'},
        {id: 5, message: 'Учишь React?'},
    ],
    dialogs: [
        {id: 1, name: 'Вася'},
        {id: 2, name: 'Петя'},
        {id: 3, name: 'Коля'},
        {id: 4, name: 'Лина'},
        {id: 5, name: 'Женя'}
    ],
    newMessageText: '5555'
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {...state, newMessageText: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageText
            return {...state, newMessageText: '', messages: [...state.messages, {id: 6, message: body}] }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default dialogsReducer