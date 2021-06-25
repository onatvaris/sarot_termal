import { Breakdown } from './../Redux/Types/breakdown.types';


export type RootStackParamList = {
    Login: undefined
    Main: undefined
    Breakdown: { item: Breakdown }
    AddBreakdown: undefined
    SolutionCenter: { item: Breakdown }
};