import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground, ScrollView, Pressable, TouchableOpacity, Modal, Alert } from "react-native";
import { styles } from "./style";
import Background from "../../assets/images/header-background.jpg";
import { Profile } from "../../components/Profile";
import { DevicePreview } from "../../components/DevicePreview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GradientBackground } from "../../components/GradientBackground";
import { TipCard } from "../../components/TipCard";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { PatternLEDProps } from "../../libs/storage";
import { WeatherCard } from "../../components/WeatherCard";
import { SyncLoad } from "../../components/SyncLoad";
import { PlanRoutesCard } from "../../components/PlanRoutesCard";

export function Home({navigation}:any) {

  const [ loadSync, setLoadSync ] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [matrixRight, setMatrixRight] = useState<number[][]>(
    [
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
    ]
  );

  const [matrixLeft, setMatrixLeft] = useState<number[][]>(
    [
      [0, 1, 1, 0, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
    ]
  );

  async function refrechCurrentPatterns() {
    try{
      const dataLeft =  await AsyncStorage.getItem('@vira:patternLEDLeft');
      const patternLeft = dataLeft ? (JSON.parse(dataLeft) as PatternLEDProps) : {id: '', name: '', matrix:[]}

      const dataRight =  await AsyncStorage.getItem('@vira:patternLEDRight');
      const patternRight:PatternLEDProps = dataRight ? (JSON.parse(dataRight) as PatternLEDProps) : {id: '', name: '', matrix:[]}

      setMatrixRight(patternRight.matrix)
      setMatrixLeft(patternLeft.matrix)
    }catch {
      Alert.alert("Não foi possível sincrinicar os padrões")
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refrechCurrentPatterns();
    });

    return unsubscribe;
  }, [navigation]);

  const [ userName, setUserName ] = useState('');

	useEffect(() => {
		async function getUserName() {
			setUserName(String(await AsyncStorage.getItem('@vira:user')))
		}

		getUserName();

	}, [])


  function handleSync() {
    setLoadSync(true)
    setTimeout(()=>{
      setLoadSync(false)
    }, 5000)
  }
  
	if(loadSync){
		return <SyncLoad/>
	}


  return (
      <GradientBackground>
        <View style={styles.container}>
          <ScrollView>
              <ImageBackground source={Background} resizeMode="cover" style={styles.header}>
                <Profile name={userName}/>
              </ImageBackground>

              <View style={styles.content}>
                
                <View style={styles.texts}>
                  <Text style={styles.title}>Padrões atuais</Text>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setModalVisible(true)}
                  >
                    <MaterialIcons name={'info-outline'} size={30} color={theme.colors.white}/>
                  </TouchableOpacity>

                </View>


                <DevicePreview matrixLeft={matrixLeft} matrixRight={matrixRight} handleSync={handleSync}/>

                <WeatherCard/>

                <PlanRoutesCard/>
                
                <TipCard/>

              </View>
          </ScrollView>        
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <MaterialIcons name={'info-outline'} size={60} color={theme.colors.white}/>

              <Text style={styles.modalText}>
                Toque em qualquer um dos painéis para ver a listagem de padrões criados por você. {'\n'}{'\n'}

                Clique no icone de sincronia para parear os padrões do aplicativo com o seu dispositivo VIRA.
              </Text>

              <Pressable
                style={styles.buttonDone}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonDoneText}>Entendi!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </GradientBackground>
    
  );
}
