import React, { useContext, useState, useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text, Animated } from "react-native";
import { AppContext, AppDispatchContext } from "../state/context";

export default function Map() {
  const mapFadeAnim = useRef(new Animated.Value(0)).current;
  const [items, setItems] = useState([]);

  const fadeIn = () => {
    Animated.timing(mapFadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    fetch("https://storage.googleapis.com/locally_seattle_images/test.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-cache",
    })
      .then((response) => {
        console.log();
        return response.json();
      })
      .then((json) => {
        setItems(json.items);
        console.log(json.items[0].latitude);
        console.log(json.items[0].longitude);
      });
  }, []);

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
            // title={item.name}
            // description={item.description}
            pinColor="blue"
            // onPress={}
          >
            {/* <Callout tooltip={true} style={styles.test}> */}
            {/* <View>
                <Text>{item.name}</Text>
              </View> */}
            {/* </Callout> */}
          </Marker>
        ))}
        {/* <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        /> */}
      </MapView>
      <View style={styles.test}>
        <Text></Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "70%",
  },
  test: {
    backgroundColor: "transparent",
    display: "none",
  },
});
