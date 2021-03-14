import { lazy } from "react";

const routes = [
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./Pages/ContactsPage/ContactsPage")),
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./Pages/LoginPage/LoginPage")),
  },
  {
    path: "/registration",
    label: "Registration",
    exact: true,
    component: lazy(() => import("./Pages/ContactsPage/ContactsPage")),
  },
];

export default routes;
