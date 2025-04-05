const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
function loguear() {
    let User = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;
    if (User == "Vale" && pass == "123") {
        window.location = "principal.html";
    } else {
        alert("Datos Incorrectos");

    }
}