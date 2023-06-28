import { View, Text, StyleSheet, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import HomeScreen from "./home_screen";
import { HeaderBackButton } from "@react-navigation/elements";

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { eventId, title, description } = route.params

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:"new Title",
      headerLeft:()=>(
        <HeaderBackButton
          tintColor="white"
          onPress={()=>navigation.goBack()}
        />
      )
    })
  }, [])
  

  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 30 }}>
        This is the EventDetail screen for {eventId}
      </Text>
      <Text style={{ fontSize: 30 }}>{title}</Text>
      <Text style={{ fontSize: 30 }}>{description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
export default EventDetailScreen;
