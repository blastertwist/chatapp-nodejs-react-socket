import React from 'react'

// Stylings
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        backgroundColor: '#EEEEEE',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const ChatView = ({ userData }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {userData.firstName} {userData.lastName}
        </div>
    )
}

export default ChatView
