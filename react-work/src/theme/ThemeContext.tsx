import { createContext, useContext, useState } from "react";
import { themes } from "./themes";  
import type { Theme } from "./themes"; 

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themes[0]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          background: theme.background,
          color: theme.text,
          minHeight: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};