import React from "react";
import { Text, Image, SafeAreaView } from "react-native";
import IllustrationVIRA from '../../assets/images/IllustrationVIRA.png'
import { Button } from "../../components/Button";
import { styles } from './style'
import { useNavigation } from "@react-navigation/core";

export function Welcome(){

	const navigation:any = useNavigation();

	function handleNavigation(){
		navigation.navigate('UserNameScreen');
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Pedale com mais {'\n'}
				segurança, pedale {'\n'}
				com o VIRA
			</Text>

			<Image 
				source={IllustrationVIRA} 
				style={styles.image}
				resizeMode="contain"
			/>

			<Text style={styles.subtitle}>
				Vira é o seu dispositivo {'\n'}
				de sinalização no transito. {'\n'}
				Estamos aqui para te fazer se sentir {'\n'}
				mais seguro pedalando na cidade. {'\n'}
			</Text>
			
			<Button 
				title={'Começar'}
				onPress={handleNavigation}
			/>
			
		</SafeAreaView>
	)
}