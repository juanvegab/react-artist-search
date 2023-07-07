import { RouteObject } from "react-router-dom";

type LocalRoute = {
  id?: string;
  label: string;
  isInNav?: boolean;
};

export type RouteItem = RouteObject & LocalRoute;
