import { lazy } from "react";

const routes = [
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    private: true,
    restricted: false,
    component: lazy(() => import("./Pages/ContactsPage/ContactsPage")),
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    private: false,
    restricted: true,
    component: lazy(() => import("./Pages/LoginPage/LoginPage")),
  },
  {
    path: "/registration",
    label: "Registration",
    exact: true,
    private: false,
    restricted: true,
    component: lazy(() => import("./Pages/ContactsPage/ContactsPage")),
  },
];

export default routes;
