import React, { forwardRef } from "react";
import "./Message.css"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;

    return (
        <div ref={ref}>
            <Card className={`message ${isUser && "message_user"}`}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2">
                        {!isUser && `${message.username}: `}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message
