import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeStack } from "./navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./navigation/drawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <MyDrawer />
<<<<<<< HEAD
      <StatusBar style="light" />
=======
      <StatusBar style="light"/>
>>>>>>> eacb2d134ce29b3639b6de64f2e54f3c9a3fde4a
    </NavigationContainer>
  );
}
