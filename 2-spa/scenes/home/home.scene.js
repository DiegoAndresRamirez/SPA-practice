export function homeScene(){
    const root = document.getElementById('root')
    root.innerHTML = `
    <div>
        <p id="hola">hola mundo desde home</p>
    </div>
    `;

    const hola = document.getElementById('hola')
    hola.addEventListener('click', function(){
        alert("click en hola")
    })
}