import { Container } from "@mui/material";
import React from "react";
import bubbleImage from "../../assets/img/Bubble-Fans.png";
// import video from "../../assets/videos/video-1.mp4";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
}));
const BubbleStatic = () => {
  const classes = useStyles();
  return (
    <>
     <Container>
      <img src={bubbleImage} className={classes.image} alt="bubble" />
    </Container>
      {/* <video width="100%" id="vid" loop autoPlay style={{ marginTop: "30px" }}>
        <source src={video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <script>document.getElementById('vid').play();</script> */}
    </>
  );
};

export default BubbleStatic;
