import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIAS } from "../data/fake-data";

const CategoriasReceitas = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categorias / Receitas</Text>
      <Button
        title="Detalhes"
        onPress={() => props.navigation.navigate("DetalheReceita")}
      />
      <Button title="Voltar" onPress={() => props.navigation.pop()} />
    </View>
  );
};

CategoriasReceitas["navigationOptions"] = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const categoriaSelecionada = CATEGORIAS.find((cat) => cat.id === catId);

  return {
    title: categoriaSelecionada.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriasReceitas;
