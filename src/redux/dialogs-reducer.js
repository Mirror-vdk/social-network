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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default dialogsReducer