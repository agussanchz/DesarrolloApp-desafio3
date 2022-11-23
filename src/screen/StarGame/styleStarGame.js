import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        color: Colors.secondary,
        textAlign: 'center'
    },
    inputContainer: {
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    inputTitle: {
        fontSize: 15,
        marginVertical: 5
    },
    input: {
        textAlign: "center",
        minWidth: 70,
        fontSize: 20, 
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    confirmedContainer: {
        width: '80%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    confirmedTitle: {
        fontSize: 16
    },
})
