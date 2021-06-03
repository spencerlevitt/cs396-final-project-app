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
import socket from "../../Socket.js"

const ChatRoomScreen = ({ route }) => {
  const { room } = route.params;
  const [messages, setMessages] = useState([]);

  const onSend = (messageText) => {
    console.log(messageText);
    socket.emit("sendToRoom", room, "msg", messageText);
  };

  socket.on("msg", (data) => {
    console.log(data.body[0]);
    setMessages([data.body[0], ...messages])
  });

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <NavBar selected={room} />
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
              id: socket.id,
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
