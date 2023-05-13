import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container, styled } from "@mui/system";
import React from "react";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import PublicIcon from "@mui/icons-material/Public";
// import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
// import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const styles = {
  cardStyle: {
    backgroundColor: "#ffffff",
    color: "black",
    padding: 20,
  },
};
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: `linear-gradient(-135deg,${theme.palette.primary.newBlue} 25%,${theme.palette.primary.deepBlue})`,
    margin: "10px 0",
    padding: "80px 0",
    color: "white",
  },
  card: {
    width: "100%",
    height: "100%",
    // backgroundColor: "gray",
    "&:hover": {
      boxShadow: "0px 6px 15px #ffffff80",
      border: "1px solid #dce0e3",
      cursor: "pointer",
    },
  },
  title: {},
}));
const StyledButton = styled(Button)(({ theme }) => ({
  height: "40px",
  backgroundImage: "linear-gradient(-135deg,#028fff 25%,#9f55ff)",
  border: "1px solid white",
  borderRadius: "50px",
  color: "white",
  fontSize: ".75rem",
  fontWeight: 700,
  textTransform: "none",
  marginTop: 20,
  marginBottom: 50,
  padding: "0 30px",
  "&:hover": {
    boxShadow: "0px 1px 8px white",
  },
}));
const WhyCrowdShare = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:400px)");
  return (
    <section className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "Sofia-Pro-Black",
            color: "#ffff",
            mb: "6px",
            fontSize: `${matches ? "40px" : "60px"}`,
          }}
          variant="h4"
          // fontSize="60px"
        >
          Why CrowdShare?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sofia-Pro-Regular",
            color: "#ffff",
          }}
          variant="subtitle1"
          // fontSize="60px"
        >
          Become part of our community
        </Typography>
        <StyledButton
          sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
          variant="contained"
        >
          GET FREE TRIAL
        </StyledButton>
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
                // textAlign="start"
                gutterBottom
                variant="h5"
                fontWeight="bold"
              >
                Graphic Design for Non-Designers
              </Typography>
              <Typography
                textAlign="start"
                variant="body1"
                //   color={"white"}
              >
                Become a master social media content creator with our convenient
                photo, video editing tools, and social media templates. Design
                and publish polished content without the learning curve.
              </Typography>
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
              <Typography
                // textAlign="start"
                gutterBottom
                variant="h5"
                fontWeight="bold"
              >
                Growth Without The Guesswork
              </Typography>
              <Typography textAlign="start" variant="body1">
                Centered on the two pillars of social media management: content
                and connection. We take the headache out of growing your social
                media accounts.
              </Typography>
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
              <Typography
                // textAlign="start"
                gutterBottom
                variant="h5"
                fontWeight="bold"
              >
                Get Your Time Back
              </Typography>
              <Typography textAlign="start" variant="body1">
                Our social media post scheduler lets you manage all of your
                accounts from one place. On average, CrowdShare cuts the time
                spent managing social media in half
              </Typography>
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
              <Typography
                // textAlign="start"
                gutterBottom
                variant="h5"
                fontWeight="bold"
              >
                Tap into the Power of Crowd
              </Typography>
              <Typography textAlign="start" variant="body1">
                We give your friends, family, employees and customers a quick
                and easy way to promote your business with the click of a
                button. Identify your fans’ interests, attitudes about important
                industry themes and their content sharing behaviors
              </Typography>
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
              <Typography
                // textAlign="start"
                gutterBottom
                variant="h5"
                fontWeight="bold"
              >
                Big Brand Exposure for Small Budgets
              </Typography>
              <Typography textAlign="start" variant="body1">
                Typical growth tools and influencer partnerships are expensive
                and often ineffective. CrowdShare is the inclusive solution for
                businesses who want to grow big without the big expense.
              </Typography>
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
              <Typography
                // textAlign="start"
                gutterBottom
                variant="h5"
                fontWeight="bold"
              >
                Measure What Matters
              </Typography>
              <Typography textAlign="start" variant="body1">
                Analyze your audience behavior and uncover the content they
                love, so you can better create an engaging social media strategy
                that drives sales
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default WhyCrowdShare;
