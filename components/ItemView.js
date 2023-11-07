import React, { useContext, useState, useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import {
  titleFont,
  bodyFont,
  brightBlue,
  brightRed,
  backgroundBeige,
  mellowYellow,
} from "../constants";
import { AntDesign } from "@expo/vector-icons";

export default function ItemView({ selectedItem }) {
  const [expandImages, setExpandImages] = useState(false);
  const styles = StyleSheet.create({
    itemView: {
      width: "100%",
      height: selectedItem ? "50%" : 0,
      backgroundColor: backgroundBeige,
    },
    name: {
      fontFamily: titleFont,
      color: brightBlue,
      marginTop: 5,
      fontSize: 30,
      letterSpacing: -2,
      paddingLeft: 5,
    },
    description: {
      fontFamily: bodyFont,
    },
    neighborhood: {
      textTransform: "uppercase",
      fontFamily: bodyFont,
      letterSpacing: 1,
      fontSize: 11,
      fontWeight: "bold",
      marginBottom: 5,
      paddingLeft: 5,
    },
    descriptionContainer: {
      fontFamily: bodyFont,
      width: expandImages ? 0 : "50%",
      paddingBottom: 30,
    },
    borderTop: {
      borderTopColor: "black",
      borderTopWidth: 1,
      marginLeft: -5,
      marginRight: -5,
    },
    itemImage: {
      height: expandImages ? 350 : 170,
      width: expandImages ? 350 : 170,
      marginTop: 10,
    },
    bodyFont: {
      fontFamily: bodyFont,
      fontSize: 14,
    },
    imagesContainer: {
      width: expandImages ? "100%" : "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderLeftWidth: 1,
      borderLeftColor: "black",
    },
    aboutContainer: {
      display: "flex",
      flexDirection: "row",
    },
    shaddow: {
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.7,
      shadowRadius: 14.78,

      elevation: 22,
    },
  });
  return (
    <View style={styles.shaddow}>
      <ScrollView style={styles.itemView}>
        <Text style={styles.name}>{selectedItem.name}</Text>
        <Text style={styles.neighborhood}>{selectedItem.neighborhood}</Text>
        <View style={styles.borderTop}></View>
        <View style={styles.aboutContainer}>
          <View style={styles.descriptionContainer}>
            {/* --------- Start Short Description Section --------- */}
            <View
              style={{
                backgroundColor: expandImages ? "transparent" : mellowYellow,
                padding: 10,
              }}
            >
              <Text
                style={{
                  ...styles.bodyFont,
                  color: "black",
                  fontStyle: "italic",
                }}
              >
                {selectedItem.shortDescription}
              </Text>
            </View>
            {/* --------- Start About Section --------- */}
            <Text
              style={{
                fontFamily: titleFont,
                color: brightRed,
                marginTop: 15,
                paddingLeft: 5,
              }}
            >
              About
            </Text>
            <Text
              style={{
                ...styles.bodyFont,
                paddingLeft: 5,
                marginTop: 5,
                paddingRight: 5,
              }}
            >
              {selectedItem.description}
            </Text>
            {/* --------- Start Dont Miss Section --------- */}
            <Text
              style={{
                fontFamily: titleFont,
                color: brightRed,
                marginTop: 20,
                paddingLeft: 5,
              }}
            >
              Don't miss...
            </Text>
            {selectedItem.highlights.map((highlight) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                  paddingLeft: 5,
                }}
              >
                <AntDesign
                  key={highlight}
                  name="swapright"
                  size={20}
                  color={brightBlue}
                />
                <Text style={{ ...styles.bodyFont, marginLeft: 2 }}>
                  {highlight}
                </Text>
              </View>
            ))}
            {/* --------- End Dont Miss Section --------- */}
            {/* --------- Start Perfect For Section --------- */}
            <Text
              style={{
                fontFamily: titleFont,
                color: brightRed,
                marginTop: 20,
                paddingLeft: 5,
              }}
            >
              Perfect for...
            </Text>
            {selectedItem.perfectFor.map((item) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                  paddingLeft: 5,
                }}
              >
                <AntDesign
                  key={item}
                  name="swapright"
                  size={20}
                  color={brightBlue}
                />
                <Text style={{ ...styles.bodyFont, marginLeft: 2 }}>
                  {item}
                </Text>
              </View>
            ))}
            {/* --------- End Perfect For Section --------- */}
          </View>
          <View style={styles.imagesContainer}>
            <View
              style={{
                alignSelf: "flex-start",
                marginLeft: expandImages ? 5 : 5,
                marginTop: 10,
              }}
            >
              <Pressable
                onPress={() => setExpandImages(!expandImages)}
                style={{
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {!expandImages && (
                  <>
                    <AntDesign name="arrowleft" size={24} color={brightRed} />
                    <Text
                      style={{
                        fontFamily: titleFont,
                        color: brightRed,
                        fontSize: 14,
                        marginLeft: 1,
                        marginTop: 1,
                      }}
                    >
                      expand images
                    </Text>
                  </>
                )}
                {expandImages && (
                  <>
                    <Text
                      style={{
                        fontFamily: titleFont,
                        color: brightRed,
                        fontSize: 14,
                        marginLeft: 1,
                        marginTop: 1,
                      }}
                    >
                      view full listing
                    </Text>
                    <AntDesign name="arrowright" size={24} color={brightRed} />
                  </>
                )}
              </Pressable>
            </View>
            {selectedItem.images.map((source, index) => (
              <ImageBackground
                key={source}
                source={{ uri: source }}
                resizeMode="cover"
                style={styles.itemImage}
              ></ImageBackground>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
