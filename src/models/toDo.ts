
export enum TimeRates {
    DAILY= 'Daily',
    WEEKLY='Weekly',
    MONTHLY='Monthly',
    ANNUALLY='Annually',
    ONCE='Once',
    CUSTOM='Custom'
}

export enum DaysOfWeek {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
}

export interface TimeRate {
    time: string 
    rate: TimeRates
    customDays: DaysOfWeek[]
}

export interface TaskPriorities {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    HIGHEST: 'Highest'
}
  
export interface ToDo {
    name: string
    description: string
    priority: TaskPriorities
    deadLine?:string
    repetitive?: boolean
    repetitionRate?:TimeRate
    remember?:boolean
    rememberRate?: TimeRate
}