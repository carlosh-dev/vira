import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface Props {
    children: ReactNode
}

export function GradientBackground({children}: Props) {

    const {backgroundLinearUp, backgroundLinearDown} = theme.colors;

    return(
        <LinearGradient
            style={styles.container}
            colors={[backgroundLinearUp, backgroundLinearDown]}
        >
            { children }
        </LinearGradient>
    )
}