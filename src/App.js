import "./App.css";
import { ConfigProvider } from "antd";
import theme from "./Theme/Theme";
import LayoutWrapper from "./config/LayoutWrapper";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./styles/main.scss";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <LayoutWrapper>
        <Dashboard />
      </LayoutWrapper>
    </ConfigProvider>
  );
}

export default App;
