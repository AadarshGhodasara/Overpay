import "./App.css";
import { ConfigProvider } from "antd";
import theme from "./Theme/Theme";
import LayoutWrapper from "./config/LayoutWrapper";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./styles/main.scss";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <LayoutWrapper sideBar={true} header={true}>
        <Dashboard />
        {/* <SignIn /> */}
        {/* <SignUp /> */}
      </LayoutWrapper>
    </ConfigProvider>
  );
}

export default App;
