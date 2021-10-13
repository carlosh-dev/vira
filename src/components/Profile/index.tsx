import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import {Avatar} from '../Avatar'

export function Profile() {
    return(
        <View style={styles.container}>
            
            <Avatar urlImage="https://github.com/carlosh-dev.png"/>

            <View>
                <Text style={styles.greetings}>
                    Olá,
                </Text>


                <Text style={styles.userName}>
                    Carlos
                </Text>
            </View>
        </View>
    )
}