import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        width: 57,
        height: 57,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: theme.colors.detail,
    },

    image: {
        width: 52,
        height: 52,
        borderRadius: 99,
    }
});