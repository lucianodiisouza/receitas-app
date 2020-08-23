import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Favoritos = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Favoritos</Text>
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

export default Favoritos;
