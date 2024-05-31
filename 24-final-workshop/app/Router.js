import { routes } from "./routes";
import { NotFoundScene } from "./scenes/not-found/not-found.scene";

export function Router() {
  const path = window.location.pathname;

  const publicRoute = routes.public.find((route) => route.path === path);

  if (publicRoute) {
    publicRoute.scene();
    return;
  }
  NavigateTo("/not-found");
}
export function NavigateTo(path) {
  window.history.pushState({}, "", window.location.origin + path);
  Router();
}
