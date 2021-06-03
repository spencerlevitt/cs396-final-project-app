import React, { useState } from "react";
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
import { GiftedChat } from "react-web-gifted-chat";

const ChatRoomScreen = ({ route }) => {
  const { room } = route.params;
  const [messages, setMessages] = useState([]);

  const onSend = (messageText) => {
    console.log(messageText);
    setMessages([messageText[0], ...messages]);
  };

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <NavBar />
      <View style={styles.container}>
        <Text style={styles.roomCode}>{room}</Text>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: "#E8E8E8",
            height: 500,
            marginTop: 20,
          }}
        >
          <GiftedChat
            messages={messages}
            onSend={(newMessage) => onSend(newMessage)}
            user={{
              id: 1,
            }}
          />
        </View>
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
  },
  roomCode: {
    fontFamily: fonts.bold,
    fontSize: 25,
  },
});

export default ChatRoomScreen;
