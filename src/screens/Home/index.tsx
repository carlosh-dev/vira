import React, { useState } from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { LEDPatternButton } from "../../components/LEDPatternsButton";
import { styles } from './style'
import BikeIllustration from '../../assets/BikeIllustration.png'


export function Home(){
	
	const name = "Carlos"

	const matrixRight = [
					[0,0,1,0,0,1,0,0],
					[0,0,1,0,0,1,0,0],
					[0,0,1,0,0,1,0,0],
					[0,0,1,0,0,1,0,0],
					[1,0,0,0,0,0,0,1],
					[1,0,0,0,0,0,0,1],
					[0,1,1,1,1,1,1,0],
					[0,0,1,1,1,1,0,0],
				];

	const matrixLeft = [
					[0,1,1,0,0,1,1,0],
					[1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1],
					[0,1,1,1,1,1,1,0],
					[0,0,1,1,1,1,0,0],
					[0,0,0,1,1,0,0,0],
					[0,0,0,0,0,0,0,0],
				];
	
	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			 />

			<View style={styles.header}>
				<View style={styles.containerHello}>
					<Text style={styles.textHello}>Olá,</Text>
					<Text style={styles.textName}>
						{name}!
					</Text>
				</View>

				<View>			
				</View>
			</View>
			<View style={styles.content}>
				<View style={styles.texts}>
					<Text style={styles.title}>
						Padrões atuais
					</Text>

					<Text style={styles.subtitle}>
						Esses são os padrões {`\n`}
						atuais do seu dispositivo
					</Text>
				</View>

				<View style={styles.patterns}>
					<LEDPatternButton matrix={matrixRight}/>
					<LEDPatternButton matrix={matrixLeft}/>
				</View>

				<Image 
				source={BikeIllustration}
				style={styles.image}
				resizeMode="stretch"/>
			</View>
		</View>
	)
}