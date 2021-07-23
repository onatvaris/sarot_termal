// user modeli
export interface User {
    id: number
    name: string
    password: string
    departman: string
    rememberMe: boolean
}

export const LOGIN_CHANGED = "LOGIN_CHANGED"

// LOGIN PAYLOAD
interface LoginAction {
    type: typeof LOGIN_CHANGED,
    payload: User
}

export type UserActionTypes = LoginAction