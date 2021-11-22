import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import DefaultAvatar from '../../assets/images/default-avatar.png'

export function Avatar() {
    return(
        <View style={styles.container}>
            <Image
                source={DefaultAvatar}
                style={styles.image}
            />
        </View>
    )
}