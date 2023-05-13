import { Grid, Typography } from "@mui/material";
import { Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Google from "@mui/icons-material/Google";
import img from "../../assets/img/corner.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
    // height: "418px",
    backgroundColor: "#B3E5DD",
    padding: "20px",
  },
  title: {
    padding: "48px",
    color: "#ffff",
    fontFamily: "Sofia-Pro-Regular",
  },
  tril: {
    color: "black",
  },
  button: {
    color: "#ffff",
    width: "200px",
    backgroundColor: "#8460FF",
  },
  text: {
    color: "#ffff",
    padding: 20,
  },
}));
const BannerBottom = () => {
  const classes = useStyles();
  const StyledButton = styled(Button)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.blue,

    height: "5rem",
    width: "25rem",
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "Uppercase",
    backgroundColor: "#093A63",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  // const SocialButton = styled(Button)(({ theme }) => ({
  //   borderColor: "#fff",
  //   height: "40px",
  //   width: "150px",
  //   borderRadius: "50px",
  //   color: "#fff",
  //   fontSize: "0.7rem",
  //   fontWeight: "bold",
  //   textTransform: "Uppercase",
  //   // backgroundImage: `linear-gradient(145deg, ${theme.palette.primary.purple} ,  ${theme.palette.primary.newBlue})  `,
  //   marginTop: 30,
  //   "&:hover": {
  //     borderColor: "#fffff4",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //   },
  // }));
  return (
    <>
      <Container
        className={classes.root}
        maxWidth="xl"
        sx={{ paddingBottom: 5 }}
      >
        <Grid container>
          <Grid item md={5}>
            <Grid container>
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="center"
                backgroundColor="#076963"
                width="15rem"
                borderRadius="50px"
                color="white"
                padding="10px 0"
                marginTop="20px"
              >
                $249 per month
              </Typography>
              <Typography
                variant="subtitle1"
                whiteSpace="nowrap"
                marginTop="30px"
                marginLeft="10px"
              >
                Each additional user +$199/mo
              </Typography>
            </Grid>
            <Typography
              sx={{
                fontFamily: "Sofia-Pro-Black",
                color: "black",
                textAlign: "start",
              }}
              variant="h4"
              fontSize="60px"
            >
              Achieve your goals with the Sprout Standard plan
            </Typography>
            <StyledButton
              sx={{ fontFamily: "Sofia-Pro-Bold" }}
              variant="contained"
            >
              Get Free Trial
            </StyledButton>
            <br />
            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              textAlign="start"
              variant="subTitle1"
            >
              or sign up with social
            </Typography>

            <Grid
              container
              spacing={2}
              style={{ marginTop: 20 }}
              direction="row"
              alignItems="center"
              justifyContent="center"
              alignContent="center"
            >
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <Google />
            </Grid>

            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              variant="subtitle1"
            >
              No credit card required
            </Typography>
          </Grid>
          <Grid
            item
            md={7}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={img} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BannerBottom;
