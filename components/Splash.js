import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Animated, Text, ImageBackground } from "react-native";
import { titleFont, bodyFont, brightBlue } from "../constants";

export default function Splash() {
  const seattleFadeAnim = useRef(new Animated.Value(0)).current;
  const splashFadeAnim = useRef(new Animated.Value(1)).current;
  const [beginFadeOut, setBeginFadeout] = useState(false);

  const fadeIn = () => {
    Animated.timing(seattleFadeAnim, {
      toValue: 1,
      duration: 3700,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (beginFadeOut) {
      fadeOut();
    }
  }, [beginFadeOut]);

  useEffect(() => {
    fadeIn();
    const timer = setTimeout(() => {
      setBeginFadeout(true);
    }, 4300);
    return () => clearTimeout(timer);
  }, []);

  const fadeOut = () => {
    Animated.timing(splashFadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{ height: "100%", width: "100%", opacity: splashFadeAnim }}
    >
      <ImageBackground
        source={require("../images/SeattlePic.png")}
        resizeMode="cover"
        style={styles.seattleImage}
      >
        <Text style={styles.locally}>Locally</Text>

        <Animated.View style={{ opacity: seattleFadeAnim }}>
          <Text style={styles.seattle}>SEATTLE</Text>
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  locally: {
    marginTop: 80,
    width: 350,
    height: 120,
    fontFamily: titleFont,
    fontSize: 110,
    letterSpacing: -7,
    color: "white",
  },
  seattle: {
    fontFamily: bodyFont,
    fontSize: 50,
    letterSpacing: 3,
    marginTop: -50,
    color: brightBlue,
  },
  seattleImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
});
