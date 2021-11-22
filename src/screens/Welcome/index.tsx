import React from "react";
import { Text, Image, SafeAreaView } from "react-native";
import IllustrationVIRA from '../../assets/images/IllustrationVIRA.png'
import { Button } from "../../components/Button";
import { styles } from './style'
import { useNavigation } from "@react-navigation/core";
import animation from '../../assets/animations/woman-bicycle.json'
import AnimatedLottieView from "lottie-react-native";

export function Welcome(){

	const navigation:any = useNavigation();

	function handleNavigation(){
		navigation.navigate('UserNameScreen');
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Pedale com mais segurança. {'\n'}
				Pedale com o VIRA
			</Text>

			<Image 
				source={IllustrationVIRA} 
				style={styles.image}
				resizeMode="contain"
			/>

			<Text style={styles.subtitle}>
				Vira é o seu dispositivo de sinalização{'\n'}
				para cliclistas no transito. {'\n'}{'\n'}
				<Text style={styles.bold}>
					Estamos aqui para te fazer se sentir {'\n'}
					mais seguro pedalando na cidade. {'\n'}
				</Text>					
				
			</Text>

			{/* <AnimatedLottieView
				source={animation}
				autoPlay
				loop
				style={styles.animation}
			/> */}
			
			<Button 
				title={'Começar'}
				onPress={handleNavigation}
				style={styles.button}
			/>
			
		</SafeAreaView>
	)
}