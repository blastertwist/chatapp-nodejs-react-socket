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
        width: theme.spacing(50),
        height: theme.spacing(10),
        borderBottom: '0.5px solid black',
        '&:hover': {
            background: "#EEEEEE",
        },
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const Contact = ({ firstName, lastName }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Typography variant="h6">{firstName} {lastName}</Typography>
        </div>
    )
}

export default Contact
