import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ItemScreen() {
  return (
    <SafeAreaView>
      <View style={styles.mainContent}>
        <Text>Aqui va el detalle de cada articulo en venta</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
});
