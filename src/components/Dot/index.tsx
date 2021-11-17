import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    active: number,
}

export function Dot({active, ...rest}: Props) {
    return (
        <TouchableOpacity style={ [
            styles.dot, 
            (active === 1) && styles.actived 
        ]}
        activeOpacity={0.8}
        {...rest}
        >

        </TouchableOpacity>
    )
}