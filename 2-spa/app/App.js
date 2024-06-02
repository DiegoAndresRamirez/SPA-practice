//esta funcion hace una verificacion para saber si el root existe, si no, explota un error, esta es nuestra entrada, cada vez que se encienda el servidor, va a buscar este archivo

import { Router } from "./Router";

export function App() {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("se ha producido un error");
  }
  Router();
}
