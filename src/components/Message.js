import React,{forwardRef} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../css/Message.css"
const Message=forwardRef(({ message,username}, ref) =>{
    const isUser = username === message.username;
   
      
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}> 
            <Card className={ isUser ? "message__userCard": "message__guestCard"}>
      <CardContent>
   
        <Typography color="white"variant="body2" component="p">
      {!isUser && `${message.username || 'Unknown user'}:`}  {message.message}
        </Typography>
      </CardContent>
      </Card>
           
     
        </div>
    )
})

export default Message
