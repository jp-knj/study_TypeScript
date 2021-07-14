import React, { CSSProperties } from "react";
import { RGBColorType } from "./type";
import { AdjustmentAction, reducer } from "./reducer";

interface RGBContextColorType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}
export const RGBContext = React.createContext<RGBContextColorType>(
  {} as RGBContextColorType
);

export const RGBContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <RGBContext.Provider value={{ ...rgb, dispatch }}>
      {children}
    </RGBContext.Provider>
  );
};
type Themes = {
  [key: string]: CSSProperties;
};

const defaultTheme: Themes = {
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: { backgroundColor: "#555", color: "white" },
};

export const ThemeContext = React.createContext<Themes>(defaultTheme);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
