import { ADD_BREAKDOWN, Breakdown, BreakdownActionTypes, UserBreakdownInterface } from "../Types";

export function addBreakdown(breakdowns: Breakdown): BreakdownActionTypes {
    return {
        type: ADD_BREAKDOWN,
        payload: breakdowns
    }
}