import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import HomeScreen from "./home_screen";

const EventDetailScreen = () => {
  const route = useRoute();
  const { eventId, title, description } = route.params;
  //   const navigation = useNavigation();

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
