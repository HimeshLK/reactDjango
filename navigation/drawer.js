import { DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import EventDetailScreen from "../screens/event-detail";
import HomeScreen from "../screens/home_screen";
import { HomeStack, ProfileStack } from "./stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Linking, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1, paddingTop: 20, backgroundColor: '#99f6e4' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 140 }}>
              <Image
                style={{ width: 100, resizeMode: 'contain' }}
                source={require("../assets/plant.png")}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label={"More Info.."}
              onPress={()=>Linking.openURL('http://google.com')}
              icon={()=>(
                <Ionicons 
                  name="leaf-outline"
                  size={22}
                  />
                
              )}
            />
          </SafeAreaView>
        );
      }}

      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{ 
        title: 'Home',
        drawerIcon:()=> <Ionicons name="home-outline" size={22}/>
        }} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{ 
        title: 'Profile',
        drawerIcon:()=> <Ionicons name="person-outline" size={22}/>
        }} />
      {/* <Drawer.Screen name="Event" component={EventDetailScreen} /> */}
    </Drawer.Navigator>
  );
}; 
