import React ,{useState, useEffect}from 'react'
import './App.css';
import Message from "./components/Message"
import { Button } from '@material-ui/core';
import { FormControl,Input, InputLabel } from '@material-ui/core';
import db from './Firebase';
import firebase  from 'firebase';
import FlipMove from "react-flip-move"
function App() {
  const [input , setInput] = useState("")
  const [messages, setMessages] = useState([]);
  const [username, setUsername]= useState('')
  useEffect(()=>{
    //run once when the app component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{setMessages(snapshot.docs.map(doc=>(doc.data())))})
  },[])

console.log(messages)
  useEffect(() => {
    setUsername(prompt("Enter your name"))
  }, [])
//if its blank inside[] this code runs once the app component loads 

  const sendMessage =(e)=>{
    e.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([...messages, {username:username, text:input}])
    setInput("")
  }
  return (
    <div className="App">



      <h2>welcome {username}</h2>
      <form className="app__form" >
    <FormControl className="app__formControl" >
      <InputLabel>Enter your message..</InputLabel>
   <Input className="app__input" type="text" value = {input} onChange={(e)=>{setInput(e.target.value)}} />
   <Button className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send </Button>
   </FormControl>
   </form>
   <FlipMove>
   {messages.map((message)=>(
    <Message username={username} message={message}/>

  ))}
   </FlipMove>
 

  </div>
);
}

export default App;
