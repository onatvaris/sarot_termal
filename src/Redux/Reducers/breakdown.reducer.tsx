import Breakdown from "../../Pages/Breakdown";
import { ADD_BREAKDOWN, BreakdownActionTypes, UserBreakdownInterface } from "../Types";

const initialState: UserBreakdownInterface = {
    breakdowns: []
}

export function breakdownReducer(state = initialState, action: BreakdownActionTypes): UserBreakdownInterface {
    switch (action.type) {
        case ADD_BREAKDOWN:
            return {
                breakdowns: [...state.breakdowns, action.payload]
            }

        default:
            return state;
    }
}