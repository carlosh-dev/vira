import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        alignItems: 'center',
        backgroundColor: theme.colors.secondary,
        borderRadius: 20,
        padding: 5,
        marginVertical: 10,
    },

    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 99,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },

    icon: {

    },

    textContainer: {
        flexDirection: 'column',
        width: '100%'
    },

    title: {
        fontFamily: theme.fonts.textBold,
        fontSize: 25,
        color: theme.colors.white,
        marginBottom: -7

    },

    text: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 13,
        color: theme.colors.white
    }


});