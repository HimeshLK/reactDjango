<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

export const navOptions = (nav) => {
  return {
    headerTintColor: "#cbd5e1",
    headerStyle: {
      backgroundColor: "#0f172e",
    },
    headerRight: () => (
      <Ionicons
        name="menu"
        size={32}
        color="white"
        onPress={() => nav.toggleDrawer()}
      />
    ),
    headerLeft: () => (
      <Text style={{ color: "white", fontSize: 20, paddingLeft: 5 }}>Logo</Text>
    ),
  };
};
=======
import { Ionicons } from "@expo/vector-icons"
import {Text} from "react-native"
export const navOptions = (nav)=>{
    return{
        headerTintColor:'#cbd5e1',
        headerStyle:{
            backgroundColor:'#0f172a'
        },
        headerRight:()=>(
            <Ionicons
                name="menu"
                size={32}
                color='#cbd5e1'
                onPress={()=>nav.toggleDrawer()
                }
            />
        ),
        
    }
}
>>>>>>> eacb2d134ce29b3639b6de64f2e54f3c9a3fde4a
