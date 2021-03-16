import {valueMock} from "redux-form/lib/util/eventMocks";

export const required = value => {
    if (value) return undefined
    return 'Обязательное поле';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length ${maxLength} symbols`
    return undefined
}
