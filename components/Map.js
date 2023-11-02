import React, { useContext, useState, useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text, Animated } from "react-native";
import { AppContext, AppDispatchContext } from "../state/context";
import { handleItemSelected, fetchItems } from "../state/actions";

export default function Map() {
  const dispatch = useContext(AppDispatchContext);
  const { selectedItem, items } = useContext(AppContext);
  const mapFadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(mapFadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {}, [items]);

  useEffect(() => {
    fadeIn();
    fetchItems(dispatch);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: "100%",
      height: selectedItem ? "70%" : "100%",
    },
    itemPreview: {
      width: "100%",
      height: selectedItem ? "30%" : 0,
    },
  });

  return (
    <Animated.View style={{ ...styles.container, opacity: mapFadeAnim }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.635894,
          longitude: -122.333056,
          latitudeDelta: 0.6,
          longitudeDelta: 0.04,
        }}
      >
        {items.map((item, index) => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            pinColor="blue"
            onPress={() => handleItemSelected(dispatch, item)}
          ></Marker>
        ))}
      </MapView>
      {selectedItem && (
        <View style={styles.itemPreview}>
          <Text>You selected {selectedItem.name}</Text>
          <Text>description: {selectedItem.description}</Text>
        </View>
      )}
    </Animated.View>
  );
}
