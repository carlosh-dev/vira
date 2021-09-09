import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { styles } from './style'

export function SignIn(){

	const [ name, setName ] = useState('');

	return (
		<View style={styles.container}>

				<Text style={styles.text}>
					<Text style={{ fontWeight: 'bold' }}>Bem Vindo!</Text>{"\n"}
					Qual o seu nome?
				</Text>

				<TextInput 
					style={styles.input} 
					onChangeText={(value) => setName(value)}
					/>

				<Text style={styles.text}>{ name }</Text>
				
		</View>
	)
}