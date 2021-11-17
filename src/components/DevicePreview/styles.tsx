import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    ledContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: 110,    
        padding: 2,
        backgroundColor: theme.colors.primary,
        borderRadius: 7,
        marginLeft: -1,
        marginRight: -1,
    },

    solarPanelContainer: {
        width: 120,
        height: 107,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: theme.colors.primary
    },

    solarPanel: {
        backgroundColor: '#141414',
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    
    patterns: {
        height: 100,
        width: 100,      
        borderRadius: 10,
        padding: 5,
        backgroundColor: theme.colors.secondary,
    },
    
    column: {
        flex: 1,
        flexDirection: "column",
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
    
})