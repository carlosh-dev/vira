import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },

    buttonRemove: {
        width: 100,
        height: 105,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -10,
        marginTop: 12,
        position: 'relative',
        right: 14,
        backgroundColor: theme.colors.red,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    
    patterns: {
        height: 90,
        width: 90,      
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
        alignItems: 'center',
    },

    dotLED: {
        height: 7,
        width: 7,
        borderRadius: 99,
    },

    activeLED: {
        backgroundColor: theme.colors.detail,
    },

    offLED: {
        backgroundColor: theme.colors.offLED,
    },

    title: {
        fontSize: 40,
        fontFamily: theme.fonts.textMedium,
        color: theme.colors.white,
        marginLeft: 10,
        alignSelf: "flex-start"
    },
});