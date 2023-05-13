import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const styles = {
  imgGridCont: {
    display: "flex",
    // justifyContent: "center",
    // alineItems: "center",
  },
  imgCont: {
    overflow: "hidden",
  },
};
const useStyle = makeStyles((theme) => ({
  image: {
    width: "500px",
    // height: "1000px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}));
const ImageFirstItem = ({ image, headerHighlight, headerend, text }) => {
  const classes = useStyle();
  return (
    <Container
      sx={{
        mt: 0,
        // backgroundColor: "gray",
      }}
    >
      <Grid
        container
        spacing={0}
        // border="1px solid blue"
        //
      >
        <Grid
          sx={{ display: "flex" }}
          alignItems="center"
          order={2}
          item
          xs={12}
          lg={6}
          // border="1px solid red"
          //

          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <Box sx={{ pl: 0 }}>
            <Typography
              sx={{
                fontFamily: "Sofia-Pro-Black",
                color: "#6c757d",
                textAlign: "left",
              }}
              variant="h4"
              fontSize="60px"
            >
              <span style={{ color: "#4F76A6" }}>{headerHighlight} </span>
              <br /> {headerend}
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                // paddingTop: 5,
                paddingBottom: 5,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "90%",
                  xl: "85%",
                },
              }}
            >
              {text}
            </Typography>
          </Box>
        </Grid>
        <Grid
          style={styles.imgGridCont}
          order={1}
          item
          xs={12}
          lg={6}
          alignItems="center"
          // border="1px solid red"

          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <Box style={styles.imgCont}>
            <img src={image} alt="chart" className={classes.image} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageFirstItem;
