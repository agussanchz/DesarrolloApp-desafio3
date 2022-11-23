import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header/Header';
import GameScreen from './src/screen/GameScreen/GameScreen';
import StarGame from './src/screen/StarGame/StarGame';


export default function App() {

  const [userNumber , setUserNumber] = React.useState(null)

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StarGame onStartGame={onStartGame} />

  if(userNumber){
    content = <GameScreen selectedNumber={userNumber}/>
  }



  return (
    <View style={styles.container}>
      <Header title='Bienvenidos a AsGame' />   
      {content}
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
