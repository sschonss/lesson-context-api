import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { theme } from "../constants/colors";

// Define your context props
export interface ThemeContextProps {
  activeTheme: string;
  toggleTheme: () => void;
  theme: {
    backgroundColor: string;
    color: string;
  };
}

// Create a new empty (undefined) context (you don't need to export it if using only the custom hook)
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

// Create a custom context provider, so all context data will be self-contained
const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeTheme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(activeTheme === "light" ? "dark" : "light");
  };

  const themeContext: ThemeContextProps = {
    activeTheme,
    toggleTheme,
    theme: theme[activeTheme],
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

// Create a custom consumer hook (check Timeline.tsx for usage)
export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeContextProvider!");
  }

  return context;
}
