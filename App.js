import React from 'react';
//Importacion de los componentes de reactNative
import { StyleSheet, View, ActivityIndicator } from 'react-native';
//Importacion de los componentes
import Header from './src/components/Header/Header';
import GameScreen from './src/screen/GameScreen/GameScreen';
import StarGame from './src/screen/StarGame/StarGame';
import GameOver from './src/screen/GameOver/GameOver';
//Fuentes y colores
import { useFonts } from 'expo-font'
import Colors from './src/constants/Colors';
 

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular' : require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold' : require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic' : require('./assets/fonts/Lato-Italic.ttf')
  })

  const [userNumber , setUserNumber] = React.useState(null)
  const [guessRound, setGuessRound] = React.useState(0)


  const onGameOver = (rounds) => {
    setGuessRound(rounds)
  }

  const onRestart = () => {
    setUserNumber(null)
    setGuessRound(0)
  }

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StarGame onStartGame={onStartGame} />

  if (userNumber && guessRound <= 0) {
    content = <GameScreen selectedNumber={userNumber} onGameOver={onGameOver} />
  } else if (guessRound > 0) {
    content = <GameOver rounds={guessRound} selectedNumber={userNumber} onRestart={onRestart} />
  }

  if (!loaded) {
    return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color={Colors.primary} />
    </View>
    )
  }

  const getTitle = () => {
    let title;
    if(userNumber && guessRound <= 0) {
      title = 'Adivina un numero';
    } else if (guessRound > 0) {
      title = 'Juego finalizado';
    } else {
      title = 'Bienvenido';
    }
    return title;
  }

  return (
    <View style={styles.container}>
      <Header title={getTitle()} />   
      {content}
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
