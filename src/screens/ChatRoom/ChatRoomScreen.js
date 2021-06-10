import React, { useEffect, useState } from "react";
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
import { GiftedChat, InputToolbar } from "react-web-gifted-chat";
import socket from "../../Socket.js";

const ChatRoomScreen = ({ route }) => {
  const { room } = route.params;
  const [messages, setMessages] = useState([]);

  const onSend = (messageText) => {
    console.log(messageText);
    fetch("https://cs396-final-project.herokuapp.com/message", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messageText,
        roomId: room,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  socket.removeAllListeners("messageReceived");
  socket.on("messageReceived", (data) => {
    console.log(data);
    setMessages([data.body[0], ...messages]);
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
            border: "1px black solid",
          }}
        >
          <GiftedChat
            messages={messages}
            onSend={(newMessage) => onSend(newMessage)}
            user={{
              id: socket.id,
            }}
            renderInputToolbar={(props) => customInputToolbar(props)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const customInputToolbar = (props) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        borderTop: "1px solid black",
      }}
    />
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
