export type AppDictionary = {
    IncrementMessage: string
    DecrementMessage: string
}

export interface ICounter {
    incrementCounter: () => void
    decrementCounter: () => void
    getCounter: () => number
}