import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 31.256032,
        longitude: 34.807129,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
