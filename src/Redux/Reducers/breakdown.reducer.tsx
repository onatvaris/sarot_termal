import { ADD_BREAKDOWN, ADD_SOLUTION, BreakdownActionTypes, UserBreakdownInterface } from "../Types";

const initialState: UserBreakdownInterface = {
    breakdowns: []
}

export function breakdownReducer(state = initialState, action: BreakdownActionTypes): UserBreakdownInterface {
    switch (action.type) {
        case ADD_BREAKDOWN:
            return {
                breakdowns: [...state.breakdowns, action.payload]
            }
        case ADD_SOLUTION:
            console.log(`action`, action.payload)
            state.breakdowns.find((arr, index) => {
                if (arr.no === action.payload.breakdownNo) {
                    state.breakdowns[index].solution = action.payload
                }
            })
            return state
        default:
            return state;
    }
}