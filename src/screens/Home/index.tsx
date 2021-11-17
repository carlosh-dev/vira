import React, { useEffect, useState } from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { styles } from "./style";
import Background from "../../assets/images/header-background.jpg";
import { Profile } from "../../components/Profile";
import { DevicePreview } from "../../components/DevicePreview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GradientBackground } from "../../components/GradientBackground";

export function Home() {
  
  const matrixRight = [
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
  ];

  const matrixLeft = [
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
  ];


  const [ userName, setUserName ] = useState('');
  

	useEffect(() => {
		async function getUserName() {
			setUserName(String(await AsyncStorage.getItem('@vira:user')))
		}

		getUserName();

	}, [])

  return (
    
      <View style={styles.container}>
        <GradientBackground>
          {/* Cabeçalho */}
          <ImageBackground source={Background} resizeMode="cover" style={styles.header}>
            <Profile name={userName}/>
          </ImageBackground>

          <View style={styles.content}>
            <View style={styles.texts}>
              <Text style={styles.title}>Padrões atuais</Text>

              <Text style={styles.subtitle}>
                Esses são os padrões atuais{`\n`}
                do seu dispositivo {`\n`}
                <Text style={styles.subtitleBold}>Toque para alterá-los.</Text>
              </Text>
            </View>

            
            <DevicePreview matrixLeft={matrixLeft} matrixRight={matrixRight} />


          </View>
        </GradientBackground>
      </View>
    
  );
}
