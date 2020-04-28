import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "black",
        color: "white",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function TopBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={clsx(classes.appBar)}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        FFP Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopBar;
