import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        
        width: '45%',
        height: 150,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10
    },
    
    patterns: {
        height: 100,
        width: 100,      
        borderRadius: 7,
        padding: 5,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    column: {
        flex: 1,
        flexDirection: "column",
        width: '100%',
        height: '100%',
    },

    row: {
        flex: 1,
        flexDirection: "row",
        color: '#fff',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },

    dotLED: {
        height: 9,
        width: 9,
        borderRadius: 99,
    },

    activeLED: {
        backgroundColor: theme.colors.detail,
    },

    offLED: {
        backgroundColor: theme.colors.offLED,
    },

    title: {
        fontSize: 20,
        fontFamily: theme.fonts.textMedium,
        color: theme.colors.white,

    },
});