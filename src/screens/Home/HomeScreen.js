import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavBar from "../../components/NavBar";
import fonts from "../../res/fonts";
import nflArray from "../../NFLTeams.js"
import { reduce } from "lodash";
import socket from "../../Socket.js"

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <NavBar />
      <View style={styles.container}>
        {nflArray.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ChatRoom", { room: item.name });
              socket.emit("roomConnection", item.name);
            }}
          >
            <ImageBackground
              key={item.name}
              style={styles.teamContainer}
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.overLay} />
              <Text style={styles.teamName}>{item.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  teamContainer: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 22,
    backgroundColor: "white",
  },
  overLay: {
    position: "absolute",
    width: 250,
    height: 150,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 0.5,
    zIndex: -1,
  },
  teamName: {
    fontFamily: fonts.bold,
    color: "white",
    padding: 20,
    fontSize: 25,
  },
});

export default HomeScreen;
