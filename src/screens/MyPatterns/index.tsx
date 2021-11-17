import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { GradientBackground } from "../../components/GradientBackground";
import { Head } from "../../components/Head";
import { PatternCard } from "../../components/PatternCard";
import { theme } from "../../global/styles/theme";
import { loadPattern, PatternLEDProps } from "../../libs/storage";

import { styles } from './style'

export function MyPatterns(){

	const [ myPatterns, setMyPatterns ] = useState<PatternLEDProps[]>([])
	const [ loading, setLoading] = useState(true);

	useEffect(()=>{
		async function loadData() {
			const patternsStoraged = await loadPattern();

			// setMyPatterns(patternsStoraged)
		}	

		loadData();
	},[]);

	const testeJSON = [ 
		{
			id: '1',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},

		{
			id: '2',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},

		{
			id: '3',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '4',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '5',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '6',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '7',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '8',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '9',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '10',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '11',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '12',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},
		{
			id: '13',
			name: "Coração",
			matrix: [
				[0, 1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
		},


	]

	return (
		<View style={styles.container}>	
			<GradientBackground>
				<View style={styles.content}>	
					
					<View style={styles.header}>
						<Text style={styles.title}>Meus {'\n'}<Text style={styles.titleBold}>Padrões</Text></Text>

						<TouchableOpacity 
							style={styles.addButton} 
							activeOpacity={0.8}
							onPress={()=>{}}
						>
							<MaterialIcons
								name={'add'}
								size={40}
								color={theme.colors.white}
							/>
						</TouchableOpacity>
					</View>
					
					<FlatList
						data={testeJSON}
						numColumns={2}
						renderItem={({ item }) => (
						<PatternCard
							name={item.name}
							matrix={item.matrix}
						/>
						)}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						style={styles.flatList}
					/>


				</View>		
			</GradientBackground>
		</View>
	)
}