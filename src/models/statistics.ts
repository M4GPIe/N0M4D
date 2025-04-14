import { Currency } from "./budget"

export interface Award {
    name: string
    description: string
    achieved: boolean
    percentageOfUsers: number
}

export interface UserStats {
    awardsAchieved: number
    countriesVisited: string[]
    regionsVisited: string[]
    activities: number
    travels: number
    totalSpend: Currency
}