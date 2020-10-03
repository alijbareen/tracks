import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import MapView from "react-native-maps";
import { requestPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching(), [];
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

export default TrackCreateScreen;
