import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import EventDetailScreen from "./event-detail";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <EventList />
      {/* <Text>This is the home screen</Text>
      <Button
        title="Move to detail"
        onPress={() => navigation.navigate("EventDetail")}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
export default HomeScreen;
