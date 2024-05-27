import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

// Define your context props
export interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

// Create a new empty (undefined) context (you don't need to export it if using only the custom hook)
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

// Create a custom context provider, so all context data will be self-contained
const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeContext: ThemeContextProps = {
    theme,
    toggleTheme,
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

export const themeDark = {
  backgroundColor: "#333",
  color: "#fff",
};

export const themeLight = {
  backgroundColor: "#fff",
  color: "#333",
};
