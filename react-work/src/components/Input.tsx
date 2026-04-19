import { useTheme } from "../theme/ThemeContext";

export const Input = () => {
  const { theme } = useTheme();

  return (
    <input
      placeholder="Type something..."
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: `2px solid ${theme.primary}`,
        outline: "none",
        color: theme.text,
        background: "transparent",
      }}
    />
  );
};