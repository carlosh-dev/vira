import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

interface Props {
    urlImage: string
}
export function Avatar({ urlImage }: Props) {
    return(
        <View style={styles.container}>
            <Image
                source={{uri: urlImage}}
                style={styles.image}
            />
        </View>
    )
}