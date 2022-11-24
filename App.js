import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Header from './src/components/Header/Header';
import GameScreen from './src/screen/GameScreen/GameScreen';
import StarGame from './src/screen/StarGame/StarGame';
import { useFonts } from 'expo-font'
import Colors from './src/constants/Colors';
 

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular' : require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold' : require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic' : require('./assets/fonts/Lato-Italic.ttf')
  })

  const [userNumber , setUserNumber] = React.useState(null)

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StarGame onStartGame={onStartGame} />

  if(userNumber){
    content = <GameScreen selectedNumber={userNumber}/>
  }

  if (!loaded) {
    return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color={Colors.primary} />
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title={userNumber ? 'AsGame' : 'Bienvenidos a AsGame'} />   
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
