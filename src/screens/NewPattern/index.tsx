import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { Dot } from "../../components/Dot";
import { Head } from "../../components/Head";
import { SavedLoad } from "../../components/SavedLoad";
import { theme } from "../../global/styles/theme";
import { loadPattern, PatternLEDProps, savePattern } from "../../libs/storage";
import { styles } from './style'

export function NewPattern(){
	
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [patternName, setPatternName] = useState<string>('');

	const [loadSaved, setLoadSaved] = useState(false);

	const navigation:any = useNavigation();

	const [matrix, setMatrix] = useState<number[][]>([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ])

	const matrixReset = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ];

	function handleInputBlur(){
		setIsFocused(false);
		setIsFilled(!!patternName);
	};

	function handleInputFocus(){
		setIsFocused(true);
	};

	function handleInputChange(value: string){
		setIsFocused(!!value);
		setIsFilled(!!value)
		setPatternName(value);
	};

	const handleActiveDot = (dot:any, indexX:any, indexY:any) => {

		var matrixtempo = [...matrix];
		if(dot===1){
			matrixtempo[indexY][indexX] = 0;
		}else{
			matrixtempo[indexY][indexX] = 1;
		}
		
		setMatrix(matrixtempo);
	}

	const handleReset = () => {
		setMatrix(matrixReset)
	}
	
	async function handleSave(){

		if(!patternName){
			Alert.alert('Dê um nome para o seu padrão. 🤔')
			return
		}

		if(matrix.toString()  === matrixReset.toString()){
			Alert.alert('Selecione pelo menos um ponto de LED. 😮')
			return
		}		
		

		try {
			
			await savePattern({
				id: Date.now().toString(),
				name: patternName,
				matrix: matrix,
			})

			setLoadSaved(true)

			setTimeout(()=> {
				navigation.navigate('Home', {screen: 'Início'});
			}, 4000)
			

		} catch {
			Alert.alert('Não foi possivel salvar o padrão. 😥')
		}
		
		
	};

	if(loadSaved){
		return <SavedLoad/>
	}

	return (
		<SafeAreaView style={styles.container}>	
			<Head title='Criar novo Padrão'/>
			<View style={styles.content}>
				<View style={styles.form}>
					<Text style={styles.text}>
						Dê um nome ao padrão
					</Text>

					<TextInput 
						style={[
							styles.input,
							(isFocused || isFilled) && 
							{borderColor: theme.colors.primary}
						]}
						placeholder="Ex.: Smile"
						onBlur={handleInputBlur}
						onFocus={handleInputFocus}
						onChangeText={(value) => handleInputChange(value)}
					/>

					<Text style={styles.subtext}>
						<Text style={styles.bold}>Toque nos LEDs</Text> que deseja ascender ou apagar
					</Text>
					
					<View style={styles.containerLED}>
						{
							matrix.map((array, indexMatrix) => 
								<View key={indexMatrix} style={styles.row}>
									{
									array.map((dot, indexArray) => 
										<Dot 
											key={indexArray}
											active={matrix[indexMatrix][indexArray]} 
											onPress={ () => handleActiveDot(dot, indexArray, indexMatrix) }
										/>
									)
									}
								</View>    
							)
						}
					</View>

					<View style={styles.buttons}>
						<Button  
							title='Limpar'
							onPress={handleReset}
						/>

						<Button  
							title='Salvar'
							onPress={handleSave}
						/>
					</View>

					

					
				</View>

			</View>
		</SafeAreaView>
	)
}