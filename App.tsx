import React, { useState } from 'react'
import { Button } from 'react-native'
import { Dictionary } from './App.constants'
import { styles } from './App.styles'
import { ICounter } from './App.types'
import { Text, View } from './dependencies'

export default function App() {
    const Counter: ICounter = (() => {
        const [count, setCounter] = useState<number>(0)
        return {
            incrementCounter: () => setCounter(count + 1),
            decrementCounter: () => setCounter(count - 1),
            getCounter: () => count
        }
    })()
    
    return (
        <View style={styles.container}>
            <Text nativeID='counter-text'>Current count = {Counter.getCounter()}</Text>
            <Button title={Dictionary.IncrementMessage} onPress={Counter.incrementCounter}></Button>
            <Button title={Dictionary.DecrementMessage} onPress={Counter.decrementCounter}></Button>
        </View>
    );
}