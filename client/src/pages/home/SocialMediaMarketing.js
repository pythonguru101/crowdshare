import { Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import socialLife from "../../assets/img/community1.png";
import React from "react";
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
const SocialMediaMarketing = () => {
  return (
    <Container>
      <Typography variant="h2">Hyperlocal Social Media Marketing</Typography>
      <Typography variant="h4">
        Create a raving community of brand fans and compound your results. The
        CrowdShare platform provides you with the insights, tools and
        self-assurance you need to flourish on social media. Whether you're just
        getting started, or you’ve been looking for the all-in-one solution to
        manage and grow your business on social media, we’ve got you covered.
      </Typography>
      <Grid container spacing={2} marginTop={10}>
        <Grid item lg={7} style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "100%" }} src={socialLife} alt="" />
        </Grid>
        <Grid item lg={5}>
          <Grid container direction="column">
            <Grid item lg={3}>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                variant="h4"
                style={{ fontWeight: "bold", color: "#4F76A6" }}
                gutterBottom
                fontFamily={"Sofia-Pro-Bold"}
              >
                Make a Meaningful Impact
              </Typography>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-Regular" }}
                variant="subTitle1"
                color="#6c757d"
              >
                Become a trusted name in your industry and reduce the sales
                cycle so you can serve more customers who are looking for your
                solution.
              </Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                variant="h4"
                style={{ fontWeight: "bold", color: "#4F76A6" }}
                gutterBottom
                fontFamily={"Sofia-Pro-Bold"}
              >
                Boost Proactivity
              </Typography>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-Regular" }}
                variant="subTitle1"
                color="#6c757d"
              >
                With detailed performance statistics, you can actively improve
                your social media content, campaign effectiveness, and
                engagement techniques
              </Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                variant="h4"
                style={{ fontWeight: "bold", color: "#4F76A6" }}
                gutterBottom
                fontFamily={"Sofia-Pro-Bold"}
              >
                Get Motivated
              </Typography>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-Regular" }}
                variant="subTitle1"
                color="#6c757d"
              >
                By studying trends and gaps in the market and among rivals and
                fans, you’ll be equipped with the ability to create a social
                media content calendar that stands out amongst the noise
              </Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                variant="h4"
                style={{ fontWeight: "bold", color: "#4F76A6" }}
                gutterBottom
                fontFamily={"Sofia-Pro-Bold"}
              >
                Book Demo
              </Typography>
              <Typography
                sx={{ fontFamily: "Sofia-Pro-Regular" }}
                variant="subTitle1"
                color="#6c757d"
              >
                Stay one step ahead with real-time analytics. Gauge your
                performance across all of your social media profiles, as well as
                the performance of your assigned brand fans. CTA:
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default SocialMediaMarketing;
