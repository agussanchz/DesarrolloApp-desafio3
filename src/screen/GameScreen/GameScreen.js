import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styleGameScreen'

export default function GameScreen({ selectedNumber }) {
  return (
    <View style={styles.container}>
        <Text>{selectedNumber}</Text>
    </View>
  )
}
