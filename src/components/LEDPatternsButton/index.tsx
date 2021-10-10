import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../components/LEDPatternsButton/styles';

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

    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
            <View style={styles.column}>
                {dots}
            </View>
        </TouchableOpacity>

)};