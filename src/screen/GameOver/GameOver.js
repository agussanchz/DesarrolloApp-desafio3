import React from 'react'
import { View, Image, Button, Text, Dimensions } from 'react-native'
import Card from '../../components/Card/Card'
import Colors from '../../constants/Colors'
import { styles } from './styleGameOver'

export default function GameOver({ rounds, selectedNumber, onRestart }) {
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait);
    }

    React.useEffect(() => {
        const suscription = Dimensions.addEventListener('change', statePortrait);

        return () => {
            suscription.remove();
        }
    });

    return (
        <View style={styles.container}>
            <Card style={isPortrait ? styles.content : styles.contentLandscape}>
                <Image
                    source={{ uri: 'https://media.istockphoto.com/id/1307986275/vector/pixel-game-over-8-bit-pixel-game-over-vector-background.jpg?s=612x612&w=0&k=20&c=j-uRfBuSrlAA712SuHiBpvOBcmjsY3r9v_hJWB1ECCI=' }}
                    style={styles.image}
                />
                <View style={styles.contentDetails}>
                    <Text style={styles.textContent}>Rondas: {rounds}</Text>
                    <Text style={styles.textContent}>Numero seleccionado: {selectedNumber}</Text>
                    <Button
                        title="Reiniciar"
                        onPress={onRestart}
                        color={Colors.primary}
                    />
                </View>
            </Card>
        </View>
    )
}
