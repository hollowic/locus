import React, { useState, useEffect, Component } from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground, TextInput, FlatList, StyleSheet, Dimensions, YellowBox } from "react-native";

import io from 'socket.io-client';


import { ROOT_URL } from '../../../../configKeys';
import styles from './ChatStyle';

import { ThemeProvider, useNavigation } from "@react-navigation/native";

import { GiftedChat } from 'react-native-gifted-chat';


// const socket = io("https://826a3840.ngrok.io");

// export default function Chat({ navgiation, route }) {
//   const { sendToId } = route.params;
//   // console.log(sendToId);

//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([]);
//   const [socket, setSocket] = useState(io("https://99504048.ngrok.io"));

//   useEffect(() => {
//     // const newSocket = io("https://826a3840.ngrok.io");
//     // setSocket(newSocket);
//     // newSocket.on("chat message", msg => {
//     //   console.log(`message received in front end ${msg}`);
//     //   console.log(chatMessages);
//     //   setChatMessages([...chatMessages, msg]);
//     // });

//     socket.on("chat message", msg => {
//       setChatMessages([...chatMessages, msg]);
//       console.log(`message received in front end ${msg}`);
//       console.log(chatMessages);

//     });
//   },[]);

//   // console.log(socket);

//   // console.log(chatMessages);

//   const onSubmitEditing = () => {
//     // setChatMessages([...chatMessages, message]);
//     setMessage("");
//     socket.emit("chat message", message);
//   }

//   return (
//     <View style={styles.container}>
//         <View style={styles.messagesContainer}>
//           {/* <FlatList
//             data={chatMessages}
//             key={1}
//             renderItem={({ item }) => {
//               (<Text>hi</Text>)
//             }}
//           /> */}
//           {chatMessages.map((chat, idx) => {
//             return (<Text key={idx}>{chat}</Text>);
//           })}
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={{height: 40, borderWidth: 2, width: 250, position: 'absolute'}}
//             autoCorrect={false}
//             value={message}
//             onSubmitEditing={onSubmitEditing}
//             onChangeText={msg => setMessage(msg)}
//           />
//         </View>
//     </View>
//   );
// }


YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default class Chat extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
       messages: [],
       socketId: ""
    };
    this.deviceWidth = Dimensions.get("window").width;
    this.imageId = props.route.params.imageId;
    this.userId = props.route.params.user.id;
    this.username = props.route.params.user.username;
    this.avatar = props.route.params.user.profile_pic;
    console.log(`image: ${this.imageId}`)
    console.log("userId");
    console.log(this.userId);
  }

  componentDidMount() {
    this.socket = io(ROOT_URL);
    // this.socket.emit('room', this.imageId);
    this.socket.on("connect", () => {
      this.socket.emit('room', this.imageId);
      console.log(`conencted as ${this.socket.id}`)
      this.setState({ socketId: this.socket.id});
    })
    this.socket.on("chat message", msg => {
        console.log(`got a message from ${msg.id}`)
        if (this.socketId === msg.id) {
          console.log("I got a message from myself");
        }
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, msg),
        }));
    });

    this.socket.on("new person", msg => {
      console.log("new person joined the room");
    })


    this.setState({
      messages: [
        // {
        //   _id: 1,
        //   text: 'Hello developer',
        //   createdAt: new Date(),
        //   user: {
        //     _id: 2,
        //     name: 'React Native',
        //     avatar: 'https://placeimg.com/140/140/any',
        //   },
        // },
      ],
    })
  } 

  onSend(messages=[]) {
    this.socket.emit('chat message', messages);
    console.log("message: ");
    console.log(messages);
    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, messages),
    // }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: this.userId,
          avatar: this.avatar,
          name: this.username
        }}
        renderUsernameOnMessage={true}
      />
    );
  }
}
