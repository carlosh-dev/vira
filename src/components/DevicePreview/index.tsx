import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../DevicePreview/styles';

interface Props {
    matrixLeft: any,
    matrixRight: any,
    handleSync: () => void
}

export function DevicePreview({
    matrixLeft,
    matrixRight,
    handleSync,
}: Props){

    const navigation:any = useNavigation();

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

    function handleEditPattern() {
        navigation.navigate('Home', {screen: 'Meus Padrões'});;
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.ledContainer} onPress={handleEditPattern}>
                <View style={styles.patterns}>
                    <View style={styles.column}>
                        {dotsLeft}
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.solarPanelContainer} activeOpacity={0.9} onPress={handleSync}>
                <View style={ styles.solarPanel}>
                    <View style={styles.iconView}>
                        <MaterialIcons name={'sync'} size={30} color={'#fff'}/>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.7} style={styles.ledContainer} onPress={handleEditPattern}>
                <View style={styles.patterns}>
                    <View style={styles.column}>
                        {dotsRight}
                    </View>
                </View>
            </TouchableOpacity>

        </View>
)};