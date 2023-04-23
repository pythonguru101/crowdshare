import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import mobileImage from "../../assets/img/pricing/BluePhoneScreen.svg";
// import header from "../../assets/img/pricing/ header.svg";
import overlay from "../../assets/img/pricing/white overlay.svg";
import basicIcon from "../../assets/img/pricing/CS - Pricing Icons-01.svg";
import advanceIcon from "../../assets/img/pricing/CS - Pricing Icons-02.svg";
import plusIcon from "../../assets/img/pricing/CS - Pricing Icons-03.svg";
import PremiumIcon from "../../assets/img/pricing/CS - Pricing Icons-04.svg";
import proIcon from "../../assets/img/pricing/CS - Pricing Icons-05.svg";
import social3 from "../../assets/img/pricing/3 Socials.svg";
import social4 from "../../assets/img/pricing/4 Socials.svg";
import social5 from "../../assets/img/pricing/5 Socials.svg";
import device1 from "../../assets/img/pricing/1 Devices.svg";
import deviceAll from "../../assets/img/pricing/all Devices.svg";
import { FaCheckCircle } from "react-icons/fa";
import { makeStyles } from "@mui/styles";

const plans1 = [
  {
    title: "Basic",
    price: "49",
    description: ["Up to 20 Fans", "2 Brand Managers", "X"],
    buttonText: "Choose Plan",
    // buttonVariant: "outlined",
    buttonVariant: "contained",
    headerImage: basicIcon,
    checkIcon: [FaCheckCircle, FaCheckCircle, FaCheckCircle],
    socialImage: social3,
    deviceImage: device1,
  },
  {
    title: "Advanced",
    price: "99",
    description: [
      "Up to 2 Brands",
      "Up to 50 Fans",
      "3 Brand Managers",
      "Analytics Dashboard",
      "Photo Editor",
      "Video Editor",
    ],
    buttonText: "Choose Plan",
    buttonVariant: "contained",
    active: "true",
    headerImage: advanceIcon,
    checkIcon: [
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
    ],
    socialImage: social4,
    deviceImage: device1,
  },
  {
    title: "Plus",
    price: "249",
    description: [
      "Up to 5 Brands",
      "Up to 1000 Fans",
      "10 Brand Managers",
      "Analytics Dashboard",
      "Photo Editor",
      "Video Editor",
      "CRM",
    ],
    buttonText: "Choose Plan",
    buttonVariant: "contained",
    headerImage: plusIcon,
    checkIcon: [
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
    ],
    socialImage: social5,
    deviceImage: deviceAll,
  },
];
const plans2 = [
  {
    title: "Premium",
    price: "179",
    description: [
      "Up to 3 Brands",
      "Up to 200 Fans",
      "5 Brand Managers",
      "Analytics Dashboard",
      "Photo Editor",
      "Video Editor",
    ],
    buttonText: "Choose Plan",
    buttonVariant: "contained",
    headerImage: PremiumIcon,
    checkIcon: [
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
    ],
    socialImage: social5,
    deviceImage: deviceAll,
  },
  {
    title: "Pro",
    price: "249",
    active: "true",
    description: [
      "Up to 5 Brands",
      "Up to 1000 Fans",
      "10 Brand Managers",
      "Analytics Dashboard",
      "Photo Editor",
      "Video Editor",
    ],
    buttonText: "Choose Plan",
    buttonVariant: "contained",
    headerImage: proIcon,
    checkIcon: [
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
    ],
    socialImage: social5,
    deviceImage: deviceAll,
  },
  {
    title: "Agency",
    price: "399",
    description: [
      "Up to 5 Agency",
      "Owned Brands",
      "30 Clients Accounts",
      "Up to 5 Managers",
      "Share with 100 Fans",
      "Analytics Dashboard",
      "Photo Editor",
      "Video Editor",
    ],
    buttonText: "Choose Plan",
    buttonVariant: "contained",
    headerImage: proIcon,
    checkIcon: [
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
      FaCheckCircle,
    ],
    socialImage: social5,
    deviceImage: deviceAll,
  },
];

