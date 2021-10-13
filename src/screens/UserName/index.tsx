import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { styles } from './style'

export function UserName(){

	const navigation:any = useNavigation();

	function handleNavigation(){
		navigation.navigate('CityScreen');
	};

	const [isFocused, setIsFocused] = useState(false);

	function handleInputBlur(){
		setIsFocused(false)
	};

	function handleInputFocus(){
		setIsFocused(true)
	};

	return (
		<SafeAreaView style={styles.container}>	
			<View style={styles.content}>
				
				<View style={styles.form}>
					<Text style={styles.emoji}>
						😊
					</Text>

					<Text style={styles.text}>
						Como podemos  {'\n'}
						chamar você?
					</Text>

					<TextInput 
						style={[
							styles.input,
							isFocused && {borderColor: theme.colors.primary}
						]}
						placeholder="Digite um nome"
						onBlur={handleInputBlur}
						onFocus={handleInputFocus}
					/>

					<Button  
						title='Continuar'
						onPress={handleNavigation}
					/>
				</View>

			</View>
		</SafeAreaView>
	)
}