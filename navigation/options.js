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