import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/animations/checked-animation.json'
import styles from './styles';


export function SyncLoad() {
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <LottieView
                    source={loadingAnimation}
                    autoPlay
                    loop={false}
                    style={styles.animation}
                />
                <Text style={styles.loadText}>Seu dispositivo foi</Text>
                <Text style={styles.loadText}>cincronizado com sucesso!</Text>
                
            </View>
            
        </View>
    )
};