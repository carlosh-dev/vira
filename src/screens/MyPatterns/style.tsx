import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
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
    },

    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },

    emptyTitle: {
        fontFamily: theme.fonts.textBold,
        fontSize: 30,
        color: theme.colors.white,
    },

    emoji: {
        fontSize: 60,
        marginBottom: 10,
    },

    emptySubtitle: {
        fontFamily: theme.fonts.textMedium,
        fontSize: 20,
        color: theme.colors.white,
        textAlign: 'center'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        
    },

    modalView: {
        margin: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },

        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 1
    },
    
    buttonSide: {
        borderRadius: 20,
        padding: 10,
        elevation: 10,
        backgroundColor: theme.colors.detail,
        margin: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },

        shadowOpacity: 0.1,
        shadowRadius: 0,
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        color: theme.colors.white,
        fontFamily: theme.fonts.textMedium,
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
    },

    row: {
        flexDirection: 'row'
    },

    buttonCancel: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 50, 
        borderRadius: 20, 
        backgroundColor: theme.colors.secondary,
        marginTop: 20, 
    },

    buttonCancelText: {
        color: theme.colors.white,
        fontFamily: theme.fonts.textMedium
    },

    buttonDoneText: {
        color: theme.colors.offLED,
        fontFamily: theme.fonts.textMedium
    },

    buttonDone: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50, 
        borderRadius: 20, 
        backgroundColor: theme.colors.detail,
        marginTop: 20, 
    },

    
})