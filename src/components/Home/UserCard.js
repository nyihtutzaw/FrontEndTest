import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 240,
    },
    card: 
    {
        padding:20,
        backgroundColor:"#fff",
        
    }
}));

export default function UserCard() {
    const classes = useStyles();

    return (
        
                        <Card className={classes.card} >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://assets.petco.com/petco/image/upload/f_auto,q_auto/2968998-center-3"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Lizard
                                    </Typography>
                                    <Typography>
                                        mgmg@gmail.com
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        
                        </Card>
                 
    );
}