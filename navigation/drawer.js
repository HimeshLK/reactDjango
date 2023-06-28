import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import EventDetailScreen from "../screens/event-detail";
import HomeScreen from "../screens/home_screen";
import { HomeStack, ProfileStack } from "./stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, StyleSheet, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView
            style={{ flex: 1, paddingTop: 20, backgroundColor: "#08443d" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 140,
              }}
            >
              <Image
                style={{ width: 100, resizeMode: "contain" }}
                source={require("../assets/prof2.jpg")}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="More info"
              onPress={() => Linking.openURL("https://google.com")}
              icon={() => <Ionicons name="leaf-outline" size={22} />}
            />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        // style={styles.text}
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: () => <Ionicons name="home-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: "Profile",
          drawerIcon: () => <Ionicons name="person-outline" size={22} />,
        }}
      />
      {/* <Drawer.Screen name="Event" component={EventDetailScreen} /> */}
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
//   text: {
//     backgroundColor: "white",
//   },
// });
