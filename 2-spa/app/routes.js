//aqui tenemos las rutas y las respuestas a las rutas solicitadas

import { homeScene } from "../scenes/home/home.scene";
import { loginScene } from "../scenes/login/login.scene";
import { registerScene } from "../scenes/register/register.scene";

//importamos las funciones de las escenas
export const routes = {
  public: [
    { path: "/login", scene: loginScene },
    { path: "/register", scene: registerScene },
  ],
  private: [
    { path: "/home", scene: homeScene}
  ]
};
