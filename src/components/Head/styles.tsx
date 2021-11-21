import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        height: '12%',
        width: '100%',
        paddingTop: 40,
        backgroundColor: theme.colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
    },

    goBackButton: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 30,
        color: theme.colors.white,
        marginHorizontal: 10,
    },

    title: {
        fontFamily: theme.fonts.textBold,
        fontSize: 30,
        color: theme.colors.white,
        textAlign: 'center',
        
    },
});

export default styles;