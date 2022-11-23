import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 5,
    },
    number: {
        fontSize: 20,
        fontFamily: 'Lato-Bold'
    }
})