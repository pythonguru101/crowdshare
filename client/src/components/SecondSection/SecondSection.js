import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 420,
    backgroundColor: "#fff",
  },
  image: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      order: 2,
      paddingTop: theme.spacing(4),
    },
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
    color: "#6c757d",
    fontSize: "3.0rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
    },
  },
}));

const styles = {
  container: {
    marginBottom: 30,
    marginTop: 30,
    paddingBottom: 30,
    paddingTop: 30,
  },
};

const SecondSection = () => {
  const classes = useStyles();
  return (
    <Container style={styles.container}>
      <Grid container>
        {/* first there will be a title then 3 columns with 3 logos  */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.root}
        >
          <Typography variant="h5" className={classes.title}>
            Trusted by 60K+ sales teams worldwide
          </Typography>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            direction="row"
            container
          >
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} direction="column">
              <img
                src="https://i.imgur.com/Tequ4ro.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/cRae7Ui.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/LJe1ZY0.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} direction="column">
              <img
                src="https://i.imgur.com/52c3kJZ.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/A3mduvO.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/C26Moe4.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} direction="column">
              <img
                src="https://i.imgur.com/S0rq39r.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/tfZjZdO.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/YxIKxnf.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} direction="column">
              <img
                src="https://i.imgur.com/f2f7hig.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/oVFjFF9.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
              <img
                src="https://i.imgur.com/xKyuGqa.png"
                alt="CrowdShare logo"
                className={classes.image}
                style={{ height: 100 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondSection;
