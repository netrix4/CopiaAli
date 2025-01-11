import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ItemScroll() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('ItemScreen')}}>
      <View style={styles.itemWrapper}>
        <Text>Esto es un item</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
    backgroundColor: "orange",
    margin: 2,
    borderRadius: 10,
  },
});
