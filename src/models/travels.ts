import { Activity } from "./activity"
import { Currency } from "./budget"
import { Location } from "./location"

export enum BookingTypes {
    RESTAURANT = 'Restaurant',
    HOTEL = 'Hotel'
}

export interface Booking {
    name: string
    description: string
    date: string
    type: BookingTypes
    cost: Currency
}

export interface Travel {
    name: string
    description: string
    destination: Location
    arrivalTime: string
    departureTime: string
    budget: Currency
    totalCost: Currency
    bookings: Booking[]
    activities: Activity[]
}