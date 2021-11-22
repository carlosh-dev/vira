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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 10,  
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
        marginTop: 20,
        color: theme.colors.white,
        fontFamily: theme.fonts.textMedium,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'justify',
    },

    row: {
        flexDirection: 'row'
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

    buttonDoneText: {
        color: theme.colors.offLED,
        fontFamily: theme.fonts.textMedium
    }

    
})