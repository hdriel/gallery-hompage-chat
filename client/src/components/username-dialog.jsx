import React, {useCallback, useEffect, useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch} from "react-redux";
import * as chatActions from "../store/actions/chat";
import {EVENTS} from "../utils/consts";
import {getSocket} from "../utils";

const UsernameDialog = (props) => {
    const { show, onClose, username: initUsernameVal = '' } = props;
    const [open, setOpen] = useState(show);
    const [error, setError] = useState(false);
    const [hasSubmit, setHasSubmit] = useState(false);
    const [username, setUsername] = useState(initUsernameVal);
    const nodeRef = useRef(null);
    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
        setOpen(false);
        onClose && onClose();
    }, [onClose]);

    const handleChange = (event) => {
        setError(false);
        setUsername(event.target.value);
    }

    const submit = () => {
        setHasSubmit(true);
    }

    const keyPress = ({keyCode}) => keyCode === 13 && submit();

    useEffect(() => { setOpen(show); }, [show]);

    useEffect(() => {
        if(hasSubmit){
            setHasSubmit(false);

            getSocket().emit(
                EVENTS.CONNECTING,
                {username, prevUsername: initUsernameVal},
                (successfully) => {
                    if(successfully){
                        dispatch(chatActions.updateUsername(username))
                        handleClose();
                    }
                    else {
                        setError(true);
                        setUsername('');
                        dispatch(chatActions.updateUsername(''))
                    }
                }
            );
        }
    },
    [dispatch, hasSubmit, username, handleClose, initUsernameVal]
    );

    return (
        <Dialog
            ref={nodeRef}
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent className='username-dialog'>
                <DialogContentText>
                    To chat in this website, please enter your username here.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Username"
                    type="text"
                    fullWidth
                    value={username}
                    onKeyDown={keyPress}
                    onChange={handleChange}
                />
                {error && <span className='username-dialog-error'>This username already exists. try something else...</span>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> Cancel </Button>
                <Button onClick={submit} color="primary"> Continue </Button>
            </DialogActions>
        </Dialog>
    );
}

export default UsernameDialog;
