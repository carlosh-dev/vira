import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    dot: {
        width: 30,
        height: 30,
        borderRadius: 99,
        margin: 5,
        backgroundColor: theme.colors.offLED,
    },

    actived: {
        backgroundColor: theme.colors.activeLED,
    },

    
});