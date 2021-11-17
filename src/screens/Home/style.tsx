import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '30%',
        paddingHorizontal: 20,
    },

    content: {
        flex: 7,
        paddingHorizontal: 20,
        paddingTop: 10,
        alignItems: 'center',
    },
    
    texts: {
        width: '100%',
    },

    title: {
        fontSize: 30,
        color: '#fff',
        fontFamily: theme.fonts.textBold,
    },

    subtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
        fontFamily: theme.fonts.textRegular,
    },

    subtitleBold: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: theme.fonts.textBold,
    },

    
})