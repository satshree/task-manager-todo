import { Routes } from "./types";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

export const routes: Routes[] = [
  {
    to: "/",
    text: "home",
    element: <Home />,
  },
  {
    to: "/edit/:id/",
    text: "edit",
    element: <Edit />,
  },
  {
    to: "/*",
    text: "wildcard",
    element: <NotFound />,
  },
];

export function getRoute(routeName: string) {
  for (let route of routes) {
    if (route.text === routeName) return route.to;
  }

  return "";
}
