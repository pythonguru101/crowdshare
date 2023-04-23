import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container, styled } from "@mui/system";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PublicIcon from "@mui/icons-material/Public";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: `linear-gradient(-135deg,${theme.palette.primary.newBlue} 25%,${theme.palette.primary.deepBlue})`,
    margin: "10px 0",
    padding: "80px 0",
    color: "white",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  height: "40px",
  backgroundImage: "linear-gradient(-135deg,#028fff 25%,#9f55ff)",
  border: "1px solid white",
  borderRadius: "50px",
  color: "white",
  fontSize: ".75rem",
  fontWeight: 700,
  textTransform: "none",
  marginTop: 20,
  marginBottom: 50,
  padding: "0 30px",
  "&:hover": {
    boxShadow: "0px 1px 8px white",
  },
}));
const KeyInfoSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.mainContainer}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            fontFamily: "Sofia-Pro-Black",
            color: "#ffff",
            mb: "6px",
          }}
          variant="h4"
          fontSize="60px"
        >
          PORTFOLIO OVERVIEW
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sofia-Pro-Regular",
            color: "#ffff",
          }}
          variant="subtitle1"
          // fontSize="60px"
        >
          Become part of our community
        </Typography>
        <StyledButton
          sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
          variant="contained"
        >
          GET FREE TRIAL
        </StyledButton>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sm={6} lg={4} marginBottom={5}>
            <AddBusinessIcon style={{ fontSize: "50px" }} />
            <Typography
              color="#FEBF12"
              variant="h4"
              style={{ fontWeight: 700 }}
            >
              2,500+
            </Typography>
            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              variant="subtitle1"
            >
              Companies
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4} marginBottom={5}>
            <ApartmentIcon style={{ fontSize: "50px" }} />
            <Typography
              color="#FEBF12"
              variant="h4"
              style={{ fontWeight: 700 }}
            >
              250+
            </Typography>
            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              variant="subtitle1"
            >
              Cities
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} marginBottom={5}>
            <PublicIcon style={{ fontSize: "50px" }} />
            <Typography
              color="#FEBF12"
              variant="h4"
              style={{ fontWeight: 700 }}
            >
              100+
            </Typography>
            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              variant="subtitle1"
            >
              Countries
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <AccountBalanceIcon style={{ fontSize: "50px" }} />
            <Typography
              color="#FEBF12"
              variant="h4"
              style={{ fontWeight: 700 }}
            >
              $2.25B+
            </Typography>
            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              variant="subtitle1"
            >
              Funding for Alumni
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <MilitaryTechIcon style={{ fontSize: "50px" }} />
            <Typography
              color="#FEBF12"
              variant="h4"
              style={{ fontWeight: 700 }}
            >
              $100M+
            </Typography>
            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              variant="subtitle1"
            >
              Portfolio Acquisitions
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <AnalyticsIcon style={{ fontSize: "50px" }} />
            <Typography
              color="#FEBF12"
              variant="h4"
              style={{ fontWeight: 700 }}
            >
              $15BN+
            </Typography>
            <Typography
              sx={{ fontFamily: "Sofia-Pro-Regular" }}
              variant="subtitle1"
            >
              Estimated Portfolio Value
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default KeyInfoSection;
