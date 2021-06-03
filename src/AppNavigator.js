import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home/HomeScreen";
import ChatRoomScreen from "./screens/ChatRoom/ChatRoomScreen";
import * as Linking from "expo-linking";
import { navigationRef } from "./RootNavigation";
import { enableScreens } from "react-native-screens";

enableScreens();

const Stack = createStackNavigator();

const prefix = Linking.createURL("/");

export default function AppNavigator() {
  const linking = {
    prefixes: [prefix],
    config: {
      Home: "",
      ChatRoom: "chat",
    },
  };

  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          option={{
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
            title: "NFL Chat",
          }}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          option={({ route, navigation }) => ({
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
            title: `${route.params.room} Chat`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
