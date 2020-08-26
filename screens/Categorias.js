import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";

import { CATEGORIAS } from "../data/fake-data";
import Colors from "../constants/Colors";

const Categorias = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate("CategoriasReceitas", {
            categoryId: itemData.item.id,
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIAS}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

Categorias["navigationOptions"] = () => {
  return {
    title: "Receitas",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : null,
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default Categorias;
