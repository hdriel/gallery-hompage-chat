import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import {CardHeader} from "@material-ui/core";
import ChatMessageItem from "./chat-message-item";
import {EVENTS} from "../utils/consts";
import {getSocket} from "../utils";
import {useSelector} from "react-redux";
import UsernameDialog from "./username-dialog";

const useStyles = makeStyles({
    root: {
        height: 'inherit',
        width: '100%',
        borderRadius: 15,
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    const [openUsernameDialog, setOpenUsernameDialog] = useState(false);
    const [message, setMessage] = useState('');
    const username = useSelector(state => state.settings.username);
    const { imageId } = props;

    const handler = (event) => setMessage(event.target.value);
    const submit = () => setSend(true);

    const keyPress = ({keyCode}) => keyCode === 13 && submit();

    const closeDialog = () => {
        setSend(false)
        setOpenUsernameDialog(false);
    }

    useEffect(() => {
        if(!username && message && send){
            setOpenUsernameDialog(true);
        }
        else if(message && send){
            getSocket().emit(EVENTS.SEND_MESSAGE, {
                username,
                message,
                imageId,
            });

            setSend(false);
            setMessage('');
        }
    }, [username, message, send, imageId])

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    title={
                        <span className='chat-header-title'>
                            Chat
                            <span onClick={setOpenUsernameDialog.bind(this, true)}>
                                { username ? `as '${username}'` : 'connect' }
                            </span>
                        </span>
                    }
                />

                <CardContent className={classes.content}>
                    {
                        props.messages.map(({username, message, date}, k) =>
                            <ChatMessageItem
                                key={k}
                                sender={username}
                                message={message}
                                date={date}
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
                        onKeyDown={keyPress}
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

            <UsernameDialog username={username} onClose={closeDialog} show={openUsernameDialog}/>
        </>
    );
}

export default ChatCard;
