import {
  Card,
  CardContent,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const styles = {
  cardCont: {
    backgroundImage: "linear-gradient(135deg,#4F76A6 25%,#11147b)",
    color: "white",
  },
};

const Business = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Typography
        sx={{
          fontFamily: "Sofia-Pro-Black",
          color: "#6c757d",
        }}
        variant="h4"
        fontSize="60px"
      >
        Small Businesses –<span style={{ color: "#4F76A6" }}>Big Goals</span>
      </Typography>
      <Typography
        sx={{ fontSize: 24, fontWeight: 400, color: "gray", pt: 2, pb: 5 }}
        // fontFamily="Sofia-Pro-Black"
        // variant="h5"
      >
        Our all-in-one, user-friendly platform gives you everything you need to
        be productive, interesting, and successful on social media, which as
        industry data proves, is a crucial element to the success of your
        business
      </Typography>

      <Grid
        container
        // border="1px solid gray"
      >
        <Grid
          item
          md={4}
          padding={5}
          // borderRight="1px solid gray"

          // data-aos="zoom-in"
          data-aos="flip-down"
          data-aos-duration="1000"
          // data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          <Card sx={{ maxWidth: 345 }} style={styles.cardCont}>
            <CardActionArea style={{ padding: "10px" }}>
              <CardContent>
                <Typography
                  // textAlign="start"
                  gutterBottom
                  variant="h3"
                  fontWeight="bold"
                >
                  41%
                </Typography>
                <Typography textAlign="start" variant="body1">
                  more money is spent in the long-term by customers who engage
                  with a business on social media.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          md={4}
          padding={5}
          // borderRight="1px solid gray"
          // data-aos="zoom-in"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          <Card
            sx={{ maxWidth: 345, backgroundColor: "#abb8c31a" }}
            style={styles.cardCont}
          >
            <CardActionArea style={{ padding: "10px" }}>
              <CardContent>
                <Typography
                  // textAlign="start"
                  gutterBottom
                  variant="h3"
                  fontWeight="bold"
                >
                  74%
                </Typography>
                <Typography textAlign="start" variant="body1">
                  more money is spent in the long-term by customers who engage
                  with a business on social media.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          md={4}
          padding={5}
          // borderRight="1px solid gray"
          // data-aos="zoom-in"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
        >
          <Card
            sx={{ maxWidth: 345, backgroundColor: "#abb8c31a" }}
            style={styles.cardCont}
          >
            <CardActionArea style={{ padding: "10px" }}>
              <CardContent>
                <Typography
                  // textAlign="start"
                  gutterBottom
                  variant="h3"
                  fontWeight="bold"
                >
                  40%
                </Typography>
                <Typography textAlign="start" variant="body1">
                  more money is spent in the long-term by customers who engage
                  with a business on social media.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Business;
