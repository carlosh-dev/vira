import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        width: '100%'
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },

    emoji: {
        fontSize: 30,
        marginBottom: 10,
    },

    head: {
        height: '10%',
        width: '100%',
        paddingTop: 30,
        backgroundColor: theme.colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    goBackButton: {
        flex: 1,
        fontFamily: theme.fonts.textMedium,
        fontSize: 20,
        color: theme.colors.white,
    },

    title: {
        fontFamily: theme.fonts.textBold,
        fontSize: 20,
        color: theme.colors.white,
        textAlign: 'center',
        flex: 4,
    },

    text: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 20,
        color: theme.colors.white,
        textAlign: 'center',
    },

    subtext: {
        fontFamily: theme.fonts.textRegular,
        fontSize: 18,
        color: theme.colors.white,
        textAlign: 'center',
    },

    bold: {
        fontWeight: 'bold',
    },

    input: {
        borderRadius: 99,
        borderBottomWidth: 3,
        width: '100%',
        height: 40,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: theme.colors.white,
        marginBottom: 10,
    },

    containerLED: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    row: {
        flexDirection: 'row',
        width: '100%',
    },

    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})