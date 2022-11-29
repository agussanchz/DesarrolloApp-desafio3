import React from 'react'
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
//Importacion de mis componentes
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import NumberContainer from '../../components/NumberContainer/NumberContainer'
import Colors from '../../constants/Colors'
//Importacion de los estilos
import { styles } from './styleStarGame'


export default function StarGame({ onStartGame }) {
    const [number, setNumber] = React.useState('')
    const [selectedNumber, setSelectedNumber] = React.useState(null);
    const [confirmed, setConfirmed] = React.useState(false);

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }

    const onHandleReset = () => {
        setNumber('')
        setConfirmed(false)
    }

    const onHandleConfirm = () => {
        const chosenNumber = parseInt(number, 10);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Numero Invalido', 'El número tiene que estar entre 1 y 99', [{ text: 'Okay', style: 'destructive', onPress: onHandleReset }]);
        } else {
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumber('');
        }
    }


    const confirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Numero seleccionado</Text>
            <NumberContainer number={selectedNumber} />
            <Button
                title="JUGAR"
                onPress={() => onStartGame(selectedNumber)}
                color={Colors.primary}
            />
        </Card>
    ) : null;


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'padding'} style={styles.containerScroll}>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <ScrollView style={styles.containerScroll}>
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
                                    onPress={onHandleReset}
                                    color={Colors.primary}
                                />
                                <Button
                                    style={styles.button}
                                    title='Confirmar'
                                    onPress={onHandleConfirm}
                                    color={Colors.primary}
                                />
                            </View>
                        </Card>
                        {confirmedOutput()}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
