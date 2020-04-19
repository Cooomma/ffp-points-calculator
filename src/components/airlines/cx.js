import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(135deg, #005358 30%, #FFFFFF 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        height: 48,
        padding: "0 30px",
        minHeight: 128,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        color: "white",
    },
    pos: {
        marginBottom: 12,
    },
});

function CXAirlineCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                    Cathay Pacific - CX
                </Typography>
                <Typography className={classes.title} variant="subtitle1" color="textSecondary" gutterBottom>
                    Macro Polo Club
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CXAirlineCard;
