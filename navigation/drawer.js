import { createDrawerNavigator } from "@react-navigation/drawer";
import EventDetailScreen from "../screens/event-detail";
import HomeScreen from "../screens/home_screen";
import { HomeStack } from "./stack";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      {/* <Drawer.Screen name="Event" component={EventDetailScreen} /> */}
    </Drawer.Navigator>
  );
};
