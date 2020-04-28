import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
 
  title: {
    flexGrow: 1,
  },
  appBar: {
      backgroundColor:"#0a614d",
  }
}));

export default function Navbar() {
    const classes = useStyles();

  return (
    
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
            
                <Typography variant="h6" className={classes.title}>
                        Frontend Testing
                </Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    
  );
}