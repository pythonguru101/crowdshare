import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import wave from "../../assets/images/wave.png";

import newBanner from "../../assets/img/newBannerImage.png";
import AnimationChain from "../TopText/TopText";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.newBlue} , ${theme.palette.secondary.white}  80%)  `,
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `linear-gradient(150deg, ${theme.palette.primary.newBlue} , ${theme.palette.secondary.white}  90%)  `,
    },
    backgroundPosition: "top right",
    backgroundSize: "cover",
    backgroundColor: theme.palette.secondary.blue,
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  containermain: {
    backgroundImage: `url(${wave})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "100%",
    "&:before": {
      content: '""',
      display: "block",
      left: 0,
      top: 0,
      width: "100%",
      opacity: 0.1,
      backgroundImage:
        "url(https://themewagon.github.io/wooLanding/v1.0.0/assets/img/illustrations/hero-bg.png)",
      backgroundPosition: "top right",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
    },
  },
  textCont: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(20), // 12
    paddingRight: theme.spacing(12),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("xl")]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      paddingLeft: theme.spacing(5), // none
      paddingRight: theme.spacing(5),
      display: "flex",
      justifyContent: "center",
      // color:"red"
    },
    [theme.breakpoints.only("xs")]: {
      paddingTop: theme.spacing(10),
      // color:"red"
    },
    [theme.breakpoints.only("sm")]: {
      paddingTop: theme.spacing(10),
      // color:"red"
    },
  },
  changingtitle: {
    color: "#FEBF12",
  },
  imageCont: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    // paddingLeft: theme.spacing(30), // none
    paddingRight: theme.spacing(20), // none
    // backgroundColor: "red",
    [theme.breakpoints.down("xl")]: {
      // order: 2,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(0),
      paddingRight: theme.spacing(0), // none
    },
  },
  bannerImgLg: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FEBF12",
  paddingRight: "30px",
  paddingLeft: "30px",
  paddingTop: "10px",
  paddingBottom: "10px",
  borderRadius: "10px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "none",
  marginTop: 30,
  fontFamily: "Sofia-Pro-Bold",
  "&:hover": {
    borderColor: "#fffff4",
    backgroundColor: "yellow",
    color: "#222222",
  },
  [theme.breakpoints.down("md")]: {
    // width: "50%",
  },
}));

export default function HeroSection() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container
        sx={{ paddingBottom: 15 }}
        disableGutters
        maxWidth={false}
        className={classes.containermain}
      >
        <Grid
          disableGutters
          container
          // alignItems="center"
          sx={{
            paddingTop: "5rem",
            paddingBottom: "3rem",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className={classes.textCont}
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <Box>
              <Typography
                sx={{ textAlign: "left", fontFamily: "Sofia-Pro-SemiBold" }}
                variant="h2"
                // className={classes.title}
                fontSize="33px"
              >
                We believe in entrepreneurs.
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontFamily: "Sofia-Pro-Black",
                  color: "#ffff",
                  textAlign: "left",
                }}
                variant="h4"
                fontSize="50px"
                textTransform="uppercase"
              >
                Grow Your Business With 3500% <AnimationChain />
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: 18,
                  textAlign: "left",
                  fontFamily: "Sofia-Pro-Regular",
                  fontWeight: 600,
                  "@media (max-width:1150px)": {
                    marginTop: "80px",
                  },
                }}
                variant="h6"
                // className={classes.title}
                fontSize="16px"
              >
                Providing you with all of the tools and skills necessary to
                fund, build, and scale.
              </Typography>
              <Box
                sx={{
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                    xl: "flex-start",
                  },
                }}
              >
                <StyledButton variant="outlined">
                  Try it for free for 14 days!
                </StyledButton>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className={classes.imageCont}
          >
            <Box>
              <img
                className={classes.bannerImgLg}
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                src={newBanner}
                alt="banner"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
