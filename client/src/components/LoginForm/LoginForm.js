import React, { useState, useRef } from 'react'

//  Axios
import axios from 'axios'

// Stylings
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textField: {
        width: theme.spacing(40),
        marginTop: theme.spacing(2),
        margin: theme.spacing(2)
    },
    btn: {
        marginTop: theme.spacing(5),
        width: theme.spacing(40)
    },
}));

const LoginForm = ({ userLogin }) => {
    const classes = useStyles();

    const userRef = useRef()
    const passRef = useRef()

    return (
        <div className={classes.container}>
            <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                inputRef={userRef}
            />
            <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                inputRef={passRef}
            />
            <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={() => { userLogin(userRef.current.value, passRef.current.value) }}
            >
                Login
                </Button>
        </div>
    )
}

export default LoginForm
