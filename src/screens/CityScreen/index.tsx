import React, { useState } from "react";
import { Text, View, StatusBar } from "react-native";
import { styles } from './style'
import {Picker} from '@react-native-picker/picker';
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/core";


export function CityScreen(){

	const navigation:any = useNavigation();

	function handleNavigation(){
		navigation.navigate('CityScreen');
	};

	const [selectedCity, setSelectedCity] = useState('São Paulo');

	const CITIES_OPTIONS = [{ 
		key: 'São Paulo', value: 'SP'
	}, {
		key: 'Rio de Janeiro', value: 'RJ'
	}, {
		key: 'Minas Gerais', value: 'MG'
	},];

	
	const citiesPickeroptions =  CITIES_OPTIONS.map( (city) => 
			<Picker.Item 
				key={ city.value } 
				label={ city.key } 
				value={ city.value } 
				style={{textAlign: 'center'}}
			/>
		);

	return (
		<View style={styles.container}>
				<StatusBar
					animated={true}
					backgroundColor="#130C37"
					barStyle={'light-content'}
				/>

				<Text style={styles.text}>
					<Text style={{ fontWeight: 'bold' }}>Legal, Carlos!</Text>{"\n"}
					E onde você mora?
				</Text>

				<View style={styles.picker}>
					<Picker
						selectedValue={selectedCity}
						style={styles.input}
						onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
					>
						
						{citiesPickeroptions}
						
					</Picker>
				</View>

				<Button
					title='Continuar'
					onPress={handleNavigation}
				/>
		</View>
	)
}