export interface Currency {
    amount: number,
    currency: string,
    exchangeFee: number
}

export interface Budget {
    total: number
    mainCurrency: string,
    currencies: Currency[]
}

export enum TravelExpenseType {
    Transportation = "Transportation",
    Lodging = "Lodging",
    Meals = "Meals",
    Entertainment = "Entertainment",
    Miscellaneous = "Miscellaneous",
    Parking = "Parking",
    Fuel = "Fuel",
    Tolls = "Tolls",
    PerDiem = "PerDiem",
    BaggageFees = "BaggageFees"
  }


export interface Spending {
    type: TravelExpenseType
    description: string
    cost: Currency
    date: string
}