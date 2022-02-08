import React, { FC } from "react";
import { Typography, Box, Container } from "@mui/material";
import { Parallax } from "react-parallax";

const image = "/images/bg-banner.jpg";

const Banner: FC = () => {
  return (
    <Box sx={{ background: "#212021" }}>
      <Box
        display='flex'
        height='100vh'
        alignItems='center'
        alignContent='center'
        justifyContent='center'
        sx={{
          backgroundClip: "text",
          webkitBackgroundClip: "text",
          color: "transparent",
          backgroundImage: "url(/images/bg-banner.jpg)",
        }}
      >
        <Typography variant='h1' textTransform='uppercase' fontWeight={800}>
          Pedro Novo
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
