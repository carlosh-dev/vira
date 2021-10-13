import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    title?: string,
    icon?: any
}
export function Button({ title, icon, ...rest }: Props) {

    const {buttonGradientUp, buttonGradientDown} = theme.colors;

    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
            {...rest}
        >
            <LinearGradient
                colors={[ buttonGradientUp, buttonGradientDown ]}
                start={{ x: 0.2, y: 0.5 }}
                style={styles.container} 
            >        
                    <Text style={styles.title}> {icon} {title} </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}