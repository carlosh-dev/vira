import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function TipCard() {
    return(
        <View style={styles.container}>
            <View style={styles.iconCircle}>
                <MaterialIcons
                    name={'assistant'}
                    style={styles.icon}
                    size={35}
                    color={theme.colors.purpleLighter}
                >
                </MaterialIcons>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Dica
                </Text>

                <Text style={styles.text}>
                    Já está escuro lá fora. {'\n'}
                    É uma boa ideia você verificar as{'\n'}
                    luzes da sua bike antes de pedalar.
                </Text>
            </View>
        
        </View>
    )
}