import React from "react";
import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./stack/HomeStack";
import ProfileStack from "./stack/ProfileStack";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
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
    </Drawer.Navigator>
  );
};

export default MyDrawer;
