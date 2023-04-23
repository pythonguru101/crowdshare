import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import plan from "../../assets/img/CrowdShare.png";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";

const styles = {
  imgGridCont: {
    display: "flex",
    // justifyContent: "center",
    // alineItems: "center",
  },
  imgCont: {
    // overflow: "hidden",
  },

  buttonBottom: {
    display: "flex",
    justifyContent: "center",
    // alineItems: "center",
  },
};
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // backgroundColor: "#f1f1f1",
    // padding: "100px 0px",
    marginTop: 80,
    backgroundImage: `linear-gradient(-135deg,${theme.palette.primary.newBlue} 25%,${theme.palette.primary.deepBlue})`,
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
    // justifyContent: "center",
    alignItems: "center",
  },
  alineGrid: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "750px",
    objectFit: "cover",
    height: "500px",
    objectPosition: "top",
    padding: "10px",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      height: "200px",
    },
    [theme.breakpoints.only("md")]: {
      width: "600px",
      height: "450px",
    },
  },
  imgCont: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
}));

const StyledButton1 = styled(Button)(({ theme }) => ({
  // height: "40px",
  // width: "20rem",
  // background: "#FEBF12",
  background: "#036661",
  borderRadius: "50px",
  color: "white",
  textTransform: "uppercase",
  fontSize: ".75rem",
  fontWeight: "bold",
  // marginTop: 20,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const StyledButton2 = styled(Button)(({ theme }) => ({
  // height: "40px",
  // width: "20rem",

  background: "#00A6F3",
  // borderRadius: "50px",
  color: "white",
  textTransform: "uppercase",
  fontSize: ".75rem",
  fontWeight: "bold",
  // marginTop: 20,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StandarsPlan = () => {
  const classes = useStyles();
  return (
    <section
      style={{
        backgroundColor: "#added7",
        backgroundImage: `linear-gradient(-135deg,#4F76A6 25%,#11147b)`,
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Container
        sx={
          {
            // mt: 10,
            // backgroundColor: "gray",
          }
        }
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
          <Grid item xs={12} lg={5} md={5} className={classes.alineCont}>
            <Box>
              <Box sx={{ py: 3 }} className={classes.alineCont}>
                <Box>
                  <StyledButton1
                    sx={{
                      fontFamily: "Sofia-Pro-Bold",
                      px: 3,
                      py: 1,
                      color: "#fff",
                      whiteSpace: "nowrap",
                    }}
                    variant="contained"
                  >
                    {" "}
                    $249 per month for professional plan
                  </StyledButton1>
                </Box>
                {/* <Typography
                  sx={{
                    pl: 2,
                    color:'#fff'
                    // textAlign: "left",
                    //   paddingTop: 5,
                    //   paddingBottom: 5,
                  }}
                >
                  Each additional user +
                  <span style={{ fontWeight: "bold" }}>$</span>199/mo
                </Typography> */}
              </Box>
              <Typography
                sx={{
                  fontFamily: "Sofia-Pro-Black",
                  //   color: "#6c757d",
                  color: "#fff",
                  textAlign: "left",
                }}
                variant="h4"
                fontSize="50px"
              >
                Exceed
                <span
                  style={
                    {
                      // color: "#4F76A6"
                    }
                  }
                >
                  {" "}
                  Your Social Goals
                </span>
                <br /> With the CrowdShare
                <br /> Standard Plan
              </Typography>
              <Box
                className={classes.alineCont}
                //
                //   data-aos="fade-up"
                //   data-aos-duration="2000"
                //   data-aos-easing="ease-in-out"
              >
                <Box>
                  <StyledButton2
                    sx={{
                      fontFamily: "Sofia-Pro-Bold",
                      mt: 2,
                      px: 5,
                      py: 2,
                    }}
                    variant="contained"
                  >
                    {" "}
                    Start Your Free Trail
                  </StyledButton2>
                </Box>
              </Box>
              {/* <Typography
                sx={{
                  textAlign: "left",
                  paddingTop: 1,
                  fontWeight: "bold",
                  fontSize: 17,
                  color:'#fff'
                  //   paddingBottom: 5,
                }}
              >
                No credit card required
              </Typography> */}
            </Box>
          </Grid>
          <Grid
            style={styles.imgGridCont}
            item
            xs={12}
            md={7}
            lg={7}
            alignItems="center"
            // border="1px solid red"
          >
            <Box className={classes.imgCont}>
              <img src={plan} alt="chart" className={classes.image} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StandarsPlan;
