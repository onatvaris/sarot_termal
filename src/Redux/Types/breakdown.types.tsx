import { User } from "./user.types";
// breakdown type
export interface Breakdown {
    no: number
    date: string
    time: string
    project: string
    location: string
    category: string
    info: string
    user: User
    solution?: SolutionCenter
}

export interface SolutionCenter {
    breakdownNo: number
    image: string
    date: string
    time: string
    status: string
    user: User
}

// userbreakdown type
export interface UserBreakdownInterface {
    breakdowns: Breakdown[]
}

export const ADD_BREAKDOWN = 'ADD_BREAKDOWN'
export const ADD_SOLUTION = 'ADD_SOLUTION'
interface AddBreakdown {
    type: typeof ADD_BREAKDOWN,
    payload: Breakdown
}

interface AddSolution {
    type: typeof ADD_SOLUTION,
    payload: SolutionCenter
}
export type BreakdownActionTypes = AddBreakdown | AddSolution