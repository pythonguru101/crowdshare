import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// import img1 from "../../assets/images/img1.png";
// import img2 from "../../assets/images/img2.png";
// import img3 from "../../assets/images/img3.png";
// import img4 from "../../assets/images/img4.png";
// import img5 from "../../assets/images/img5.png";
// import img6 from "../../assets/images/img6.png";
// import img7 from "../../assets/images/img7.png";
// import img8 from "../../assets/images/img8.png";
// import img9 from "../../assets/images/img9.png";
// import img10 from "../../assets/images/img10.png";
// import img11 from "../../assets/images/img11.png";
// import img12 from "../../assets/images/img12.png";

const styles = {
  container: {
    // width: "80%",
    paddingTop: 75,
    paddingBottom: 175,
  },
  image: {
    // height: 220,
  },
};

const Trustedby = () => {
  return (
    <div>
      <Container style={styles.container} maxWidth="xl">
        <Typography
          sx={{
            fontFamily: "Sofia-Pro-Black",
            color: "#6c757d",
            mb: "55px",
          }}
          variant="h4"
          fontSize="60px"
        >
          Why CrowdShare?
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    textAlign="start"
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                  >
                    Graphic Design for Non-Designers
                  </Typography>
                  <Typography textAlign="start" variant="body1">
                    Become a master social media content creator with our
                    convenient photo, video editing tools, and social media
                    templates. Design and publish polished content without the
                    learning curve.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    textAlign="start"
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                  >
                    Growth Without The Guesswork
                  </Typography>
                  <Typography textAlign="start" variant="body1">
                    Centered on the two pillars of social media management:
                    content and connection. We take the headache out of growing
                    your social media accounts.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    textAlign="start"
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                  >
                    Get Your Time Back
                  </Typography>
                  <Typography textAlign="start" variant="body1">
                    Our social media post scheduler lets you manage all of your
                    accounts from one place. On average, CrowdShare cuts the
                    time spent managing social media in half
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    textAlign="start"
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                  >
                    Tap into the Power of Crowd
                  </Typography>
                  <Typography textAlign="start" variant="body1">
                    We give your friends, family, employees and customers a
                    quick and easy way to promote your business with the click
                    of a button. Identify your fans’ interests, attitudes about
                    important industry themes and their content sharing
                    behaviors
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    textAlign="start"
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                  >
                    Big Brand Exposure for Small Budgets
                  </Typography>
                  <Typography textAlign="start" variant="body1">
                    Typical growth tools and influencer partnerships are
                    expensive and often ineffective. CrowdShare is the inclusive
                    solution for businesses who want to grow big without the big
                    expense.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    textAlign="start"
                    gutterBottom
                    variant="h5"
                    fontWeight="bold"
                  >
                    Measure What Matters
                  </Typography>
                  <Typography textAlign="start" variant="body1">
                    Analyze your audience behavior and uncover the content they
                    love, so you can better create an engaging social media
                    strategy that drives sales
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Trustedby;
