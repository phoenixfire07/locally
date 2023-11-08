import React, { useContext, useState, useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text, Animated } from "react-native";
import { AppContext, AppDispatchContext } from "../state/context";
import { handleItemSelected, fetchInitialState } from "../state/actions";
import ItemView from "./ItemView";
import { brightBlue } from "../constants";

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
    fetchInitialState(dispatch);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: "100%",
      height: selectedItem ? "50%" : "100%",
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
            pinColor={brightBlue}
            onPress={() => handleItemSelected(dispatch, item)}
          ></Marker>
        ))}
      </MapView>
      {selectedItem && (
        <ItemView
          name={selectedItem.name}
          neighborhood={selectedItem.neighborhood}
          shortDescription={selectedItem.shortDescription}
          description={selectedItem.description}
          highlights={selectedItem.highlights}
          perfectFor={selectedItem.perfectFor}
          images={selectedItem.images}
        />
      )}
    </Animated.View>
  );
}
