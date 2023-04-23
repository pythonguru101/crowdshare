import React from "react";
import { Typography,Container,Grid,Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Google from "@mui/icons-material/Google";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    textAlign: "center",
    bottom: 0,
    width: "100%",
    backgroundColor: `${theme.palette.primary.newBlue}`,
    // height:50,
    padding:10
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    marginLeft: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root} >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography
                sx={{
                  textAlign: "left",
                  paddingBottom: 3,
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  },
                  color: "white",
                  fontFamily: "Sofia-Pro-Regular",
                }}
                variant="body2"
                fontSize="16px"
              >
                &copy; 2023 Crowdshare. All Rights Reserved. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{flexDirection:"row"}}>
            <Box>
              <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          alignContent="flex-end"
        >
          <FacebookIcon
            sx={{ color: "white", backgroundColor: "transparent" }}
          />
          <TwitterIcon
            sx={{ color: "white", backgroundColor: "transparent" }}
          />
          <InstagramIcon
            sx={{ color: "white", backgroundColor: "transparent" }}
          />
          <LinkedInIcon
            sx={{ color: "white", backgroundColor: "transparent" }}
          />
          <Google sx={{ color: "white", backgroundColor: "transparent" }} />
        </Grid>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default Footer;
