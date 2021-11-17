import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../DevicePreview/styles';

interface Props {
    matrixLeft: any,
    matrixRight: any,
}

export function DevicePreview({
    matrixLeft,
    matrixRight,
}: Props){

    const dotsLeft = matrixLeft.map((array:any, indexY:any) => 
        <View style={styles.row} key={indexY}>
            {array.map((value:any, indexX:any) =>
                value === 1 ? 
                    <View style={[ styles.dotLED, styles.activeLED ]} key={indexX}/>
                    : 
                    <View style={[ styles.dotLED, styles.offLED ]} key={indexX}/>
            )}
        </View>
    );

    const dotsRight = matrixRight.map((array:any, indexY:any) => 
        <View style={styles.row} key={indexY}>
            {array.map((value:any, indexX:any) =>
                value === 1 ? 
                    <View style={[ styles.dotLED, styles.activeLED ]} key={indexX}/>
                        : 
                    <View style={[ styles.dotLED, styles.offLED ]} key={indexX}/>
            )}
        </View>
    );

    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.ledContainer}>
                <View style={styles.patterns}>
                    <View style={styles.column}>
                        {dotsLeft}
                    </View>
                </View>
            </TouchableOpacity>

            <View style={ styles.solarPanelContainer}>
                <View style={ styles.solarPanel}>
                </View>
            </View>
            
            <TouchableOpacity activeOpacity={0.7} style={styles.ledContainer}>
                <View style={styles.patterns}>
                    <View style={styles.column}>
                        {dotsRight}
                    </View>
                </View>
            </TouchableOpacity>

        </View>
)};