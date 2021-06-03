import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/AppNavigator";
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

function App() {
  let [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    ...MaterialIcons.font,
    ...Entypo.font,
    ...FontAwesome.font,
    ...FontAwesome5.font,
    ...AntDesign.font,
    ...Ionicons.font,
  });

  React.useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  if (loaded) {
    return (
      <>
        <ToastContainer />
        <AppNavigator />
      </>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
