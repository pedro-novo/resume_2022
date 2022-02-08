import React, { FC } from "react";
import { Typography, Box, Container } from "@mui/material";

const Banner: FC = () => {
  return (
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
  );
};

export default Banner;
