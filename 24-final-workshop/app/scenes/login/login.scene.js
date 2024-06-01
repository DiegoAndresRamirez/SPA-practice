import styles from "./login.styles.css";
import { fetchApi } from "../../helpers/fetch-api";
import { decryptData } from "../../../encrypt";
import { NavigateTo } from "../../Router";

export function loginScene() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <form>
        <input type="email" placeholder="email" autocomplete="email">
        <input type="password" placeholder="password" autocomplete="current-password">
        <button type="submit">Enter</button>
    </form>
    `;

  const $emailHtml = root.querySelector('input[type="email"]');
  const $passwordHtml = root.querySelector('input[type="password"]');

  const $myForm = root.getElementsByTagName("form")[0];

  $myForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!$emailHtml.value || !$passwordHtml.value) {
      alert("rellena todos los campos");
    }

    //fetch

    const users = await fetchApi("http://localhost:3000/users");
    const user = users.find(
      (user) =>
        user.email === $emailHtml.value &&
        decryptData(user.password) === $passwordHtml.value
    );
    if (user) {
      alert("bienvenido");
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("token", token);
      NavigateTo("/tasks");
    } else {
      alert("usuario no encontrado");
    }
  });
}
