import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home_screen";
import EventDetailScreen from "../screens/event-detail";
import { navOptions } from "./options";
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
import ProfilesScreen from "../screens/profiles/profiles-screen";
import ProfileDetailScreen from "../screens/profiles/profile-details-screen";
=======
>>>>>>> eacb2d134ce29b3639b6de64f2e54f3c9a3fde4a

const Stack = createStackNavigator();

export const HomeStack = () => {
<<<<<<< HEAD
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
=======
  const navigation  = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={()=>navOptions(navigation)}
    >
>>>>>>> eacb2d134ce29b3639b6de64f2e54f3c9a3fde4a
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
      <Stack.Screen name="Profiles" component={ProfilesScreen} />
      <Stack.Screen name="Profile" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
};
