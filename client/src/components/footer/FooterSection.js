import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    paddingRight: "10%",
    paddingLeft: "10%",
  },
}));

function FooterSection() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth>
        <Grid container spacing={1}>
          <Grid item sx={{ mt: 5 }} xs={12} lg={5}>
            <Typography
              sx={{
                fontSize: 48,
                fontWeight: 700,
                textAlign: "left",
              }}
              variant="h6"
              gutterBottom
            >
              CrowdShare
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                textAlign: "left",
                width: { sm: "100%", md: "90%", lg: "80%" },
              }}
              variant="body2"
              color="textSecondary"
            >
              CrowdShare is the sales operating system that gets you more
              connections, conversations, and conversions. The platform includes
              everything you need to make an impact in your sales including
              video messaging, email/SMS campaigns, workflows, and a CRM
              replacement or add-on. Get the Crowdshare mobile app, desktop app,
              Chrome Extension, and website dashboard to increase your sales
              today.
            </Typography>
          </Grid>
          <Grid item container sx={{ mt: 5 }} xs={12} lg={7}>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: 700 }} variant="h6" gutterBottom>
                Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <List>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Case Studies
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Testimonials
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Features
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Pricing
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Contact
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Privacy
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Terms
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Security
                    </Link>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: 700 }} variant="h6" gutterBottom>
                Product
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <List>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Chrome
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      iPhone
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Android
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Desktop App
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Outlook
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Slack
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      HubSpot
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Salesforce
                    </Link>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: 700 }} variant="h6" gutterBottom>
                Resources
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <List>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Webinars
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Academy
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Blog
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Podcasts
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Support
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Facebook Group
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                      Partner Program
                    </Link>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default FooterSection;
