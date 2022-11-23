import React from 'react'
import { View } from 'react-native'
import { styles } from './styleCard'

export default function Card({ children, style }) {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}
