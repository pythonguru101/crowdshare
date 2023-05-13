import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ImageFirstItem from "../../components/CommunityItems/ImageFirstItem";
import TextFirstItem from "../../components/CommunityItems/TextFirstItem";
import cpic1 from "../../assets/content_images/createContent1.jpg";
import cpic2 from "../../assets/content_images/connections2.jpg";
import cpic3 from "../../assets/content_images/Profitable3.jpg";
import cpic4 from "../../assets/content_images/Track4.jpg";

const data = {
  first: {
    image: cpic1,
    headerHighlight: "Create Content ",
    headerend: "That Converts",
    text: "Become a master content creator with our convenient photo and video editing tools. Design and publish polished content without the learning curve. ",
  },
  second: {
    image: cpic2,
    headerHighlight: "Leverage Your",
    headerend: "Connections",
    text: "Let your most loyal followers do the selling for you. Designate brand fans who are already singing your praises, and give them the mic. When your fans share your content, their connections are 10X more likely to become new customers. ",
  },
  third: {
    image: cpic3,
    headerHighlight: "Initiate Profitable",
    headerend: "Action",
    text: "Your next big client is just one post away. Every time you post, your fans will be notified and prompted to share your content with their followers, getting your brand the attention it needs to drive real results.",
  },
  fourth: {
    image: cpic4,
    headerHighlight: "Track Fan",
    headerend: "Performance",
    text: "Measure your most active fans and their shares and impressions on each social platform. Reassign fans at any time so you can maximize your exposure.",
  },
};

const Community = () => {
  return (
    <Container sx={{ mt: 15, overflow: "hidden" }}>
      <Typography
        sx={{
          fontFamily: "Sofia-Pro-Black",
          color: "#6c757d",
        }}
        variant="h4"
        fontSize="60px"
      >
        Build Your Community, <br />
        <span style={{ color: "#4F76A6" }}> Boost Your Revenue</span>
      </Typography>
      <Typography
        sx={{ fontSize: 24, fontWeight: 400, color: "gray", pt: 2, pb: 5 }}
        // fontFamily="Sofia-Pro-Black"
        // variant="h5"
      >
        The success of your brand depends on real relationships based on genuine
        interaction. We provide the platform that facilitates meaningful
        connections with your customers, so you’re able to build devoted
        communities, attract new prospects, and turn new followers into paying
        customers
      </Typography>
      <Box sx={{ mt: 0 }}>
        <ImageFirstItem
          image={data.first.image}
          headerHighlight={data.first.headerHighlight}
          headerend={data.first.headerend}
          text={data.first.text}
        />
      </Box>
      <Box sx={{ mt: 10 }}>
        <TextFirstItem
          image={data.second.image}
          headerHighlight={data.second.headerHighlight}
          headerend={data.second.headerend}
          text={data.second.text}
        />
      </Box>
      <Box sx={{ mt: 10 }}>
        <ImageFirstItem
          image={data.third.image}
          headerHighlight={data.third.headerHighlight}
          headerend={data.third.headerend}
          text={data.third.text}
        />
      </Box>
      <Box sx={{ mt: 10, mb: 10 }}>
        <TextFirstItem
          image={data.fourth.image}
          headerHighlight={data.fourth.headerHighlight}
          headerend={data.fourth.headerend}
          text={data.fourth.text}
        />
      </Box>
    </Container>
  );
};

export default Community;
