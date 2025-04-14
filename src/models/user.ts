import { Budget } from "./budget"
import { Award, UserStats } from "./statistics"

export interface User {
    username: string
    passwordHash?: string
    awards: Award[]
    stats: UserStats
    budget?: Budget
    mainCurrency: string
}