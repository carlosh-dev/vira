import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import {Avatar} from '../Avatar'
import DefaultAvatar from '../../assets/images/default-avatar.png'

interface Props {
    name: string
}

export function Profile({ name }: Props) {
    return(
        <View style={styles.container}>
            
            <Avatar />

            <View>
                <Text style={styles.greetings}>
                    Olá,
                </Text>


                <Text style={styles.userName}>
                    { name }
                </Text>
            </View>
        </View>
    )
}