import { Box, Button, Grid, Typography } from "@mui/material";
// import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { makeStyles } from "@mui/styles";
// import DataUsageIcon from "@mui/icons-material/DataUsage";
// import PaymentsIcon from "@mui/icons-material/Payments";
import { Container, styled } from "@mui/system";
import React from "react";
import community from "../../assets/img/csbranding.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // backgroundColor: "#f1f1f1",
    // padding: "100px 0px",
    marginTop: 80,
    overflow: "hidden",
  },
  subContainer: {
    backgroundColor: "red",
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
  alineGrid: {
    display: "flex",
    justifyContent: "center",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 40px",
    height: "700px",
    [theme.breakpoints.down("lg")]: {
      padding: "40px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "400px",
      width: "100%",
      padding: "40px 0 0 0",
      // marginTop: "20px",
    },
  },
  boxStyle: {
    height: "230px",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  height: "40px",
  width: "20rem",
  background: "#FEBF12",
  borderRadius: "50px",
  color: "black",
  textTransform: "uppercase",
  fontSize: ".75rem",
  fontWeight: "bold",
  marginTop: 20,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const Hyperlocal = () => {
  const classes = useStyles();
  return (
    <section className={classes.mainContainer}>
      <Container maxWidth="xl">
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
              Hyperlocal Social{" "}
              <span style={{ color: "#4F76A6" }}>Media Marketing</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sofia-Pro-Regular",
                textAlign: "left",
                fontSize: 24,
                fontWeight: 400,
                color: "gray",
                pt: 2,
                // pb: 5,
              }}
              color="#6c757d"
            >
              Create a raving community of brand fans and compound your results.
              The CrowdShare platform provides you with the insights, tools and
              self-assurance you need to flourish on social media. Whether
              you're just getting started, or you’ve been looking for the
              all-in-one solution to manage and grow your business on social
              media, we’ve got you covered.
            </Typography>
          </Box>
        </Box>
        <Box
          className={classes.alineCont}
          //
          //   data-aos="fade-up"
          //   data-aos-duration="2000"
          //   data-aos-easing="ease-in-out"
        >
          <Box maxWidth="lg">
            <StyledButton
              sx={{
                mb: 5,
                fontFamily: "Sofia-Pro-Bold",
              }}
              variant="contained"
            >
              {" "}
              Explore Solutions
            </StyledButton>
          </Box>
        </Box>
        <Grid container className={classes.alineGrid}>
          <Grid className={classes.imageContainer} order={2} item lg={6}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              src={community}
              alt=""
            />
          </Grid>
          <Grid sx={{ paddingRight: 0 }} order={1} item lg={5}>
            <Grid container direction="column">
              <Grid
                item
                lg={3}

                //
              >
                <Box
                  className={`${classes.boxStyle} ${classes.gridStyle}`}
                  backgroundColor="#e9f1f7"
                  padding={3}
                  borderRadius={5}
                  sx={{ mb: 3 }}
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
                    Make a Meaningful Impact
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                    // color="#6c757d"
                    fontWeight="bold"
                    variant="subtitle1"
                  >
                    Become a trusted name in your industry and reduce the sales
                    cycle so you can serve more customers who are looking for
                    your solution.
                  </Typography>
                </Box>
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
                  Boost Proactivity
                </Typography>
                <Typography
                  sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                  fontWeight="bold"
                  variant="subtitle1"
                >
                  With detailed performance statistics, you can actively improve
                  your social media content, campaign effectiveness, and
                  engagement techniques.
                </Typography>
              </Grid>
              <Grid
                sx={
                  {
                    // mb: 3,
                  }
                }
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
                  Get Motivated
                </Typography>
                <Typography
                  sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                  // color="#6c757d"
                  fontWeight="bold"
                  variant="subtitle1"
                >
                  By studying trends and gaps in the market and among rivals and
                  fans, you’ll be equipped with the ability to create a social
                  media content calendar that stands out amongst the noise.
                </Typography>
              </Grid>
            </Grid>
            <Grid lg={1}></Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hyperlocal;
