import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './styleInput'

export default function Input({ style, ...props}) {
  return (
    <TextInput 
        {...props}
        style={{...styles.container, ...style}}
    />
  )
}
