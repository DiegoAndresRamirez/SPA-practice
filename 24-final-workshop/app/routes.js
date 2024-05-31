//aqui tenemos las rutas y las respuestas a las rutas solicitadas

import { loginScene } from "./scenes/login/login.scene";
import { NotFoundScene } from "./scenes/not-found/not-found.scene";

export const routes = {
  public: [
    { path: "/login", scene: loginScene },
    { path: "/not-found", scene: NotFoundScene },
  ],
};
