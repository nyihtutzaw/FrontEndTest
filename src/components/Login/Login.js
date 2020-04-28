import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import useStyles from './style.js';



export default function Login() {

    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [email_error, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [password_error, setPasswordError] = useState(false);

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }

    function handleSubmit(event) {
        event.preventDefault();
        if (email.length==0 || password.length==0) 
        {
            if (email.length==0) setEmailError(true)
            if (password.length==0) setPasswordError(true)
        }
        else 
        {
            alert("Good to go ");
        }
        
        


    }




    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.form_container}>

                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <TextField
                        className={classes.textField}
                        type="email"
                        id="outlined-error-helper-text"
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        error={email_error}
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={email_error?"Email is required":""}
                    />
                    <TextField
                        className={classes.textField}
                        type="password"
                        id="outlined-error-helper-text"
                        margin="normal"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        error={password_error}
                        onChange={(e) => setPassword(e.target.value)}
                        helperText={email_error?"Password is required":""}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.button}
                    >
                        Sign In
                    </Button>

                </form>
            </div>

        </Container>
    );
}