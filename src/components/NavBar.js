import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useMediaQuery } from "react-responsive";
import fonts from "../res/fonts";
import * as RootNavigation from "../RootNavigation";

const TopBar = ({ selected }) => {
  let isMobile = useMediaQuery({ maxWidth: 600 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <View style={styles.container}>
      <Text style={styles.logoName}>NFL Chat</Text>
      <View>
        <TouchableOpacity onPress={() => RootNavigation.navigate("Home")}>
          <Text style={styles.pageName}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    zIndex: 10000,
    height: 75,
    paddingHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoName: {
    fontFamily: fonts.bold,
  },
  pageName: {
    fontFamily: fonts.medium,
  },
});

export default TopBar;
