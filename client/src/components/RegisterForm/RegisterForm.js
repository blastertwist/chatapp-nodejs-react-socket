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
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        width: theme.spacing(40),
        margin: theme.spacing(1)
    },
    btn: {
        marginTop: theme.spacing(5),
        width: '75%'
    }
}));

const RegisterForm = ({ userRegister }) => {
    const classes = useStyles();

    const userRef = useRef()
    const passRef = useRef()
    const fNameRef = useRef()
    const lNameRef = useRef()


    return (
        <div className={classes.form}>
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
            <TextField
                className={classes.textField}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                inputRef={fNameRef}
            />
            <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                inputRef={lNameRef}
            />
            <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={() => {
                    userRegister({
                        username: userRef.current.value,
                        password: passRef.current.value,
                        firstName: fNameRef.current.value,
                        lastName: lNameRef.current.value
                    })
                }}
            >
                Register
                    </Button>
        </div>
    )
}

export default RegisterForm
