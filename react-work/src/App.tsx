import { ThemeProvider } from "./theme/ThemeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Input } from "./components/Input";
import { Tabs } from "./components/Tabs";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>Themed UI</h1>

        <ThemeSwitcher />

        <Input />
        <br /><br />
        <Tabs />
      </div>
    </ThemeProvider>
  );
}

export default App;