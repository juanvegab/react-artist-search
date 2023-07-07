import { RouteItem } from "../typings/routes";
import { Home } from "../pages/Home";

const ROUTES_LIST: Array<RouteItem> = [
  {
    id: "0",
    label: "Home",
    isInNav: true,
    path: "/",
    element: <Home />,
  },
];

const NAV_ROUTES = ROUTES_LIST.filter((r) => r.isInNav);

export { ROUTES_LIST, NAV_ROUTES };
