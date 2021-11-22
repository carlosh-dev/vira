import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, Button, Pressable, Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import FadeLogo from '../../assets/images/FadeLogo.png'

import { RectButton, RectButtonProps }  from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialIcons } from '@expo/vector-icons';

interface Props extends RectButtonProps{
    name: string,
    matrix: number[][]
    handleRemove: ()=> void,
    hadleSelectPattern: ()=> void,
}

export function PatternCard({name, matrix, handleRemove, hadleSelectPattern, ...rest}:Props) {


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
        
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}>

                                <MaterialIcons name={'delete-outline'} size={32} color={theme.colors.white}/>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >

            <Pressable
                  onPress={hadleSelectPattern}
                >
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
            </Pressable>
        </Swipeable>
        
    )
}