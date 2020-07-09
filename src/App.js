import React, { useState, useEffect } from 'react';
import firebase from "firebase";

import { Button } from '@material-ui/core';
import { FormControl, Input, Container } from '@material-ui/core'
import FlipMove from 'react-flip-move';

import Message from "./Message";
import db from "./firebase";
import './App.css';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please Enter your name:"));
  }, [])

  useEffect(() => {
    db.collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    })
  }, [])

  const sendMessage = (event) => {
    // * All the logic to send message here
    event.preventDefault();
    if (input !== "") {
      db.collection("messages").add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    setInput("");
  }
  return (
    <Container className="container">
      <div className="header">
        <h1>Messenger</h1>
        <img alt="Logo" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      </div>
      <h2 className="header">Welcome: {username}</h2>
      <FlipMove>
        {
          messages.map(({ id, data }) => (
            <Message key={id} message={data} username={username} />
          ))
        }
      </FlipMove>
      <form className="my-form">
        <FormControl className="app__formcontrol">
          <Input placeholder="Enter a message..." id="my-input" aria-describedby="Message" value={input} onChange={event => setInput(event.target.value)} />
          <Button className="send-button" disabled={!input} variant="outlined" color="secondary" type="submit" onClick={sendMessage} >
            Send Message
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default App;
