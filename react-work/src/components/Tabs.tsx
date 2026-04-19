import { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

export const Tabs = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: active === i ? theme.primary : "#ccc",
              color: active === i ? "#fff" : "#000",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        Content of {tabs[active]}
      </div>
    </div>
  );
};