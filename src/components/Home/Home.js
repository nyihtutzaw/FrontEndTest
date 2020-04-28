import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../Navbar/Navbar';
import { Container, Grid, Box } from '@material-ui/core';
import UserCard from './UserCard.js';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: 
    {
        paddingTop:50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 240,
    },
    card: 
    {
        padding:20,
        elevation:2,
    },
    pagination_container: 
    {
        marginTop:20,
        paddingBottom:40,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItem:"center",
        
        
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                    <Grid item md={3} xs={12} sm={6}>
                        <UserCard />
                    </Grid>
                  
                </Grid>
                <Box className={classes.pagination_container}>
                        <Pagination count={10} />
                </Box>
                
            </Container>
        </div>
    );
}