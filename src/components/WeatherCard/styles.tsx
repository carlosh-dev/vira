import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },

    iconCircle: {
        width: 75,
        height: 70,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },

    icon: {
        
    },

    textContainer: {
        flexDirection: 'column',
    },

    title: {
        fontFamily: theme.fonts.textBold,
        fontSize: 20,
        color: theme.colors.white,
        marginBottom: -7
    },

    subtitle: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 12,
        color: theme.colors.white,
    },

    text: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 60,
        color: theme.colors.white,
    },

    celsius: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 30,
        color: theme.colors.white,
        marginRight: 15,
    },

    minMax: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 12,
        color: theme.colors.white,
        marginTop: -20
    },

    weather: {
        flexDirection: 'row',
    },

    image: {
        width:100,
        height: 70,
    },

    imageBackground: {
        alignItems: 'center',
        width: '100%',
        
        marginVertical: 10,
    },


});