import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import corner from "../../assets/img/HeaderGraphic.png";
import { makeStyles } from "@mui/styles";

const styles = {
  author: {
    fontStyle: "italic",
    fontSize: "14px",
    fontWeight: "bold",
  },
  cardStyle: {
    backgroundColor: "#ffffff",
    color: "black",
    padding: 20,
  },
  imgGridCont: {
    display: "flex",
    // justifyContent: "center",
    // alineItems: "center",
  },
  imgCont: {
    overflow: "hidden",
  },
  image: {
    // width: "800px",
    width: "100%",
    // height: "1000px",
    objectFit: "cover",
  },
  cardArea: {
    height: "100%",
  },
};

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    // border: "1px solid gray",
    transition: "all 0.9s ease",
    // backgroundColor: "gray",
    "&:hover": {
      boxShadow: "3px 6px 22px #d4d2d2",

      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "auto",
    },
  },
  mainContainer: {
    // backgroundColor: "#f1f1f1",
    // padding: "100px 0px",
    marginTop: 40,
    // backgroundColor: "#11147b",
    backgroundImage: `linear-gradient(-135deg,${theme.palette.primary.newBlue} 25%,${theme.palette.primary.deepBlue})`,

    paddingTop: 30,
    paddingBottom: 30,
  },
}));

const Corner = () => {
  const classes = useStyles();
  return (
    <section className={classes.mainContainer}>
      <Container
        sx={{
          mt: 10,
          // backgroundColor: "#fffbf0",
          p: "20px",
        }}
      >
        <Grid
          container
          spacing={0}
          // border="1px solid blue"
          // data-aos="zoom-in"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
        >
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Sofia-Pro-Black",
                  color: "#6c757d",
                  textAlign: "left",
                }}
                variant="h4"
                fontSize="60px"
              >
                <span style={{ color: "#FFF" }}>CrowdShare</span>
                <br /> is in Your
                <br /> Corner
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  // paddingTop: 5,
                  paddingBottom: 5,
                  color: "#fff",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    xl: "85%",
                  },
                }}
              >
                We provide intuitive solutions to help you streamline your
                social media marketing efforts and strengthen interactions with
                your followers and customers-to-be. CrowdShare is the brainchild
                of social media marketers who understand the most common
                challenges that come along with growing a small business on
                social.
              </Typography>
            </Box>
          </Grid>
          <Grid
            style={styles.imgGridCont}
            item
            xs={12}
            lg={6}
            alignItems="center"
            // border="1px solid red"
          >
            <Box style={styles.imgCont}>
              <img src={corner} alt="chart" style={styles.image} />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div
              sx={
                {
                  // maxWidth: 345
                }
              }
              className={classes.card}
              style={styles.cardStyle}
            >
              <Typography
                textAlign="start"
                variant="body1"
                //   color={"white"}
              >
                “I want to build my social following and grow my business, but
                influencers and growth tools are too expensive.”
              </Typography>
              <span style={styles.author}>- John Kilmer (Phillip Morris)</span>

            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div
              sx={
                {
                  // maxWidth: 345
                }
              }
              className={classes.card}
              style={styles.cardStyle}
            >
              <Typography textAlign="start" variant="body1">
                “I know I should be creating quality content on social media,
                but I’m overwhelmed and pressed for time.”
              </Typography>
              <span style={styles.author}>- Kiara Fisher (Emirat Airways)</span>

            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div
              sx={
                {
                  // maxWidth: 345
                }
              }
              className={classes.card}
              style={styles.cardStyle}
            >
              <Typography textAlign="start" variant="body1">
                “I’ve tried other social media management platforms, but they
                lack the features I need to grow my social following and see a
                notable ROI.”
              </Typography>
                <span style={styles.author}>- Jit Baroi (JSE Internationals)</span>

            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Corner;
