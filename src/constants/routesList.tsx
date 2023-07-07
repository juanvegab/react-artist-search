import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { ArtistDetail } from "../pages/ArtistDetail";
import { RouteObject } from "react-router-dom";

const ROUTES_LIST: Array<RouteObject> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-list",
    element: <Favorites />,
  },
  {
    path: "/artist/:id",
    element: <ArtistDetail />,
  },
];

export { ROUTES_LIST };
