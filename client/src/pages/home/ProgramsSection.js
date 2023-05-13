import {
  Button,
  Card,
  CardActions,
  CardContent,
  // CardHeader,
  // CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
// import SourceIcon from "@mui/icons-material/Source";
// import Diversity3Icon from "@mui/icons-material/Diversity3";
// import InsightsIcon from "@mui/icons-material/Insights";
// import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
// import HubIcon from "@mui/icons-material/Hub";
// import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import React from "react";
import styled from "@emotion/styled";
const useStyles = makeStyles((theme) => ({
  title: {
    color: "#6c757d",
    fontSize: "3.0rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
    },
  },
  cardMain: {
    paddingBottom: "10px",
    maxWidth: 345,
    height: "100%",
    "&:hover": {
      boxShadow: "0px 5px 20px lightGray",
    },
  },
  buttonStyle: {
    backgroundColor: "#FEBF12",
  },
}));
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
const ProgramsSection = () => {
  const classes = useStyles();
  const cardInfo = [
    {
      id: 1,
      img: "https://newchip.com/wp-content/uploads/2020/08/accelerator-img-1.png",
      title: "The Ignite Incubator Program™",
      body: "Prototype, MVP, & Market Fit",
      prizeDes: "UP TO $250K",
    },
    {
      id: 2,
      img: "https://newchip.com/wp-content/uploads/2020/08/accelerator-img-2.png",
      title: "The Series Seed Accelerator Program™​",
      body: "Generate Traction & Revenue",
      prizeDes: "UP TO $5M",
    },
    {
      id: 3,
      img: "https://newchip.com/wp-content/uploads/2020/08/accelerator-img-3.png",
      title: "The Series AGrowth to ExitProgram™",
      body: "Scale Traction & Revenue",
      prizeDes: "UP TO $20M+",
    },
  ];
  return (
    <Container style={{ marginBottom: 30, paddingBottom: 30 }} maxWidth="xl">
      <Typography
        variant="h3"
        className={classes.title}
        fontWeight="bold"
        marginBottom={10}
      >
        OUR PROGRAMS
      </Typography>
      <Grid container spacing={2}>
        {cardInfo.map((card) => (
          <Grid id={card.id} item xs={6} md={4}>
            <Card className={classes.cardMain}>
              <img src={card.img} alt="" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {card.body}
                </Typography>
                <Typography variant="h5" color="#4F76A6" fontWeight="bold">
                  {card.prizeDes}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <StyledButton variant="contained">Learn More</StyledButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProgramsSection;
