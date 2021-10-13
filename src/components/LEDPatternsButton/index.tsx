import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../../components/LEDPatternsButton/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

interface Props {
    matrix: any,
}

export function LEDPatternButton({
    matrix,
}: Props){

    const dots = matrix.map((array:any, indexY:any) => 
        <View style={styles.row} key={indexY}>
            {array.map((value:any, indexX:any) =>
                value === 1 ? 
                    <View style={styles.activeLED} key={indexX}/>
                    : 
                    <View style={styles.offLED} key={indexX}/>
            )}
        </View>
    );
    const { buttonGradientUp, buttonGradientDown } = theme.colors;

    return(
        <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient 
                style={styles.container}
                colors={[ buttonGradientUp, buttonGradientDown ]}
                start={{ x: 0.2, y: 0.5 }} >
                <View style={styles.column}>
                    {dots}
                </View>
            </LinearGradient>
        </TouchableOpacity>

)};