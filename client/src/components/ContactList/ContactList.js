import React, { useState } from 'react'

// Components
import Contact from './Contact/Contact'

// Stylings
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { getDefaultNormalizer } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        height: '100vh',
        borderRight: '0.5px solid black'
    },
    contacts: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '10px',
    },
    textField: {
        width: theme.spacing(49),
        backgroundColor: '#ffffff'
    },
    searchBox: {
        display: 'flex',
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing(10),
    }
}));

const friendList = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe"
    },
    {
        id: 2,
        firstName: "Anne",
        lastName: "White"
    },
    {
        id: 3,
        firstName: "William",
        lastName: "Whites"
    },
    {
        id: 4,
        firstName: "Jhonny",
        lastName: "Deep"
    },
]

const ContactList = ({ userClicked }) => {
    const classes = useStyles()
    const [clickedUser, setClickedUser] = useState({})

    return (
        <div className={classes.container}>
            <div className={classes.contacts}>
                <div className={classes.searchBox}>
                    <TextField
                        className={classes.textField}
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                    />
                </div>
                {friendList.map((contact, index) => (
                    <div onClick={() => {
                        console.log("TRIGGER")
                        setClickedUser(contact)
                        userClicked(contact)
                    }}>
                        <Contact
                            key={index}
                            firstName={contact.firstName}
                            lastName={contact.lastName} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ContactList
