import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.15,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Lato-Regular'
    }
})