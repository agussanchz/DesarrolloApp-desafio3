import React from 'react'
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
//Importacion de mis componentes
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import Colors from '../../constants/Colors'
//Importacion de los estilos
import { styles } from './styleStarGame'


export default function StarGame() {
    const [number, setNumber] = React.useState('')

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }

    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>¡Vamos a jugar!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Elija un numero</Text>
                    <Input
                        style={styles.input}
                        placeholder='0'
                        maxLength={2}
                        keyboardType='number-pad'
                        blurOnSubmit
                        autoCapitalization='none'
                        autoCorrect={false}
                        onChangeText={onHandleChange}
                        value={number}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Resetear'
                            onPress={() => null}
                            color={Colors.primary}
                        />
                        <Button
                            style={styles.button}
                            title='Confirmar'
                            onPress={() => null}
                            color={Colors.primary}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}
