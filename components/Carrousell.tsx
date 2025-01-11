import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemScroll from "./ItemScroll";

const Carrousell = () => {
  return (
    <ScrollView style={styles.carrousellContainer}>
      <Text style={styles.carrouseltitle}>Ofertas</Text>
      <ScrollView style={styles.carrousell} horizontal={true}>
        <ItemScroll />
        <ItemScroll />
        <ItemScroll />
        <ItemScroll />
        <ItemScroll />
        <ItemScroll />
        <ItemScroll />
      </ScrollView>
    </ScrollView>
  );
};

export default Carrousell;

const styles = StyleSheet.create({
  carrousellContainer: {
    padding: 10,
    // height:1,
  },
  carrouseltitle: {
    fontSize: 25,
  },
  carrousell: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    height: "auto",
  },
});
