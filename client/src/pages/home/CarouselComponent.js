// import { Image } from "@mui/icons-material";
import {
  // Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Carousel from "react-material-ui-carousel";
import aiImage from "../../assets/img/aiImage.jpg";
import sleep from "../../assets/img/sleep.jpg";
import investment from "../../assets/img/investment.jpg";

const useStyles = makeStyles((theme) => ({
  imgCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "30rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "20%",
      marginRight: "20%",
    },
  },
  brandImg: {
    marginTop: "20px",
    width: "15rem",
  },
}));
const CarouselComponent = () => {
  const classes = useStyles();
  const items = [
    {
      id: 1,
      card1: {
        // img: "https://newchip.com/wp-content/uploads/2022/09/NEWCHIP-ACCELERATOR-2-1-768x379.png",
        img: investment,
        title: "Newchip Investments: October 2022",
        des: "It’s official! The Newchip Accelerator team and our fund at Journey Venture Partners chose 9 investments for our October 2022 Investment Batch. With hundreds of …",
      },
      card2: {
        // img: "https://newchip.com/wp-content/uploads/2022/02/kinga-cichewicz-5NzOfwXoH88-unsplash-768x512.jpg",
        img: sleep,
        title:
          "Colorado-Based Sleep-Tracker App Raises $460,000 to Help Their Users Get a Better Night’s Rest",
        des: "Dr. Kate Maloney began Sleep Easy with the ultimate goal of providing people an efficient and effective sleep-tracker—to ensure a good night’s sleep for all. …",
      },
      card3: {
        // img: "https://newchip.com/wp-content/uploads/2022/01/alexander-mils-lCPhGxs7pww-unsplash-768x512.jpg",
        img: aiImage,
        title:
          "AI-Powered E-Commerce Platform Raises $200,000 to Help Users Achieve Financial Freedom",
        des: "COO Connor Barner and CEO Nikita Danilov have generated over $2.7 million in sales from their E-Commerce businesses. However, this success came after some typical …",
      },
    },

    {
      id: 2,
      card2: {
        img: investment,
        title: "Newchip Investments: October 2022",
        des: "It’s official! The Newchip Accelerator team and our fund at Journey Venture Partners chose 9 investments for our October 2022 Investment Batch. With hundreds of …",
      },
      card1: {
        img: sleep,
        title:
          "Colorado-Based Sleep-Tracker App Raises $460,000 to Help Their Users Get a Better Night’s Rest",
        des: "Dr. Kate Maloney began Sleep Easy with the ultimate goal of providing people an efficient and effective sleep-tracker—to ensure a good night’s sleep for all. …",
      },
      card3: {
        img: aiImage,
        title:
          "AI-Powered E-Commerce Platform Raises $200,000 to Help Users Achieve Financial Freedom",
        des: "COO Connor Barner and CEO Nikita Danilov have generated over $2.7 million in sales from their E-Commerce businesses. However, this success came after some typical …",
      },
    },
    {
      id: 3,
      card1: {
        img: investment,
        title: "Newchip Investments: October 2022",
        des: "It’s official! The Newchip Accelerator team and our fund at Journey Venture Partners chose 9 investments for our October 2022 Investment Batch. With hundreds of …",
      },
      card3: {
        img: sleep,
        title:
          "Colorado-Based Sleep-Tracker App Raises $460,000 to Help Their Users Get a Better Night’s Rest",
        des: "Dr. Kate Maloney began Sleep Easy with the ultimate goal of providing people an efficient and effective sleep-tracker—to ensure a good night’s sleep for all. …",
      },
      card2: {
        img: aiImage,
        title:
          "AI-Powered E-Commerce Platform Raises $200,000 to Help Users Achieve Financial Freedom",
        des: "COO Connor Barner and CEO Nikita Danilov have generated over $2.7 million in sales from their E-Commerce businesses. However, this success came after some typical …",
      },
    },
  ];
  return (
    <Container
      sx={{
        marginTop: "80px",
        border: "1px solid rgba(0,0,0,.125)",
        marginBottom: "20px",
      }}
      maxWidth="xl"
    >
      <Typography
        variant="h3"
        margin="25px 0"
        fontWeight="bold"
        fontFamily={"Sofia-Pro-Bold"}
      >
        MEET OUR STARTUPS
      </Typography>
      <Carousel navButtonsAlwaysVisible={true}>
        {items.map((item) => (
          <Grid container spacing={2}>
            <Grid item md={4} lg={4} className={classes.imgCont}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.card1.img}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                    fontFamily={"Sofia-Pro-Bold"}
                    color="#4F76A6"
                  >
                    {item.card1.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily={"Sofia-Pro-Regular"}
                  >
                    {item.card1.des}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="warning"
                    fontFamily={"Sofia-Pro-Regular"}
                  >
                    Read More <ReadMoreIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} lg={4} className={classes.imgCont}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.card2.img}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                    color="#4F76A6"
                    fontFamily={"Sofia-Pro-Bold"}
                  >
                    {item.card2.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily={"Sofia-Pro-Regular"}
                  >
                    {item.card2.des}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="warning"
                    fontFamily={"Sofia-Pro-Regular"}
                  >
                    Read More <ReadMoreIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} lg={4} className={classes.imgCont}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.card3.img}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                    color="#4F76A6"
                    fontFamily={"Sofia-Pro-Bold"}
                  >
                    {item.card3.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily={"Sofia-Pro-Regular"}
                  >
                    {item.card3.des}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="warning"
                    fontFamily={"Sofia-Pro-Regular"}
                  >
                    Read More <ReadMoreIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
