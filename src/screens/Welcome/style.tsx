import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        fontFamily: theme.fonts.textBold,
    },
    
    bold: {
        fontFamily: theme.fonts.textBold,
    },

    animation: {
        backgroundColor: 'transparent',
        height: 450,        
        marginTop: -50,
    },
    
    subtitle: {
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
        fontFamily: theme.fonts.textRegular,
        width: '100%',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        width: '90%',
        height: 50,
        borderRadius: 99,
    },

    buttonText: {
        color: '#fff',
        fontFamily: theme.fonts.textBold,
        fontSize: 30,
    },

    image: {
        height: 300
    }



    



})