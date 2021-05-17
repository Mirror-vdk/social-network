
import dialogsReducer, {actions} from "./dialogs-reducer";

let state = {
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
    ]
}
test('length of messages should be incremented', () => {
    let action = actions.sendMessage("Тест")
    let newState = dialogsReducer(state,action)
    expect(newState.messages.length).toBe(6)
});