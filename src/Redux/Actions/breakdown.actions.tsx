import {
    ADD_BREAKDOWN,
    Breakdown,
    BreakdownActionTypes,
    ADD_SOLUTION,
    SolutionCenter,
} from "../Types";

export function addBreakdown(breakdowns: Breakdown): BreakdownActionTypes {
    return {
        type: ADD_BREAKDOWN,
        payload: breakdowns
    }
}

export function addSolution(solution: SolutionCenter): BreakdownActionTypes {
    console.log(`addSolution`, solution)
    return {
        type: ADD_SOLUTION,
        payload: solution
    }
}