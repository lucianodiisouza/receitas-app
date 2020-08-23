import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriasReceitas;
