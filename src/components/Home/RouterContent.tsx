import { useRoutes } from "react-router-dom";
import { routesConfig } from "../../routes";
export default function RouterContent() {
  const routes = useRoutes(routesConfig);
  return routes;
}
