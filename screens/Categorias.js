import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Categorias = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categorias</Text>
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

export default Categorias;
