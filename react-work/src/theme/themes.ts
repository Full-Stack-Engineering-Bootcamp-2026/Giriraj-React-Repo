export type Theme = {
  name: string;
  primary: string;
  background: string;
  text: string;
};

export const themes: Theme[] = [
  {
    name: "blue",
    primary: "#3b82f6",
    background: "#ffffff",
    text: "#111827",
  },
  {
    name: "green",
    primary: "#10b981",
    background: "#f0fdf4",
    text: "#064e3b",
  },
  {
    name: "dark",
    primary: "#6366f1",
    background: "#111827",
    text: "#f9fafb",
  },
];