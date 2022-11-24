import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Lato-Regular'
    }
})