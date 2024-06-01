//esta funcion retorna router()

// luego importa el objeto de las rutas que tiene las path de public y privates,
import { routes } from "./routes";
import { NotFoundScene } from "./scenes/not-found/not-found.scene";

export function Router() {
  // crea una constante de el pathname que es igual a / y la ruta que esccribe el usuario
  const path = window.location.pathname;

  if(path === '/login'){
    if(localStorage.getItem("token")){
      NavigateTo('/tasks')
      return;
    }
  }

  // la funcion busca la ruta que accedio el usuario y la busca dentro de las rutas creadas en mi SPA
  const publicRoute = routes.public.find((route) => route.path === path);
  const privateRoute = routes.private.find((route) => route.path === path);

  //comprueba si existe esa ruta, si existe envia al usuario a esa escena y luego detiene la funcion
  if (publicRoute) {
    publicRoute.scene();
    return;
  }
  if(privateRoute){
    if(localStorage.getItem("token")){
      privateRoute.scene()
      return;
    }
    NavigateTo('/login')
    return;
  }

  //si no lo encuentra, retorna a la 404 scene
  NavigateTo("/not-found");
}

// se crea una funcion para que cambie la url de la pagina, recibe una path como parametro una path,, mediante el pushstate cambia el url
export function NavigateTo(path) {
  window.history.pushState({}, "", window.location.origin + path);
  Router();
}
