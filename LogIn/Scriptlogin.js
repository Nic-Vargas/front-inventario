window.globalCredenciales = {

username: 'admin',
password: 'claveI'
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let enteredUsername = document.querySelector('input[type="text"]').value;
    let enteredPassword = document.querySelector('input[type="password"]').value;

    let storedUsername = window.globalCredentials.username;
    let storedPassword = window.globalCredentials.password;

    if (enteredUsername === username && enteredPassword === password) {
        window.location.href = '/Agregar/index.html';
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});
