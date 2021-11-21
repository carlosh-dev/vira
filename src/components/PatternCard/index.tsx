import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import FadeLogo from '../../assets/images/FadeLogo.png'

interface Props{
    name: string,
    matrix: number[][]
}

export function PatternCard({name, matrix}:Props) {


    const patterns = matrix.map((array:any, indexY:any) => 
        <View style={styles.row} key={indexY}>
            {array.map((value:any, indexX:any) =>
                value === 1 ? 
                    <View style={[ styles.dotLED, styles.activeLED ]} key={indexX}/>
                    : 
                    <View style={[ styles.dotLED, styles.offLED ]} key={indexX}/>
            )}
        </View>
    );

    return (
        
        <LinearGradient
            colors={[ theme.colors.buttonGradientUp, theme.colors.buttonGradientDown ]}
            start={{ x: 0.2, y: 0.5 }}
            style={styles.container} 
        >  
            <View style={styles.patterns}>
                <View style={styles.column}>
                    {patterns}
                </View>
            </View>

            <Text style={styles.title}>{name}</Text>
            
        </LinearGradient>
        
    )
}