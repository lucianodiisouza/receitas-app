import React from "react";

import { View, Text, StyleSheet } from "react-native";

const CategoriasReceitas = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categorias / Receitas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriasReceitas;
