import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  ScrollView,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { backgroundColor } from "../constants";

export default function Splash() {
  const seattleFadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(seattleFadeAnim, {
      toValue: 1,
      duration: 3700,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <ImageBackground
      source={require("../images/SeattlePic.png")}
      resizeMode="cover"
      style={styles.seattleImage}
    >
      <Image style={styles.locally} source={require("../images/Locally.png")} />
      <Animated.View
        style={{ ...styles.seattleContainer, opacity: seattleFadeAnim }}
      >
        <Animated.Image
          style={styles.letterS}
          source={require("../images/S-outline.png")}
        />
        <Animated.Image
          style={{ ...styles.letterE }}
          source={require("../images/E-outline.png")}
        />
        <Animated.Image
          style={{ ...styles.letterA }}
          source={require("../images/A-outline.png")}
        />
        <Animated.Image
          style={{ ...styles.letterT }}
          source={require("../images/T-outline.png")}
        />
        <Animated.Image
          style={{ ...styles.letterT }}
          source={require("../images/T-outline.png")}
        />
        <Animated.Image
          style={{ ...styles.letterL }}
          source={require("../images/L-outline.png")}
        />
        <Animated.Image
          style={{ ...styles.letterE }}
          source={require("../images/E-outline.png")}
        />
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  seattleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    width: 350,
    marginTop: -25,
  },
  locally: {
    marginTop: 80,
    width: 350,
    height: 120,
  },
  letterS: {
    padding: 4,
    height: 35,
    width: 41,
  },
  letterE: {
    padding: 4,
    height: 35,
    width: 38,
  },
  letterA: {
    padding: 4,
    height: 35,
    width: 46,
  },
  letterT: {
    padding: 4,
    height: 35,
    width: 44,
  },
  letterL: {
    padding: 4,
    height: 35,
    width: 37,
  },
  needle: {
    height: 300,
    width: 100,
    marginTop: 260,
  },

  seattleImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
  },
});
