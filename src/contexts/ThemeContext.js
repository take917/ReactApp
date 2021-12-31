import React from "react";

export const THEMES = {
  light: {
    color: "black",
    backgroundColor: "white"
  },
  dark: {
    color: "white",
    backgroundColor: "#222222"
  }
};

export const ThemeContexts = React.createContext([THEMES.dark, () => {}]);
