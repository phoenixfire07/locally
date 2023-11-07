import React, { useContext, useState, useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  ImageBackground,
} from "react-native";
import { AppContext, AppDispatchContext } from "../state/context";
import { handleItemSelected, fetchItems } from "../state/actions";
import ItemView from "./ItemView";
import { brightBlue } from "../constants";

export default function CreatorList() {
  const dispatch = useContext(AppDispatchContext);
  const { selectedItem, items } = useContext(AppContext);

  const styles = StyleSheet.create({
    iconImage: {
      width: 100,
      height: 100,
    },
  });

  return (
    <View>
      <Text>hello</Text>
      <ImageBackground
        source={require("../images/icons/activity-blue.png")}
        resizeMode="cover"
        style={styles.iconImage}
      ></ImageBackground>
    </View>
  );
}
