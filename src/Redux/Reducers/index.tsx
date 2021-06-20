import { combineReducers } from "redux";
import { breakdownReducer } from "./breakdown.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
    userResponse: userReducer,
    breakdownResponse: breakdownReducer
})

export type RootState = ReturnType<typeof rootReducer>