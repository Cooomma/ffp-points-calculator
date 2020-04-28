import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 20,
        boxShadow: "0 3px 5px 2px rgba(179, 179, 179, .3)",
        height: 48,
        padding: "0 30px",
        minHeight: 128,
        maxHeight: 256,
        minWidth: 128,
        maxWidth: 256,
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

function AirlineCard(props) {
    const classes = useStyles();

    return (
        <Card
            className={classes.root}
            style={{ background: `linear-gradient(135deg, ${props.flagColor} 30%, #FFFFFF 90%)` }}
            variant="outlined"
        >
            <CardContent>
                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography className={classes.title} variant="subtitle1" color="textSecondary" gutterBottom>
                    {props.ffpName}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default AirlineCard;
