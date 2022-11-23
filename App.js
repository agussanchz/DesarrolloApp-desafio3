import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header/Header';
import StarGame from './src/screen/StarGame/StarGame';


export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Bienvenidos a AsGame' />
      <StarGame />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
