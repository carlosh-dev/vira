
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import RoutesBG from '../../assets/images/routes-card-bg.png'

export function PlanRoutesCard() {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Rotas
                </Text>

                <Text style={styles.text}>
                    O vira está aqui para te auxiliar{'\n'}
                    na sua pedalada. {'\n'}
                </Text>
                <Text style={styles.bold}>
                    Clique aqui para planejar sua rota
                </Text>
            </View>
            
            <Image
                source={RoutesBG}
                style={styles.image}
            />
        
        </View>
    )
}