import React from 'react';
import { Image, Text, View, ImageBackground } from 'react-native';
import { styles } from './styles';
import IconeClima from '../../assets/images/clima-icon.png'
import IconeClimaBg from '../../assets/images/night-bg.png'

export function WeatherCard() {
    return(
        
            <ImageBackground source={IconeClimaBg} resizeMode="cover" imageStyle={{ borderRadius: 20}} style={styles.imageBackground}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Sexta-feira {'\n'}
                            <Text style={styles.subtitle}>
                                A previsão é de céu com nuvens sem chuva
                            </Text>
                        </Text>

                        <Text style={styles.weather}>
                            <Text style={styles.text}>19°</Text>
                            <Text style={styles.celsius}>C</Text>
                        </Text>
                        <Text style={styles.minMax}>Min. 15°C | Max. 22°C</Text>

                       
                    </View>

                    <View style={styles.iconCircle}>
                        <Image
                            source={IconeClima}
                            style={styles.image}
                        />
                    </View>
                </View>
            </ImageBackground>
        
    )
}