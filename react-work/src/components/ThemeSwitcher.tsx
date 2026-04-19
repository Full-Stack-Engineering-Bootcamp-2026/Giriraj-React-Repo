import { useTheme } from "../theme/ThemeContext";
import { themes } from "../theme/themes";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {themes.map((t) => (
        <div
          key={t.name}
          onClick={() => setTheme(t)}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: t.primary,
            cursor: "pointer",
            border: "2px solid #000",
          }}
        />
      ))}
    </div>
  );
};