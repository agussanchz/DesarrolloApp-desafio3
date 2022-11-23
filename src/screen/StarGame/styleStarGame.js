import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        color: '#DDA15E',
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
        borderBottomWidth: 1,
        borderBottomColor: '#bc6c25',
        minWidth: 70,
        fontSize: 20,
        paddingVertical: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginVertical: 10
    }
})
