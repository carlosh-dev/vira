import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/animations/saved-animation.json'
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

interface Props {
    title: string
}

export function Head({
        title
    }: Props) {

    const nagivation = useNavigation();

    function handleGoback() {
        nagivation.goBack();
    }

    return(
        <View style={styles.container}>
            <MaterialIcons
                name={'keyboard-backspace'}
                size={30}
                color={'#fff'}
                style={styles.goBackButton}
                onPress={handleGoback}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};