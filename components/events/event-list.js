import { View, Text, FlatList } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import { RefreshControl } from "react-native-gesture-handler";
import EventItem from "./event-item";
import React from "react";

const EventList = () => {
  const renderItem = ({ item }) => {
    return (
      <EventItem
        id={item.id}
        title={item.title}
        description={item.description}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => console.log("refreshing...")}
          />
        }
      />
    </View>
  );
};

export default EventList;
