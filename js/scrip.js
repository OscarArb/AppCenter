const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
// Validacion de logueo
function loguear() {
    let User = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;
    if (User == "Vale" && pass == "123") {
        window.location = "principal.html";
    } else {
        alert("Datos Incorrectos");

    }
}
//Registro en la app nuevo metodo
const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'index.html'

})
// login
const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'principal.html'   

})