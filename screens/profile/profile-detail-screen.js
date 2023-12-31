import { View, Text, StyleSheet, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";

const ProfileDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { profileID } = route.params

  useLayoutEffect(()=>{
    navigation.setOptions({
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
        This is the ProfileDetail screen for {profileID}
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
export default ProfileDetailScreen;
