import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container, Grid } from "@mui/material";
// import item1 from "../../assets/images/item1.png";
// import item2 from "../../assets/images/item2.png";
// import item3 from "../../assets/images/item3.png";
// import item4 from "../../assets/images/item4.png";
// import item5 from "../../assets/images/item5.png";
import styled from "@emotion/styled";
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FEBF12",
  height: "50px",
  borderRadius: "5px",
  color: "#222222",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "none",
  marginTop: 30,
  "&:hover": {
    borderColor: "#fffff4",
    backgroundColor: "#e0a500",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
}));
const styles = {
  subtitle: {
    fontFamily: "Sofia-Pro-Regular",
    fontSize: 44,
    fontWeight: 700,
    // color: "#41494F",
    color: "#6c757d",
  },
  text: {
    fontFamily: "Sofia-Pro-Regular",
    fontSize: "22px",
    color: "gray",
    width: "65%",
  },
  itemtext: {
    fontFamily: "Sofia-Pro-Regular",
    fontSize: 22,
    color: "gray",
  },
  image: {
    width: "20rem",
  },
  tab: {
    fontFamily: "Sofia-Pro-Regular",
    color: "#007bff",
    fontWeight: 700,
    fontFamily: "Sofia-Pro-Bold",
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function BringSales() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="xl" marginTop={5}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: "60px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sofia-Pro-Black",
            color: "#6c757d",
          }}
          variant="h4"
          fontSize="60px"
        >
          Bringing the personal back to sales
        </Typography>
        <Typography style={styles.text}>
          Crowdshare let's you add scalable personal touch back to your entire
          sales process for more connections, conversations, and conversions.
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          padding: 10,
          marginBottom: -1,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        }}
      >
        <Box>
          <AppBar
            color="transparent"
            elevation={0}
            position="static"
            sx={{ borderBottom: "1px solid #dee2e6" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="#9f55ff"
              textColor="inherit"
              variant="standard"
              // aria-label="full width tabs example"
              TabIndicatorProps={{
                style: {
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid #007bff",
                },
              }}
            >
              <Tab style={styles.tab} label="STEP 1" {...a11yProps(0)} />
              <Tab style={styles.tab} label="STEP 2" {...a11yProps(1)} />
              <Tab style={styles.tab} label="STEP 3" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </Box>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <Box>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.subtitle}
                    >
                      APPLICATION & INTERVIEW
                    </Typography>
                    <Typography
                      margin="20px 0"
                      variant="subtitle1"
                      fontWeight="bold"
                      fontFamily={"Sofia-Pro-Bold"}
                    >
                      Application Review:
                    </Typography>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.itemtext}
                      fontFamily={"Sofia-Pro-Regular"}
                    >
                      Once you submit your application, our team will email you
                      within 3-5 business days on whether you’ve been selected
                      for interview.
                    </Typography>
                    <Typography
                      margin="20px 0"
                      variant="subtitle1"
                      fontWeight="bold"
                      fontFamily={"Sofia-Pro-Bold"}
                    >
                      Founder Interview:
                    </Typography>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.itemtext}
                      fontFamily={"Sofia-Pro-Regular"}
                    >
                      Once approved, we’ll email you a link to schedule an
                      interview. Please note that interview space is limited for
                      each cohort so we recommend booking as soon as possible.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box>
                    <img
                      src="https://newchip.com/wp-content/uploads/2020/08/applications-icon-v-1.png"
                      alt="chrome"
                      style={styles.image}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <Box>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.subtitle}
                      fontFamily={"Sofia-Pro-Bold"}
                    >
                      EVALUATION & SELECTION
                    </Typography>
                    <Typography
                      margin="20px 0"
                      variant="subtitle1"
                      fontWeight="bold"
                      fontFamily={"Sofia-Pro-Bold"}
                    >
                      Admissions Review:
                    </Typography>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.itemtext}
                      fontFamily={"Sofia-Pro-Regular"}
                    >
                      Our team will complete an initial due diligence evaluation
                      to determine your suitability for our program and present
                      to our selection committee.
                    </Typography>
                    <Typography
                      margin="20px 0"
                      variant="subtitle1"
                      fontWeight="bold"
                      fontFamily={"Sofia-Pro-Bold"}
                    >
                      Acceptance/Denial Notification:
                    </Typography>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.itemtext}
                      fontFamily={"Sofia-Pro-Regular"}
                    >
                      You will be notified of our decision to accept or deny
                      your application within 24 hours of our committee vote. If
                      accepted, your seat will remain open until the cohort
                      fills up.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box>
                    <img
                      src="https://newchip.com/wp-content/uploads/2020/08/applications-icon-v-2.png"
                      alt="chrome"
                      style={styles.image}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <Box>
                    <Typography
                      sx={{ textAlign: "left" }}
                      fontFamily={"Sofia-Pro-Bold"}
                      style={styles.subtitle}
                    >
                      PROCESS & TIMELINE
                    </Typography>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.itemtext}
                    >
                      Applications are due no later than the deadline for that
                      cohort. We recommend applying at least 30 days prior to
                      each cohort launch.
                    </Typography>
                    <Typography
                      margin="20px 0"
                      variant="subtitle1"
                      fontWeight="bold"
                      fontFamily={"Sofia-Pro-Bold"}
                    >
                      Investments Timeline:
                    </Typography>
                    <Typography
                      sx={{ textAlign: "left" }}
                      style={styles.itemtext}
                      fontFamily={"Sofia-Pro-Regular"}
                    >
                      When we commit to a round, we expect to complete our due
                      diligence and complete our investment process within 90
                      days of term sheet issuance.
                    </Typography>
                    <StyledButton
                      variant="container"
                      fontFamily={"Sofia-Pro-Regular"}
                    >
                      APPLY NOW
                    </StyledButton>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box>
                    <img
                      src="https://newchip.com/wp-content/uploads/2020/08/applications-icon-v-3.png"
                      alt="chrome"
                      style={styles.image}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  );
}

// BringSales;
