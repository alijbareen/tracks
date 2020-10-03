import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import MapView from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
//import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation((location) => {
    addLocation(location);
  });
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create A Track</Text>
      <Map />
      {err ? <Text>Please Allow Permission Of Loacation </Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
