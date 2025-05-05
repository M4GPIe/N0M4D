import { CalendarMonth, Checklist, FlightTakeoff, Grade, Hiking, Home, LocationPin, Paid } from "@mui/icons-material"
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react"

interface SideBarItem {
    name: string,
    icon: ReactNode | (OverridableComponent<SvgIconTypeMap<{}, "svg">>),
    url: string
}



export const sideBarItems: SideBarItem[] = [
    {
        name: 'Home',
        icon: Home,
        url: '/home'
    },
    {
        name: 'Wishlist',
        icon: Grade,
        url: '/wishlist'
    },
    {
        name: 'Travels',
        icon: FlightTakeoff,
        url: '/travels'
    },
    {
        name: 'Activities',
        icon: Hiking,
        url: '/activities'
    },
    {
        name: 'Locations',
        icon: LocationPin,
        url: '/locations'
    },
    {
        name: 'Budget',
        icon: Paid,
        url: '/buget'
    },
    {
        name: 'Schedule',
        icon: CalendarMonth,
        url: '/schedule'
    },
    {
        name: 'TODOs',
        icon: Checklist,
        url: '/todos'
    },
]