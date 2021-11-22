import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: theme.colors.background
    },

    animation: {
        backgroundColor: 'transparent',
        width: 150,
        height: 150,
    },

    loadText: {
        fontFamily: theme.fonts.textMedium,
        color: "white",
        fontSize: 20,
    },
    
});

export default styles;