// const containerStyles = {
//   display: "flex",
//   justifyContent: "center", // Horizontally center the button
//   alignItems: "center", // Vertically center the button
//   // height: "100vh",
// };
const useStyles = makeStyles((theme) => ({
  mainContainer:{
    backgroundColor:"#f4f7fb",
    paddingTop:40,
    paddingBottom:40,
  },
  overlay: {
    position: "absolute",
    top: "200px",
    left: "50%",
    transform: "translate(-48%)",
  },
  header: {
    position: "absolute",
    top: "180px",
    left: "50%",
    transform: "translate(-50.5%)",
    height: "50px",
    width: "246px",
    backgroundColor: "#00A6F3",
    borderRadius: "20px 20px 0px 0px",
  },
  headerImage: {
    position: "absolute",
    top: "0px",
    left: "50%",
    transform: "translate(-50%)",
  },
  title: {
    fontFamily: "Sofia-Pro-SemiBold",
    position: "absolute",
    top: "185px",
    left: "50%",
    transform: "translate(-50%)",
    width: "220px",
  },
  price: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    position: "absolute",
    top: "228px",
    left: "50%",
    transform: "translate(-50%)",
  },
  container: {
    position: "absolute",
    top: "280px",
    left: "50%",
    transform: "translate(-50%)",
    color: "black",
  },
  checkIcon: {
    position: "absolute",
    top: "282px",
    left: "50%",
    transform: "translate(-56%)",
    display: "flex",
    flexDirection: "column",
    width: "200px",
  },
  device: {
    position: "absolute",
    left: "50%",
    top: "500px",
    width: "80px",
    transform: "translate(-50%)",
  },
  social: {
    position: "absolute",
    left: "50%",
    bottom: "65px",
    transform: "translate(-52%)",
  },
}));
function PricingContent() {
  const [basic, setBasic] = useState(true);
  const classes = useStyles();
  return (
    <React.Fragment>
      <section className={classes.mainContainer} >
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none", top: -200 } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        // maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Button
          sx={{
            width: 150,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            color: "#ffff",
            fontFamily: "Sofia-Pro-Regular",
            // backgroundColor: "rgba(0, 122, 219, .7)",
            "&:focus": {
              backgroundColor: "#0073CE",
              border: 5,
              borderColor: "#93CFFF",
            },
          }}
          onClick={() => setBasic(true)}
          variant="contained"
        >
          Basic
        </Button>
        <Button
          sx={{
            width: 150,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            color: "#ffff",
            fontFamily: "Sofia-Pro-Regular",
            // backgroundColor: "rgba(0, 122, 219, .7)",
            "&:focus": {
              backgroundColor: "#0073CE",
              border: 5,
              borderColor: "#93CFFF",
            },
          }}
          onClick={() => setBasic(false)}
          variant="contained"
        >
          Premium
        </Button>
      </Container>
      {/* End hero unit */}
      {/* button 1 */}
      {basic && (
        <Container component="main" maxWidth="xl">
          <Grid container spacing={5} alignItems="flex-start">
            {plans1.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={12} md={6} lg={4}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img src={mobileImage} alt="img" />
                  <img className={classes.overlay} src={overlay} alt="img" />
                  <div className={classes.header}></div>
                  <img
                    className={classes.headerImage}
                    src={tier.headerImage}
                    alt="img"
                  />
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="white"
                  >
                    {tier.title}
                  </Typography>

                  <Box className={classes.price}>
                    <Typography
                      sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                      component="h2"
                      variant="h4"
                      color="#11147b"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                      variant="h6"
                      color="#11147b"
                    >
                      /mo/user
                    </Typography>
                  </Box>
                  <ul className={classes.container}>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="start"
                        key={line}
                        sx={{
                          fontFamily: "Sofia-Pro-Regular",
                          fontSize: 18,
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                  <div className={classes.checkIcon}>
                    {tier.checkIcon.map((Check) => (
                      <Check
                        color="#00A6F3"
                        style={{ marginBottom: "7px" }}
                        size={25}
                      />
                    ))}
                    {/* <FaCheckCircle color="#00A6F3" /> */}
                  </div>
                  <img
                    className={classes.device}
                    src={tier.deviceImage}
                    alt="img"
                  />
                  <img
                    className={classes.social}
                    src={tier.socialImage}
                    alt="img"
                  />
                </div>
                {/* <Card
                  maxWidth
                  sx={{ border: 1, borderColor: "rgba(128, 128, 128, .4)" }}
                >
                  <CardHeader
                    title={
                      <Typography
                        sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                        variant="h6"
                      >
                        {tier.title}
                      </Typography>
                    }
                    subheader={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                          component="h2"
                          variant="h3"
                          color="text.primary"
                        >
                          ${tier.price}
                        </Typography>
                        <Typography
                          sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                          variant="h6"
                          color="text.secondary"
                        >
                          /mo/user
                        </Typography>
                      </Box>
                    }
                    titleTypographyProps={{ align: "center" }}
                    //   action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    // disableTypography={true}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? tier.active
                            ? "#4F76A6"
                            : theme.palette.grey[200]
                          : theme.palette.grey[700],
                      fontFamily: "Sofia-Pro-Regular",
                    }}
                  />
                  <CardContent
                    sx={{
                      padding: 0,
                      "& > *:first-child": {
                        borderTop: "2px solid rgba(128, 128, 128, .4)",
                      },
                    }}
                  >
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                          sx={{
                            fontFamily: "Sofia-Pro-Regular",
                            py: 2,
                            borderBottom: 1,
                            borderColor: "rgba(128, 128, 128, .4)",
                            fontSize: 24,
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions style={containerStyles}>
                    <Button
                      sx={{ my: 2, fontFamily: "Sofia-Pro-Bold" }}
                      variant={tier.buttonVariant}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
      {/* End button 1 */}
      {/* button 2 */}
      {!basic && (
        <Container component="main" maxWidth="xl">
          <Grid container spacing={5} alignItems="flex-start">
            {plans2.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={12} md={6} lg={4}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img src={mobileImage} alt="img" />
                  <img className={classes.overlay} src={overlay} alt="img" />
                  <div className={classes.header}></div>
                  <img
                    className={classes.headerImage}
                    src={tier.headerImage}
                    alt="img"
                  />
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="white"
                  >
                    {tier.title}
                  </Typography>

                  <Box className={classes.price}>
                    <Typography
                      sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                      component="h2"
                      variant="h4"
                      color="#11147b"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "Sofia-Pro-SemiBold" }}
                      variant="h6"
                      color="#11147b"
                    >
                      /mo/user
                    </Typography>
                  </Box>
                  <ul className={classes.container}>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="start"
                        key={line}
                        sx={{
                          fontFamily: "Sofia-Pro-Regular",
                          fontSize: 15,
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                  <div className={classes.checkIcon}>
                    {tier.checkIcon.map((Check) => (
                      <Check
                        color="#00A6F3"
                        style={{ marginBottom: "7px" }}
                        size={20}
                      />
                    ))}
                    {/* <FaCheckCircle color="#00A6F3" /> */}
                  </div>
                  <img
                    className={classes.device}
                    src={tier.deviceImage}
                    alt="img"
                  />
                  <img
                    className={classes.social}
                    src={tier.socialImage}
                    alt="img"
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
      {/* End button 2 */}
      </section>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
