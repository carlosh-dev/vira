import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 140,      
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 10,
    },

    column: {
        flex: 1,
        flexDirection: "column",
        marginTop: 5,
    },

    row: {
        flex: 1,
        flexDirection: "row",
        color: '#fff',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },

    activeLED: {
        height: 9,
        width: 9,
        borderRadius: 99,
        backgroundColor: theme.colors.detail
    },

    offLED: {
        height: 9,
        width: 9,
        borderRadius: 99,
        backgroundColor: theme.colors.offLED
    },
    
})