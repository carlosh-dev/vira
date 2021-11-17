import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/animations/saved-animation.json'
import styles from './styles';


export function SavedLoad() {
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <LottieView
                    source={loadingAnimation}
                    autoPlay
                    loop={false}
                    style={styles.animation}
                />
                <Text style={styles.loadText}>Padrão salvo com</Text>
                <Text style={styles.loadText}>sucesso!</Text>
                
            </View>
            
        </View>
    )
};