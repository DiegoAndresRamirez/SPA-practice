import styles from "./login.styles.css";

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

  $myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!$emailHtml.value || !$passwordHtml.value) {
      alert("rellena todos los campos");
    }

    console.log($emailHtml.value, $passwordHtml.value);
  });
}
