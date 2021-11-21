import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { GradientBackground } from "../../components/GradientBackground";
import { PatternCard } from "../../components/PatternCard";
import { theme } from "../../global/styles/theme";
import { loadPattern, PatternLEDProps } from "../../libs/storage";

import { styles } from './style'



export function MyPatterns({ navigation }:any){

	const [ myPatterns, setMyPatterns ] = useState<PatternLEDProps[]>([])
	const [ fetching, setFetching] = useState(false);


	useEffect(()=>{
		const unsubscribe = navigation.addListener('focus', () => {
			handleRefresh();
		});
		
		return unsubscribe;	
	},[navigation]);

	function  handleRefresh(){
		setFetching(true);
		async function loadData() {
			const patternsStoraged = await loadPattern();

			setMyPatterns(patternsStoraged)
		}	
		loadData();
		setFetching(false);		
	}
	

	function handleAdd(){
		navigation.navigate('NewPattern');
	}

	
	return (
		<View style={styles.container}>	
			<GradientBackground>
				<View style={styles.content}>	
					
					<View style={styles.header}>
						<Text style={styles.title}>Meus {'\n'}<Text style={styles.titleBold}>Padrões</Text></Text>

						<TouchableOpacity 
							style={styles.addButton} 
							activeOpacity={0.8}
							onPress={handleAdd}
						>
							<MaterialIcons
								name={'add'}
								size={40}
								color={theme.colors.white}
							/>
						</TouchableOpacity>
					</View>
					
					<FlatList
						data={myPatterns}
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
						refreshing={fetching}
						onRefresh={handleRefresh}
					/>


				</View>		
			</GradientBackground>
		</View>
	)
}