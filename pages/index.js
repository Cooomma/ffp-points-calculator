import Head from "next/head";
import { Grid } from "@material-ui/core";
import airlines from "../assets/airlines.json";
import AirlineCard from "../components/airlineCards";
import TopBar from "../components/TopBar.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
}));

function Home() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className="container">
            <Head>
                <title>FFP Calculator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <TopBar />
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
            <footer></footer>
        </div>
    );
}
export default Home;
