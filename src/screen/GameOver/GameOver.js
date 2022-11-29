import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styleGameOver'

export default function GameOver({ rounds, selectedNumber, onRestart }) {
    return (
        <View style={styles.container}>
            <Text>Game Over</Text>
        </View>
    )
}
