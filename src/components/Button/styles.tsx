import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        minWidth: 50,
        paddingHorizontal: 10,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        paddingHorizontal: 10,
    },
    
    title: {
        fontSize: 20,
        fontFamily: theme.fonts.textRegular,
        color: theme.colors.white,
    },
    
});