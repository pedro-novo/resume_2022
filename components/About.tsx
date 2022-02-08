import React, { FC } from "react";
import { Typography, Box, Container } from "@mui/material";
import { Parallax } from "react-parallax";

const galaxy = "/images/galaxy.jpg";

const About: FC = () => {
  return (
    <Parallax bgImage={galaxy} strength={600}>
      <Box height='100vh'>
        <Box
          left='50%'
          top='50%'
          position='absolute'
          padding='20px'
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography
            color='white'
            textAlign='center'
            variant='h2'
            marginBottom={4}
          >
            About Me
          </Typography>
          <Typography color='white' variant='subtitle1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            libero nulla eos, accusamus magnam dolorum et praesentium eaque quo
            provident.
          </Typography>
        </Box>
      </Box>
    </Parallax>
  );
};

export default About;
