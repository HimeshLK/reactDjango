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
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
