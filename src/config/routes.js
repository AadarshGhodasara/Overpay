import { lazy } from "react";

export const routes = {
  signIn: {
    path: "/signIn",
    component: lazy(() => import("../pages/SignIn/SignIn")),
    exact: true,
    sideBar: false,
    header: false,
  },
  signUp: {
    path: "/signUp",
    component: lazy(() => import("../pages/SignUp/SignUp")),
    exact: true,
    sideBar: false,
    header: false,
  },
  dashboard: {
    path: "/",
    component: lazy(() => import("../pages/Dashboard/Dashboard")),
    exact: true,
    sideBar: true,
    header: true,
    headerTitle: "Dashboard",
  },
  invoices: {
    path: "/Invoices",
    component: lazy(() => import("../pages/Invoices/Invoices")),
    exact: true,
    sideBar: true,
    header: true,
    headerTitle: "Invoices",
  },
};

export const renderRoutes = Object.entries(routes);
