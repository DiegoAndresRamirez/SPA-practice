import { NavigateTo } from "../../../24-final-workshop/app/Router";
import { encryptData } from "../../../24-final-workshop/encrypt";
import { fetchApi } from "../../app/helpers/fetchApi";
import styles from './register.styles.css'

export function registerScene() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div class="${styles["container-register"]}">
        <form class="${styles["form"]}">
            <input type="email" placeholder="email" autocomplete="email" class="${styles["input-email-register"]}">
            <input type="name" placeholder="username" autocomplete="name" class="${styles["input-name-register"]}">
            <input type="password" placeholder="password" autocomplete="current-password" class="${styles["input-password-register"]}">
            <button type="submit" class="${styles["button-submit-register"]}">Ingresar</button>
        </form>
    </div>
    `;

  const $myFormRegister = document.querySelector("form");
  const $inputEmailRegister = document.querySelector('input[type="email"]');
  const $inputNameRegister = document.querySelector('input[type="name"]');
  const $inputPasswordRegister = document.querySelector('input[type="password"]');

  $myFormRegister.addEventListener("submit", async function () {
    event.preventDefault();

    if (!$inputEmailRegister.value || !$inputPasswordRegister.value || !$inputNameRegister.value) {
      alert("rellena todos los campos");
    }

    //fetch 

    const newUser = await fetchApi('http://localhost:3000/usuarios', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: $inputNameRegister.value,
            email: $inputEmailRegister.value,
            password: encryptData($inputPasswordRegister.value)
        })
    })
    if(newUser){
        alert("¡usuario creado con exito!")
        NavigateTo('/login')
    }
  });
}
