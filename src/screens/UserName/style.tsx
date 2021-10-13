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

    text: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 20,
        color: theme.colors.white,
        textAlign: 'center',
        marginBottom: 20,
    },

    input: {
        borderRadius: 99,
        width: '100%',
        height: 40,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: theme.colors.white,
        marginBottom: 30,
    }


    
    
})