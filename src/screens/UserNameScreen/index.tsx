import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { styles } from './style'

export function UserNameScreen(){
	
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [userName, setUserName] = useState<string>();

	const navigation:any = useNavigation();

	function handleNavigation(){
		if(!isFilled){
			Alert.alert("Preencha com um nome, por favor.");
			return
		}
		navigation.navigate('CityScreen');
	};

	function handleInputBlur(){
		setIsFocused(false);
		setIsFilled(!!userName);
	};

	function handleInputFocus(){
		setIsFocused(true);
	};

	function handleInputChange(value: string){
		setIsFocused(!!value);
		setIsFilled(!!value)
		setUserName(value);
	};

	return (
		<SafeAreaView style={styles.container}>	
			<View style={styles.content}>
				
				<View style={styles.form}>
					<Text style={styles.emoji}>
						{(isFocused || isFilled) ? '😀' : '😊' }
					</Text>

					<Text style={styles.text}>
						Como podemos  {'\n'}
						chamar você?
					</Text>

					<TextInput 
						style={[
							styles.input,
							(isFocused || isFilled) && 
							{borderColor: theme.colors.primary}
						]}
						placeholder="Digite um nome"
						onBlur={handleInputBlur}
						onFocus={handleInputFocus}
						onChangeText={(value) => handleInputChange(value)}
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