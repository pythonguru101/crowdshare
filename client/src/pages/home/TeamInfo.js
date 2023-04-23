import { Box, Button, Grid, Typography } from "@mui/material";
// import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { makeStyles } from "@mui/styles";
// import DataUsageIcon from "@mui/icons-material/DataUsage";
// import PaymentsIcon from "@mui/icons-material/Payments";
import { Container, styled } from "@mui/system";
import React from "react";
import socialLife from "../../assets/img/socialLife.jpg";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // backgroundColor: "#f1f1f1",
    // padding: "100px 0px",
    marginTop: 80,
    backgroundColor: "#f4f7fb",
    paddingTop: 30,
    paddingBottom: 30,
  },
  gridStyle: {
    "&:hover": {
      boxShadow: "0px 6px 15px #dce0e3",
      border: "1px solid #dce0e3",
    },
  },
  alineCont: {
    display: "flex",
    justifyContent: "center",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  height: "40px",
  width: "20rem",
  background: "#FEBF12",
  borderRadius: "50px",
  color: "white",
  textTransform: "uppercase",
  fontSize: ".75rem",
  fontWeight: "bold",
  marginTop: 20,
  "&:hover": {
    borderColor: "#fffff4",
    backgroundColor: "yellow",
    color: "#222222",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const TeamInfo = () => {
  const classes = useStyles();
  return (
    <section className={classes.mainContainer}>
      <Container maxWidth="xl" style={{ overflow: "hidden" }}>
        <Box className={classes.alineCont}>
          <Box maxWidth="lg">
            <Typography
              sx={{
                fontFamily: "Sofia-Pro-Black",
                color: "#303138",
              }}
              variant="h4"
              fontSize="60px"
            >
              Simplify Your{" "}
              <span style={{ color: "#4F76A6" }}>Social Life</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sofia-Pro-Regular",
                textAlign: "left",
                fontSize: 24,
                fontWeight: 400,
                color: "gray",
                pt: 2,
                pb: 5,
              }}
              color="#6c757d"
            >
              Combine all of your social media responsibilities into a single,
              efficient workflow, so you can focus on what matters most. We
              provide the resources you need to maximize your results on social
              media with ease. No more logging into a separate native platform
              every time you want to post, engage or analyze your efforts –
              CrowdShare keeps you in the flow.
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={5} marginTop={3} justifyContent="center">
          <Grid
            item
            lg={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={socialLife}
              alt=""
            />
          </Grid>
          <Grid sx={{ paddingRight: 0 }} item lg={5}>
            <Grid container direction="column">
              <Grid
                sx={{ mb: 3 }}
                item
                lg={3}
                className={classes.gridStyle}
                backgroundColor="#e9f1f7"
                padding={3}
                borderRadius={5}
                //
                data-aos="fade-right"
                data-aos-duration="1000"
                // data-aos-delay="200"
                data-aos-easing="ease-in-out"
              >
                <Typography
                  sx={{
                    fontFamily: "Sofia-Pro-SemiBold",
                    fontWeight: "bold",
                    textAlign: "left",
                    color: "#11147b",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Get Creative
                </Typography>
                <Typography
                  sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                  // color="#6c757d"
                  fontWeight="bold"
                  variant="subtitle1"
                >
                  Get access to our easy-to-use design tools so you can create
                  professional content that converts.
                </Typography>
              </Grid>
              <Grid
                sx={{ mb: 3 }}
                item
                lg={3}
                className={classes.gridStyle}
                backgroundColor="#e9f1f7"
                padding={3}
                borderRadius={5}
                //
                data-aos="fade-left"
                data-aos-duration="1000"
                // data-aos-delay="200"
                data-aos-easing="ease-in-out"
              >
                <Typography
                  sx={{
                    fontFamily: "Sofia-Pro-SemiBold",
                    fontWeight: "bold",
                    textAlign: "left",
                    color: "#11147b",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Stay Productive
                </Typography>
                <Typography
                  sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                  // color="#6c757d"
                  fontWeight="bold"
                  variant="subtitle1"
                >
                  Consolidate all of your social media profiles into one single
                  stream. Schedule your posts in advance, then publish them to
                  all of your profiles at once.
                </Typography>
              </Grid>
              <Grid
                sx={{ mb: 3 }}
                item
                lg={3}
                className={classes.gridStyle}
                backgroundColor="#e9f1f7"
                padding={3}
                borderRadius={5}
                //
                data-aos="fade-right"
                data-aos-duration="1000"
                // data-aos-delay="200"
                data-aos-easing="ease-in-out"
              >
                <Typography
                  sx={{
                    fontFamily: "Sofia-Pro-SemiBold",
                    fontWeight: "bold",
                    textAlign: "left",
                    color: "#11147b",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Get Growing
                </Typography>
                <Typography
                  sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                  fontWeight="bold"
                  variant="subtitle1"
                >
                  Tap into your network of employees, friends, family and
                  customers and assign dedicated brand fans who will share your
                  content with their followers
                </Typography>
              </Grid>
              <Grid
                sx={{ mb: 3 }}
                item
                lg={3}
                className={classes.gridStyle}
                backgroundColor="#e9f1f7"
                padding={3}
                borderRadius={5}
                //
                data-aos="fade-left"
                data-aos-duration="1000"
                // data-aos-delay="200"
                data-aos-easing="ease-in-out"
              >
                <Typography
                  sx={{
                    fontFamily: "Sofia-Pro-SemiBold",
                    fontWeight: "bold",
                    textAlign: "left",
                    color: "#11147b",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Take Charge
                </Typography>
                <Typography
                  sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                  // color="#6c757d"
                  fontWeight="bold"
                  variant="subtitle1"
                >
                  Stay one step ahead with real-time analytics. Gauge your
                  performance across all of your social media profiles, as well
                  as the performance of your assigned brand fans.
                </Typography>
              </Grid>

              <StyledButton
                sx={{ fontFamily: "Sofia-Pro-Bold" }}
                variant="contained"
              >
                {" "}
                Explore Solutions
              </StyledButton>
            </Grid>
            <Grid lg={1}></Grid>
          </Grid>
        </Grid>
        <Box
          className={classes.alineCont}
          //
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <Box maxWidth="lg">
            <Typography
              fontSize={30}
              fontStyle="italic"
              mt={5}
              px={5}
              py={2}
              style={{
                backgroundImage: "linear-gradient(-135deg,#4F76A6 25%,#11147b)",
              }}
              color="white"
              borderRadius={5}
            >
              “Being able to schedule posts, see how they are doing and
              automating people sharing my content is HUGE for my business.” -
              [Abul Basar]
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default TeamInfo;
