import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontStyle: 'normal',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },

    picker: {
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#bdc3c7', 
        overflow: 'hidden', 
        backgroundColor: "#FFF"
    },
        
    input: {
        width: 250,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 20,
        fontSize: 20,
        textAlign: 'center',
    }
})