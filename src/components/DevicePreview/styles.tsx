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
        width: 130,
        height: 105,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: theme.colors.primary
    },

    solarPanel: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
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
        alignItems: 'center',
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

    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: theme.colors.secondary,
    }

})