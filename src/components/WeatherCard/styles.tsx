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

    text: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 50,
        color: theme.colors.white,
    },

    celsius: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 25,
        color: theme.colors.white,
    },

    weather: {
        
    },

    image: {
        width:100,
        height: 70,
    },

    imageBackground: {
        alignItems: 'center',
        width: '100%',
        height: 100,
        marginVertical: 10,
    },


});