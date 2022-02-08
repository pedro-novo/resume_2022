import { Box, Container } from "@mui/material";
import type { NextPage } from "next";
import About from "../components/About";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Socials from "../components/Socials";
const Home: NextPage = () => {
  return (
    <Box sx={{ background: "#212021" }}>
      {/* Banner */}
      <Banner />

      {/* About me */}

      <About />

      {/* Skills */}

      <Skills />

      {/* Experience */}

      <Experience />

      {/* Socials */}

      <Socials />
    </Box>
  );
};

export default Home;
