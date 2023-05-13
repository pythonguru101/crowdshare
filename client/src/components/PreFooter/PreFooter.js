import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import logo from "../../assets/logo/cs-logo-color.svg";
import logo2 from "../../assets/logo/Asset1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Sofia-Pro-Regular",
    textAlign: "center",
    color: "#6c757d",
    fontSize: "3.0rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
    },
  },
  gridContainer: {
    paddingLeft: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
  },
}));

const styles = {
  container: {
    marginTop: 50,
    // paddingTop: 50,
    // width: "80%",
    overflow: "hidden",
  },
  tableTitle: {
    fontFamily: "Sofia-Pro-Regular",
    // color: "#6c757d",
    color: "#222222",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
  },
  tableItems: {
    color: "#4F76A6",
    fontWeight: "thin",
    fontFamily: "Sofia-Pro-Regular",
    fontSize: 16,
    marginTop: 15,
    textAlign: "left",
  },
};

const platform = [
  { name: "Facebook", link: "https://example.com" },
  { name: "Twitter", link: "https://example.com" },
  { name: "Instagram", link: "/blog" },
  { name: "LinkedIn", link: "https://example.com" },
  { name: "Tik Tok", link: "https://example.com" },
];

const plans = [
  { name: "Overview", link: "https://example.com" },
  { name: "Basic", link: "https://example.com" },
  { name: "Advanced", link: "/blog" },
  { name: "Plus", link: "https://example.com" },
  { name: "Pro", link: "https://example.com" },
  { name: "Agency", link: "https://example.com" },
];

const industry = [
  { name: "Real Estate", link: "https://example.com" },
  { name: "Travel", link: "https://example.com" },
  { name: "Sports & Recreation", link: "/blog" },
  { name: "Retail", link: "https://example.com" },
  { name: "Cosmetic Surgery", link: "https://example.com" },
  { name: "Personal Care", link: "https://example.com" },
  { name: "Education", link: "https://example.com" },
  { name: "Automotive", link: "https://example.com" },
  { name: "Nightlife", link: "https://example.com" },
  { name: "Tradesmen", link: "https://example.com" },
];

const company = [
  { name: "Who's In Your Crowd?", link: "https://example.com" },
  { name: "About CrowdShare", link: "https://example.com" },
  { name: "Mission Statement", link: "/blog" },
  { name: "CrowdShares Pledge", link: "https://example.com" },
  { name: "FAQ", link: "https://example.com" },
];

const PreFooter = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={styles.container} maxWidth="xl">
        <Box
          sx={{ display: "flex", justifyContent: "flex-start" }}
          //
          data-aos="fade-left"
          data-aos-duration="2000"
          // data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          <img src={logo2} alt="logo" style={{ height: 60 }} />
        </Box>
        <Grid className={classes.root} container direction={"row"}>
          <Grid
            // border={1}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            marginBottom={3}
          >
            <Box textAlign="left">
              <Typography
                sx={{ fontFamily: "Sofia-Pro-Regular", textAlign: "left" }}
                color="#6c757d"
                fontWeight="500"
                variant="subtitle1"
              >
                Crowdshare is a leading branding and marketing company that
                specializes in creating strong customer bases within
                communities. With years of experience in the industry,
                Crowdshare has established itself as a go-to company for
                businesses looking to promote their brand and expand their
                reach. Their team of experts uses a data-driven approach to
                create customized branding and marketing strategies that
                resonate with customers and drive sales. Whether it's through
                social media, content marketing, or community outreach,
                Crowdshare is committed to helping businesses succeed in today's
                competitive marketplace.
              </Typography>
            </Box>
          </Grid>
          <Grid
            // border={1}
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            container
            direction={"row"}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} marginBottom={3}>
              <Typography style={styles.tableTitle}>PLATFORM</Typography>
              {platform.map((item, index) => (
                <a href={item.link} style={{ textDecoration: "none" }}>
                  <Typography style={styles.tableItems}>{item.name}</Typography>
                </a>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} marginBottom={3}>
              <Typography style={styles.tableTitle}>PLANS</Typography>
              {plans.map((item, index) => (
                <a href={item.link} style={{ textDecoration: "none" }}>
                  <Typography style={styles.tableItems}>{item.name}</Typography>
                </a>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} marginBottom={3}>
              <Typography style={styles.tableTitle}>INDUSTRIES</Typography>
              {industry.map((item, index) => (
                <a href={item.link} style={{ textDecoration: "none" }}>
                  <Typography style={styles.tableItems}>{item.name}</Typography>
                </a>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
              <Typography style={styles.tableTitle}>COMPANY</Typography>
              {company.map((item, index) => (
                <a href={item.link} style={{ textDecoration: "none" }}>
                  <Typography style={styles.tableItems}>{item.name}</Typography>
                </a>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PreFooter;
