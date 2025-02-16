import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ItemScroll from "./components/ItemScroll";
import Home from "./screens/Home";
import ItemScreen from "./screens/ItemScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NavItem" component={ItemScroll} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>

      {/* <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! This is an edit test</Text>
      <StatusBar style="auto" />
    </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
