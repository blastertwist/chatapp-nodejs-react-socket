import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

//  Components
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

// Stylings
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    papper: {
        margin: theme.spacing(20),
        width: theme.spacing(50),
        height: theme.spacing(70),
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center'
    },
    selections: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    selectionFocus: {
        flex: 1,
        backgroundColor: '#EDEDED',

    },
    selection: {
        flex: '1'
    }
}));

const AuthPage = () => {
    const classes = useStyles();
    const [inFocus, setInFocus] = useState("Login");
    const history = useHistory()

    const userRegister = async (userData) => {
        const res = await axios.post("http://localhost:3001/api/v1/auth/register", userData)

        if (res.data.status == "REGISTER_SUCCESS") {
            userLogin(userData.username, userData.password)
        } else {
            alert("Register Error, try again later...")
        }
    }

    const userLogin = async (username, password) => {
        console.log(username, password)
        const res = await axios.post("http://localhost:3001/api/v1/auth/login", {
            username,
            password,
        })

        if (res.data.status == "LOGIN_SUCCESS") {
            localStorage.setItem('token', res.data.token)
            history.push("/")

        } else {
            alert("Login Error, try again later...")
        }
    }
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Paper className={classes.papper}>
                <Typography variant="h3">Auth</Typography>
                <div className={classes.selections}>
                    <div
                        onClick={() => setInFocus("Login")}
                        className={inFocus == "Login" ?
                            classes.selectionFocus : classes.selection}>
                        <Typography variant="h5">Login</Typography>
                    </div>
                    <div
                        onClick={() => setInFocus("Register")}
                        className={inFocus == "Register" ?
                            classes.selectionFocus : classes.selection}>
                        <Typography variant="h5">Register</Typography>
                    </div>
                </div>
                {inFocus == "Login" ? <LoginForm userLogin={(user, pass) => { userLogin(user, pass) }} /> : <RegisterForm userRegister={(value) => userRegister(value)} />}
            </Paper>
        </Box>
    )
}

export default AuthPage
