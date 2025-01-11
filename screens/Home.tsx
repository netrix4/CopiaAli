import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import ItemScroll from "../components/ItemScroll";
import Carrousell from "../components/Carrousell";

export default function Home() {
  return (
    <SafeAreaView style={styles.mainScroll}>
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>AliExpress</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Busqueda"
          ></TextInput>
        </View>
        <ScrollView>
          <Carrousell />
          <View>
            <Text>Esto es un texto que no esun scroll</Text>
          </View>
          <Carrousell />
          <Carrousell />
          <Carrousell />
          <Carrousell />
          <Carrousell />
          <Carrousell />
          <Carrousell />
          <Carrousell />
          <Carrousell />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainScroll: {
    height: "100%",
  },
  mainContainer: {
    height: "100%",
    backgroundColor: "lightgrey",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-evenly",
    gap: 15,
    backgroundColor: "orange",
    padding: 15,
  },
  headerText: {
    color: "white",
    fontSize: 30,
  },
  inputStyle: {
    fontSize: 20,
  },
  //   carrousellContainer: {
  //     padding: 10,
  //     // height:'auto',
  //   },
  //   carrouseltitle: {
  //     fontSize: 25,
  //   },
  //   carrousell: {
  //     padding: 10,
  //     backgroundColor: "white",
  //     // display:'flex',
  //     // flexDirection:'row',
  //     // gap:15
  //   },
});
