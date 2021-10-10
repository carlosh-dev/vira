import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { styles } from './style'
import BikeIllustration from '../../assets/BikeIllustration.png'


export function SignIn(){
	return (
		<View style={styles.container}>
			<Image 
			source={BikeIllustration} 
			style={styles.image}/>
		</View>
	)
}