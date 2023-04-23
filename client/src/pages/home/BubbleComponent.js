import { Container } from "@mui/system";
import React, { useRef } from "react";
import logo from "../../assets/img/csLogo.png";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  company: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#28383F",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // zIndex: 100,
    transition: "transform 0.2s ease-out",
  },
}));
const BubbleComponent = () => {
  const classes = useStyles();
  const constraintsRef = useRef(null);
  return (
    <section
      style={{
        marginTop: 0,
        marginBottom: "8rem",
        height: "30rem",
      }}
      ref={constraintsRef}
    >
      <Container style={{ position: "relative" }}>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 80,
            left: 110,
            transform: "rotate(25deg)",
          }}
        ></div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          className={classes.company}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Your Company
        </motion.div>

        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#28383F",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 70,
            left: 160,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Your Company Media
        </motion.div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 180,
            left: 230,
            transform: "rotate(50deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 200,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 320,
            left: 260,
            transform: "rotate(-80deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 70,
            left: 880,
            transform: "rotate(-20deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 100,
            left: 880,
            transform: "rotate(20deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 120,
            left: 850,
            transform: "rotate(60deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 280,
            left: 320,
            transform: "rotate(-130deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 230,
            left: 340,
            transform: "rotate(-1deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 410,
            left: 980,
            transform: "rotate(-20deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 440,
            left: 980,
            transform: "rotate(10deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 415,
            left: 900,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 460,
            left: 960,
            transform: "rotate(50deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 230,
            left: 440,
            transform: "rotate(-1deg)",
            // transition: 'transform 0.2s ease-out',
            // ':hover': {
            //   transform: 'scale(1.1)',
            // },
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 180,
            left: 440,
            transform: "rotate(-60deg)",
            // transition: 'transform 0.2s ease-out',
            // ':hover': {
            //   transform: 'scale(1.1)',
            // },
          }}
        ></div>
        <div
          style={{
            width: 90,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 280,
            left: 440,
            transform: "rotate(-140deg)",
          }}
        ></div>
        <div
          style={{
            width: 90,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 380,
            left: 400,
            transform: "rotate(-130deg)",
          }}
        ></div>
        <div
          style={{
            width: 90,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 400,
            left: 280,
            transform: "rotate(-130deg)",
          }}
        ></div>
        <div
          style={{
            width: 120,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 390,
            left: 270,
            transform: "rotate(130deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 120,
            left: 800,
            transform: "rotate(-40deg)",
          }}
        ></div>
        <div
          style={{
            width: 120,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 100,
            transform: "rotate(130deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 120,
            transform: "rotate(25deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 420,
            left: 200,
            transform: "rotate(-50deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 170,
            transform: "rotate(100deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 490,
            left: 190,
            transform: "rotate(80deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 220,
            transform: "rotate(50deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 360,
            transform: "rotate(50deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 300,
            transform: "rotate(120deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 330,
            transform: "rotate(90deg)",
          }}
        ></div>
        <div
          style={{
            width: 120,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 400,
            left: 470,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 80,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 470,
            transform: "rotate(50deg)",
          }}
        ></div>
        <div
          style={{
            width: 80,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 600,
            transform: "rotate(50deg)",
          }}
        ></div>
        <div
          style={{
            width: 80,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 500,
            left: 660,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 80,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 430,
            left: 70,
            transform: "rotate(-70deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 120,
            left: 500,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 110,
            left: 485,
            transform: "rotate(-60deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 190,
            left: 720,
            transform: "rotate(-20deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 150,
            left: 770,
            transform: "rotate(-45deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 170,
            left: 780,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 190,
            left: 780,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 150,
            left: 500,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 470,
            left: 60,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 500,
            left: 60,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 500,
            left: 40,
            transform: "rotate(90deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 370,
            left: 650,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 400,
            left: 600,
            transform: "rotate(40deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 410,
            left: 580,
            transform: "rotate(100deg)",
          }}
        ></div>
        <div
          style={{
            width: 150,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 500,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 290,
            left: 600,
            transform: "rotate(-40deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 230,
            left: 650,
            transform: "rotate(-50deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 260,
            left: 680,
            transform: "rotate(10deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 290,
            left: 650,
            transform: "rotate(40deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 260,
            left: 750,
            transform: "rotate(-40deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 290,
            left: 740,
            transform: "rotate(70deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 280,
            left: 760,
            transform: "rotate(20deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 110,
            left: 650,
            transform: "rotate(10deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 80,
            left: 650,
            transform: "rotate(-80deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 310,
            left: 810,
            transform: "rotate(40deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 340,
            left: 880,
            transform: "rotate(20deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 340,
            left: 738,
            transform: "rotate(80deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 420,
            left: 770,
            transform: "rotate(40deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 420,
            left: 750,
            transform: "rotate(90deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 180,
            left: 950,
            transform: "rotate(-60deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 160,
            left: 1000,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 130,
            left: 1010,
            transform: "rotate(0deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 100,
            left: 1000,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 290,
            left: 950,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 260,
            left: 1020,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 290,
            left: 1030,
            transform: "rotate(0deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 320,
            left: 1020,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 420,
            left: 720,
            transform: "rotate(125deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 860,
            transform: "rotate(70deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 360,
            left: 830,
            transform: "rotate(120deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 270,
            left: 30,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 30,
            transform: "rotate(-40deg)",
          }}
        ></div>
        <div
          style={{
            width: 150,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 10,
            transform: "rotate(-60deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 90,
            left: 670,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 220,
            left: 840,
            transform: "rotate(10deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 220,
            left: 870,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 240,
            left: 900,
            transform: "rotate(5deg)",
          }}
        ></div>
        <div
          style={{
            width: 70,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 260,
            left: 890,
            transform: "rotate(50deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 250,
            left: 520,
            transform: "rotate(30deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 220,
            left: 520,
            transform: "rotate(-5deg)",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 130,
            left: 620,
            transform: "rotate(-70deg)",
          }}
        ></div>
        <div
          style={{
            width: 150,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 190,
            left: 520,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            width: 90,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 320,
            left: 530,
            transform: "rotate(-10deg)",
          }}
        ></div>
        <div
          style={{
            width: 90,
            height: 5,
            backgroundColor: "#28383F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 500,
            transform: "rotate(60deg)",
          }}
        ></div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          // whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            position: "absolute",
            top: 200,
            left: 250,
          }}
        >
          <motion.img
            // drag
            // onDrag={(e) => console.log(e)}
            // dragConstraints={constraintsRef}
            src={logo}
            style={{ width: "100px" }}
            alt=""
          />
        </motion.div>

        <motion.div
          style={{
            width: 80,
            height: 80,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#F76927",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 280,
            left: 160,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ADVOCATE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 80,
            height: 80,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#F76927",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 330,
            left: 250,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ADVOCATE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 80,
            height: 80,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#F76927",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 290,
            left: 350,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ADVOCATE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 80,
            height: 80,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#F76927",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 200,
            left: 400,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ADVOCATE
        </motion.div>

        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 100,
            left: 480,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            carousel: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 200,
            left: 500,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Like
        </motion.div>

        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 400,
            left: 450,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          share
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 500,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Like
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 100,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 250,
            left: 80,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Like
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 430,
            left: 200,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 430,
            left: 330,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 220,
            left: 780,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 270,
            left: 790,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 50,
            left: 720,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 750,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 430,
            left: 270,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 20,
            left: 670,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 430,
            left: 720,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 440,
            left: 765,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 420,
            left: 810,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 370,
            left: 830,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 370,
            left: 885,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 330,
            left: 920,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 490,
            left: 180,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 520,
            left: 210,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 490,
            left: 260,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 490,
            left: 300,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 500,
            left: 350,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 500,
            left: 410,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 100,
            left: 740,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 50,
            left: 800,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 140,
            left: 885,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 100,
            left: 930,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 40,
            left: 930,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 190,
            left: 700,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 700,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 470,
            left: 730,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 600,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 420,
            left: 670,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 110,
            left: 800,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 150,
            left: 820,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 190,
            left: 810,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 600,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 200,
            left: 600,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 250,
            left: 600,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 60,
            left: 1050,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 115,
            left: 1060,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 170,
            left: 1060,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 220,
            left: 1080,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 280,
            left: 1080,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 330,
            left: 1070,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 430,
            left: 1040,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 370,
            left: 1040,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 1010,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 150,
            left: 630,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 100,
            left: 580,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 60,
            left: 520,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 160,
            left: 560,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 180,
            left: 950,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 230,
            left: 950,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 280,
            left: 930,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 380,
            left: 560,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 450,
            left: 600,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 500,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 520,
            left: 70,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 430,
            left: 130,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 500,
            left: 130,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 350,
            left: 680,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 370,
            left: 30,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 450,
            left: 60,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 30,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 240,
            left: 10,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 250,
            left: 740,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 150,
            left: 750,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 10,
            left: 750,
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 80,
            left: 650,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 480,
            left: 650,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 230,
            left: 650,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 300,
            left: 850,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 370,
            left: 750,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 100,
            left: 980,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 400,
            left: 950,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 60,
            left: 850,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LIKE
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 200,
            left: 870,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          COMMENT
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.7, 1, 0.9, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            borderRadius: 50,
            backgroundColor: "#28383F",
            fontSize: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 260,
            left: 1000,
            transition: "transform 0.2s ease-out",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SHARE
        </motion.div>
      </Container>
    </section>
  );
};

export default BubbleComponent;
