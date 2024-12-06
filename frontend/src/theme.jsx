import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
            black : "black",
            secondary:"grey"
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          myBg:{
            main: "rgb(241 245 249)",
            specialBg:"white"
          },
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
            black : "black",
             secondary:"grey"
          },
          myBg:{
            main: "rgb(30 41 59)",
            specialBg:"black"
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};