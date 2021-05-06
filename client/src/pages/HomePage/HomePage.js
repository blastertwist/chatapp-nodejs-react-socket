import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

//  Components
import ContactList from '../../components/ContactList/ContactList'
import ChatView from '../../components/ChatView/ChatView'

// Stylings
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex'
    }
}));

const HomePage = () => {
    const classes = useStyles()
    const history = useHistory()
    const [clickedUser, setClickedUser] = useState({})

    const getUserData = async () => {
        try {
            const res = await axios.get("http://localhost:3001/api/v1/auth/get-user", {
                headers: {
                    'x-access-token': localStorage.getItem("token")
                }
            })
            if (res.data.status == "GET_PROFILE_SUCCESS") {

            } else {
                alert("Failed to login, please check your username and password")
                history.push("/auth")
            }
        } catch (err) {
            history.push("/auth")
            alert("Failed to login, please check your username and password")
        }
    }
    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div className={classes.container}>
            <ContactList userClicked={(value) => setClickedUser(value)} />
            <ChatView userData={clickedUser} />
        </div>
    )
}

export default HomePage
