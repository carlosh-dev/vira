import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GradientBackground } from "../../components/GradientBackground";
import { PatternCard } from "../../components/PatternCard";
import { theme } from "../../global/styles/theme";
import {
  loadPattern,
  PatternLEDProps,
  StoragePatternLED,
} from "../../libs/storage";

import { styles } from "./style";

export function MyPatterns({ navigation }: any) {
  const [myPatterns, setMyPatterns] = useState<PatternLEDProps[]>([]);
  const [fetching, setFetching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState<PatternLEDProps>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      handleRefresh();
    });

    return unsubscribe;
  }, [navigation]);

  function handleRefresh() {
    setFetching(true);
    async function loadData() {
      const patternsStoraged = await loadPattern();

      setMyPatterns(patternsStoraged);
    }
    loadData();
    setFetching(false);
  }

  function handleAdd() {
    navigation.navigate("NewPattern");
  }

  async function handleDelete(pattern: PatternLEDProps) {
    Alert.alert("Remover", `Deseja remover o padrão ${pattern.name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
            const data = await AsyncStorage.getItem("@vira:patternsLED");
            const patterns = data
              ? (JSON.parse(data) as StoragePatternLED)
              : {};

            delete patterns[pattern.id];

            await AsyncStorage.setItem(
              "@vira:patternsLED",
              JSON.stringify(patterns)
            );

            setMyPatterns((oldData) =>
              oldData.filter((item) => item.id !== pattern.id)
            );
          } catch (error: any) {
            Alert.alert("Não foi possível deleter o padrã! 🤔");
          }
        },
      },
    ]);
  }

  async function handleSide(side: string) {
    try {
      if (side == "left") {
        await AsyncStorage.setItem(
          "@vira:patternLEDLeft",
          JSON.stringify(selectedPattern)
        );
      } else {
        await AsyncStorage.setItem(
          "@vira:patternLEDRight",
          JSON.stringify(selectedPattern)
        );
      }

      setModalVisible(!modalVisible);
      navigation.navigate('Home', {screen: 'Início'});
    } catch {
      Alert.alert("Não foi possível definir o padrão. 😥");
    }
  }



  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Qual lado você deseja {"\n"}
              aplica esse padrão?
            </Text>

            <View style={styles.row}>
              <Pressable
                style={styles.buttonSide}
                onPress={() => handleSide("left")}
              >
                <MaterialIcons name={"arrow-left"} size={50} color={"#fff"} />
              </Pressable>

              <Pressable
                style={styles.buttonSide}
                onPress={() => handleSide("right")}
              >
                <MaterialIcons name={"arrow-right"} size={50} color={"#fff"} />
              </Pressable>
            </View>

            <Pressable
              style={styles.buttonCancel}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonCancelText}>Cancelar </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <GradientBackground>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Meus {"\n"}
              <Text style={styles.titleBold}>Padrões</Text>
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              activeOpacity={0.8}
              onPress={handleAdd}
            >
              <MaterialIcons
                name={"add"}
                size={40}
                color={theme.colors.white}
              />
            </TouchableOpacity>
          </View>

          {myPatterns.length > 0 ? (
            <FlatList
              data={myPatterns}
              numColumns={1}
              renderItem={({ item }) => (
                <Pressable
                  
                >
                  <PatternCard
                    name={item.name}
                    matrix={item.matrix}
                    handleRemove={() => {
                      handleDelete(item);
                    }}

                    hadleSelectPattern={() => {
                      setSelectedPattern(item);
                      setModalVisible(true);
                    }}
                  />
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
              refreshing={fetching}
              onRefresh={handleRefresh}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emoji}>{"😕"}</Text>

              <Text style={styles.emptyTitle}>Você não tem padrões</Text>

              <Text style={styles.emptySubtitle}>
                Crie um novo padrão de LED. {"\n"}
                Aqui serão mostrados todos os seus padrões cadastrados.
              </Text>
            </View>
          )}
        </View>
      </GradientBackground>
    </View>
  );
}
