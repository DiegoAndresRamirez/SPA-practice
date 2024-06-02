import { NavigateTo } from "../../../24-final-workshop/app/Router";
import { fetchApi } from "../../app/helpers/fetchApi";
import { decryptData } from "../../encrypt";
import styles from "./login.styles.css";


export function loginScene() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div class="${styles["container-login"]}">
        <form class="${styles["form"]}">
            <input type="email" placeholder="email" autocomplete="email" class="${styles["input-email"]}">
            <input type="password" placeholder="password" autocomplete="current-password" class="${styles["input-password"]}">
            <button type="submit" class="${styles["button-submit"]}">Ingresar</button>
        </form>
    </div>
`;

  const $myForm = document.querySelector("form");
  const $inputEmail = document.querySelector('input[type="email"]');
  const $inputPassword = document.querySelector('input[type="password"]');

  $myForm.addEventListener("submit", async function () {
    event.preventDefault();

    if (!$inputEmail.value || !$inputPassword.value) {
      alert("rellena todos los campos");
    }

    const users = await fetchApi("http://localhost:3000/usuarios");
    const user = users.find(
      (e) =>
        e.email === $inputEmail.value &&
        decryptData(e.password) === $inputPassword.value
    );

    if(user){
      alert("bienvenido")
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem('token', token)
      NavigateTo('/home')
    }
  });
}
