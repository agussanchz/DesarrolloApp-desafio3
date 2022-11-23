import React from 'react'
import { View, Text, TextInput, Button} from 'react-native'
import Card from '../../components/Card/Card'
import { styles } from './styleStarGame'


export default function StarGame() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>¡Vamos a jugar!</Text>
        <Card style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Elija un numero</Text>
            <TextInput style={styles.input} placeholder='0'/>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Resetear'
                    onPress={() => null}
                    color= '#d4a373'
                />
                <Button 
                    style={styles.button}
                    title='Confirmar'
                    onPress={() => null}
                    color= '#d4a373'
                />
            </View>
        </Card>   
    </View>
  )
}
