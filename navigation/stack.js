import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home_screen";
import EventDetailScreen from "../screens/event-detail";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};
