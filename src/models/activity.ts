import { Currency } from "./budget"
import { Location } from "./location"

export interface ActivityType {
    name: string
    icon: string
    color: string
}

export interface Activity {
    name: string
    description: string
    type: ActivityType
    cost?: Currency
    location?: Location
    date?: string
}

export interface WishList {
    activities: Activity[]
    destinations: Location[]
}