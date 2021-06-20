import { LOGIN_CHANGED, User, UserActionTypes } from "../Types";


export function loginAction(user: User): UserActionTypes {
    return {
        type: LOGIN_CHANGED,
        payload: user
    }
}