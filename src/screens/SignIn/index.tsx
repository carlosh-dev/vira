import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from './style'

export function SignIn(){
	return (
		<View style={styles.container}>
				<Text style={styles.text}>
					<Text style={{ fontWeight: 'bold' }}>Bem Vindo!</Text>{"\n"}
					Qual o seu nome?
				</Text>

				<TextInput style={styles.input}></TextInput>
				
		</View>
	)
}