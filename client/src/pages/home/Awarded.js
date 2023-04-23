import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import toprated from "../../assets/images/toprated.png";
// import chrome from "../../assets/images/chrome.png";
// import applestore from "../../assets/images/applestore.png";
// import googleplay from "../../assets/images/googleplay.png";
// import highperformer from "../../assets/images/highperformer.png";
// import summer from "../../assets/images/summer.png";
// import easiestsummer from "../../assets/images/easiestsummer.png";
// import getapp from "../../assets/images/getapp.png";

const styles = {
  container: {
    // width: "80%",
    paddingTop: 75,
    paddingBottom: 175,
  },
  image: {
    // height: 220,
    // width: "25px",
  },
};

const Awarded = () => {
  return (
    <div>
      <Container style={styles.container} maxWidth="xl">
        <Typography
          sx={{
            fontFamily: "Sofia-Pro-Black",
            color: "#6c757d",
            mb: "60px",
          }}
          variant="h4"
          fontSize="55px"
        >
          INVESTORS THAT WE WORK WITH
        </Typography>
        <Typography variant="h6" marginTop={5} marginBottom={8}>
          Our current network as of Q2-2022 includes over 6,000+ venture funds,
          angel investors, angel groups and family offices; with about 100~ new
          investors and investment groups being accepted to the network each
          month.
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2021/04/DreamIt.png"
                alt="toprated"
                style={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2020/10/elevate-capital.png"
                alt="chrome"
                style={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2021/04/AlumniVentuteGroup.png"
                alt="applestore"
                style={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2021/04/Scrum-Ventures.png"
                alt="googleplay"
                style={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2021/04/PlugAndPlay.png"
                alt="highperformer"
                style={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2021/04/Paypal.png"
                alt="summer"
                style={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2021/04/BlueCollective.png"
                alt="easiestsummer"
                style={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <img
                src="https://newchip.com/wp-content/uploads/2021/04/Healthbox.png"
                alt="getapp"
                style={styles.image}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Awarded;
