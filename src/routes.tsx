import { Routes } from "./types";

import Home from "./pages/Home";
import ComponentList from "./pages/ComponentList";

export const routes: Routes[] = [
  {
    to: "/",
    text: "home",
    element: <Home />,
  },
  {
    to: "/components",
    text: "components",
    element: <ComponentList />,
  },
];

export function getRoute(routeName: string) {
  for (let route of routes) {
    if (route.text === routeName) return route.to;
  }

  return "";
}