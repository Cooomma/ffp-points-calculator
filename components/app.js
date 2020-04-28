import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Grid } from "@material-ui/core";
import { Divider, List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AirlineCard from "./airlineCards";
import airlines from "../assets/airlines.json";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "black",
        color: "white",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(4, 4, 4, 4),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        backgroundColor: "black",
        color: "white",
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: "black",
        color: "white",
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
}));

function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        FFP Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon style={{ color: "white" }} />
                        ) : (
                            <ChevronRightIcon style={{ color: "white" }} />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {airlines.map((airline) => (
                        <ListItem button key={airline.name}>
                            <ListItemText primary={airline.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Grid container spacing={1}>
                    {airlines.map((airline) => (
                        <Grid item xs>
                            <AirlineCard
                                name={airline.name}
                                iata={airline.iata}
                                ffpName={airline.ffpName}
                                flagColor={airline.flagColor}
                            />
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>
    );
}

export default App;
