import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        color: '#fff',
        fontSize: 30,
        fontFamily: theme.fonts.textRegular,
    },

    titleBold: {
        color: '#fff',
        fontSize: 40,
        fontFamily: theme.fonts.textBold,
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 30,
    },

    addButton: {
        backgroundColor: theme.colors.detail,
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },

    content: {
        padding: 20,
    },

    flatList: {
        height: '86%',
    }
    
})