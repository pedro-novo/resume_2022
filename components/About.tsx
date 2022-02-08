import React, { FC } from "react";
import { Typography, Box, Container } from "@mui/material";

const About: FC = () => {
  return (
    <Box
      height='100vh'
      sx={{ overflowX: "hidden", overflowY: "auto", perspective: "10px" }}
    >
      <Box
        position='relative'
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100%'
        zIndex={-1}
        sx={{
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src='/images/galaxy.jpg'
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            zIndex: -1,
            transform: "translateZ(-10px) scale(2)",
          }}
        />
        <Box display='flex' flexDirection='column' textAlign='center'>
          <Typography color='white'>About Me</Typography>
          <Typography color='white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            libero nulla eos, accusamus magnam dolorum et praesentium eaque quo
            provident.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
