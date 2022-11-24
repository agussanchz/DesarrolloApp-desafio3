import React from 'react'
import { View, Text, Button } from 'react-native'
import Card from '../../components/Card/Card'
import NumberContainer from '../../components/NumberContainer/NumberContainer'
import Colors from '../../constants/Colors'
import { styles } from './styleGameScreen'


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

export default function GameScreen({ selectedNumber }) {

  const [currentGuess, setCurrentGuess] = React.useState(generateRandomNumber(1, 100, selectedNumber))

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Numero del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.containerButton}>
          <Button
            title="Menor"
            //onPress={() => onHandleNextGuess('menor')}
            color={Colors.secondary}
          />
          <Button
            title="Mayor"
            //onPress={() => onHandleNextGuess('mayor')}
            color={Colors.primary}
          />
        </View>
      </Card>
    </View>
  )
}
