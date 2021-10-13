import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 20,
    },

    image: {
        width: Dimensions.get('window').width * 0.7,
        height: 300,
    },

    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        fontFamily: theme.fonts.textBold,
    },

    subtitle: {
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
        fontFamily: theme.fonts.textRegular,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        width: 50,
        height: 50,
        borderRadius: 99,
    },

    buttonText: {
        color: '#fff',
        fontFamily: theme.fonts.textBold,
        fontSize: 30,
    }



})