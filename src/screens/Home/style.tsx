import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },

    header: {
        flex: 1.5,
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },

    containerHello: {
        
    },
    
    textHello: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        fontSize: 30,
        fontFamily: theme.fonts.textRegular,
    },

    textName: {
        color: '#fff',
        fontSize: 40,
        fontFamily: theme.fonts.textBold,
    },

    content: {
        flex: 7,
        backgroundColor: "#100F22",
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    texts: {
        width: '100%',
        justifyContent: 'center',
    },

    title: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: theme.fonts.textBold,
    },

    subtitle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: theme.fonts.textRegular,
    },

    patterns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },

    image: { 
        width: '100%',
        height: 200,
    }
    
})