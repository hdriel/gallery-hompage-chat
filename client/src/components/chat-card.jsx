import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import {CardHeader} from "@material-ui/core";
import ChatMessageItem from "./chat-message-item";
import socketIOClient from "socket.io-client";
import {ENDPOINT, EVENTS} from "../utils/consts";

const useStyles = makeStyles({
    root: {
        height: 'inherit',
        width: '100%',
        borderRadius: 15,
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    header: {
        height: 10,
        background: '#DFDFDF'
    },
    content: {
        height: "inherit",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '0 15px',
        overflowY: 'auto',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sendBtn: {
        paddingTop: 6,
        paddingBottom: 6,
    },
    input: {
        flex: '1 1 auto',
        border: '1px solid black',
        borderRadius: 4,
        paddingLeft: 5,
        paddingRight: 5,
    }
});

const ChatCard = props => {
    const classes = useStyles();
    const [send, setSend] = useState(false);
    const [message, setMessage] = useState('');

    const handler = (event) => setMessage(event.target.value);
    const submit = () => setSend(true);

    useEffect(() => {
        if(message && send){
            const socket = socketIOClient(ENDPOINT);
            socket.emit(EVENTS.SEND_MESSAGE, message);

            setSend(false);
            setMessage('');
        }
    }, [message, send])

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                title='Chat'
            />

            <CardContent className={classes.content}>
                {
                    props.messages.map(({sender, message}, k) =>
                        <ChatMessageItem
                            key={k}
                            sender={sender}
                            message={message}
                        />
                    )
                }
            </CardContent>

            <CardActions className={classes.actions}>
                <InputBase
                    placeholder="Write your message..."
                    inputProps={{ 'aria-label': 'search' }}
                    className={classes.input}
                    value={message}
                    onChange={handler}
                />
                <Button
                    className={classes.sendBtn}
                    variant="contained"
                    size="small"
                    color="primary"
                    disabled={!message}
                    onClick={submit}
                >Send</Button>
            </CardActions>
        </Card>
    );
}

export default ChatCard;
