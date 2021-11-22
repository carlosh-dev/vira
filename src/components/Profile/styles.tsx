import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },

    greetings: {
        color: '#fff',
        fontSize: 25,
        fontFamily: theme.fonts.textRegular,
        marginTop: 10,
        marginBottom: -10,
    },

    userName: {
        color: '#fff',
        fontSize: 35,
        fontFamily: theme.fonts.textBold,
    },

});