import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import Card from '../../components/Card/Card'
import NumberContainer from '../../components/NumberContainer/NumberContainer'
import Colors from '../../constants/Colors'
import { styles } from './styleGameScreen'

//Funcion para generar un numero aleatorio
const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return randomNumber
  }
}

export default function GameScreen({ selectedNumber, onGameOver }) {
  //Hook de estado
  const [ currentGuess, setCurrentGuess ] = React.useState(generateRandomNumber(1, 100, selectedNumber))
  const [ rounds, setRounds ] = React.useState(0)
  //Hook de referencia
  const currentLow = React.useRef(1)
  const currentHigh = React.useRef(100)

  //Funcion para la logica de los botones 'menor' y 'mayor'
  const onHandleNextGuess = (direction) => {
    if (direction === 'menor' && currentGuess < selectedNumber || direction === 'mayor' && currentGuess > selectedNumber) {
      Alert.alert('No mientas', 'Sabes que esto esta mal', [{ text: 'Perdon', style: 'cancel' }]);
      return;
    }
    if (direction === 'menor') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);

  }

  React.useEffect(() => {
    if(currentGuess === selectedNumber) {
        onGameOver(rounds);
    }
}, [currentGuess, selectedNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Numero del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.containerButton}>
          <Button
            title="Menor"
            onPress={() => onHandleNextGuess('menor')}
            color={Colors.secondary}
          />
          <Button
            title="Mayor"
            onPress={() => onHandleNextGuess('mayor')}
            color={Colors.primary}
          />
        </View>
      </Card>
    </View>
  )
}
