import { fetchApi } from '../../helpers/fetch-api';
import { NavigateTo } from  '../../Router.js'
import { encryptData } from '../../../encrypt'
import styles from './register.styles.css'

export function RegisterScene(){
    const root = document.getElementById("root")
    root.innerHTML = `
        <form class="${styles.formulario}">
            <input type="text" placeholder="nombre" autocomplete="name">
            <input type="email" placeholder="email" autocomplete="email">
            <input type="password" placeholder="password" autocomplete="current-password">
            <button type="submit">Register</button>
        </form>
    `;

    const $nameHtml = root.querySelector('input[type="text"')
    const $emailHtml = root.querySelector('input[type="email"')
    const $passwordHtml = root.querySelector('input[type="password"')
    const $myForm = root.getElementsByTagName('form')[0];

    $myForm.addEventListener('submit',async function(){
        event.preventDefault();

        if(!$nameHtml.value || !$emailHtml.value || !$passwordHtml.value){
            alert("rellena todos los campos")
        }

        //fetch

        const userCreated = await fetchApi('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: $nameHtml.value,
                email: $emailHtml.value,
                password: encryptData($passwordHtml.value)
            })
        })

        if(userCreated){
            alert("usuario creado con exito")
            NavigateTo('/login')
        }
    });
}