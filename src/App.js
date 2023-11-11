import "./App.css";
import { ConfigProvider, Spin } from "antd";
import theme from "./Theme/Theme";
import LayoutWrapper from "./config/LayoutWrapper";
import "./styles/main.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { renderRoutes } from "./config/routes";
import { Suspense } from "react";

function App() {
  // Generate the routes based on the renderRoutes array
  const generateRoutes = () => {
    let routes;

    //Register Routes for whole customer panel module
    routes = renderRoutes?.map(([key, route]) => (
      <Route>
        <Route
          key={key}
          path={route.path}
          element={
            <LayoutWrapper
              sideBar={route?.sideBar}
              header={route?.header}
              {...route}
            >
              <route.component />
            </LayoutWrapper>
          }
        />
      </Route>
    ));
    return (
      <>
        {routes}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </>
    );
  };

  // Create the router using createBrowserRouter and createRoutesFromElements
  const router = createBrowserRouter(
    createRoutesFromElements(generateRoutes())
  );

  return (
    <ConfigProvider theme={theme}>
      <Suspense
        fallback={
          <div className="loader">
            <Spin size="large" />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
