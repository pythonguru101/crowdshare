import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import ApexChart from "../../components/RadialBarChart/RadialBarChart";

const GrowBusiness = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  console.log(isVisible);
  return (
    <Container sx={{ paddingTop: 5, paddingBottom: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={5}>
          <Box style={{ position: "relative" }}>
            {isVisible && <ApexChart />}
            <div
              ref={componentRef}
              style={{
                height: "50%",
                position: "absolute",
                top: 0,
              }}
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
          }}
          item
          xs={12}
          md={7}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Sofia-Pro-Black",
                color: "#6c757d",
                textAlign: "left",
              }}
              variant="h4"
              fontSize="60px"
            >
              Let Your <span style={{ color: "#4F76A6" }}>Crowd</span>
              <br /> Grow Your{" "}
              <span style={{ color: "#4F76A6" }}>Business</span>
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                paddingTop: 5,
                paddingBottom: 5,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "90%",
                  xl: "85%",
                },
              }}
            >
              CrowdShare makes it easy to get your message to the masses. Our
              powerful suite of intelligent tools gives you everything you need
              to create content and manage all of your social media accounts
              from one central hub. Crowdsource your social posts and expand
              your social media presence exponentially in a matter of weeks -
              not months or years.
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Button variant="contained">Book Demo</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GrowBusiness;
