import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/animations/saved-animation.json'
import styles from './styles';

interface Props {
    title: string
}

export function Head({
        title
    }: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.goBackButton}>Teste</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};