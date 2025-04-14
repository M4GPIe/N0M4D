
export enum LocationTypes {
    CONTINENT='Continent',
    COUNTRY='Country',
    CITY='City',
    TOWN='Town',
    NATURAL_PARK='Natural Park',
    BEACH='Beach',
    MOUNTAIN='Mountain',
    OTHER='Other'
}

export interface Location {
    name: string
    description: string
    locationType: LocationTypes
    coords: number[]
    icon: string
}