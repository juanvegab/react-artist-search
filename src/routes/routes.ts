import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { ROUTES_LIST } from "../constants/routesList";

const Routes: FC = () => {
  return useRoutes(ROUTES_LIST);
};

export { Routes };
