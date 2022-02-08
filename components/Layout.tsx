import React, { ReactChild, ReactChildren } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Layout = ({ children }: AuxProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
