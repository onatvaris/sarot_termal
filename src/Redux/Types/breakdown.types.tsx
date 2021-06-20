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
    status: string
}
// userbreakdown type
export interface UserBreakdownInterface {
    breakdowns: Breakdown[]
}

export const ADD_BREAKDOWN = 'ADD_BREAKDOWN'

interface AddBreakdown {
    type: typeof ADD_BREAKDOWN,
    payload: Breakdown
}

export type BreakdownActionTypes = AddBreakdown