import { LOGIN_CHANGED, User, UserActionTypes } from "../Types";

const initialState: User = {
    id: 0,
    departman: '',
    name: '',
    password: ''
}

export function userReducer(state = initialState, action: UserActionTypes): User {
    switch (action.type) {
        case LOGIN_CHANGED:
            return state = action.payload
        // return {
        //     id: action.payload.id,
        //     departman: action.payload.departman,
        //     name: action.payload.name,
        //     password: action.payload.password,
        // }

        default:
            return state;
    }
}