//aqui tenemos las rutas y las respuestas a las rutas solicitadas
//importamos las funciones de las escenas
import { loginScene } from "./scenes/login/login.scene";
import { NotFoundScene } from "./scenes/not-found/not-found.scene";
import { RegisterScene } from "./scenes/register/register.scene";
import { tasksScene } from "./scenes/tasks/tasks.scene";


//las guardamos en el objeto routes
export const routes = {
  public: [
    { path: "/login", scene: loginScene },
    { path: "/not-found", scene: NotFoundScene },
    { path: "/register", scene: RegisterScene },
  ],
  private: [
    { path: "/tasks", scene: tasksScene },
  ]
};
