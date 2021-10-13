import React from "react";
import { Text, View, Image } from "react-native";
import { LEDPatternButton } from "../../components/LEDPatternsButton";
import { styles } from './style'
import BikeIllustration from '../../assets/BikeIllustration.png'
import { Profile } from "../../components/Profile";


export function Home(){

	const matrixRight = [
					[0,0,1,0,0,1,0,0],
					[0,0,1,0,0,1,0,0],
					[0,0,1,0,0,1,0,0],
					[0,0,1,0,0,1,0,0],
					[1,0,1,0,0,1,0,1],
					[1,0,0,0,0,0,0,1],
					[0,1,1,1,1,1,1,0],
					[0,0,1,1,1,1,0,0],
				];

	const matrixLeft = [
					[0,1,1,0,0,1,1,0],
					[1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1],
					[0,1,1,1,1,1,1,0],
					[0,0,1,1,1,1,0,0],
					[0,0,0,1,1,0,0,0],
				];
	
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Profile/>

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
						atuais do seu dispositivo {`\n`}
						<Text style={styles.subtitleBold}>
							Toque para alterá-los.
						</Text>
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