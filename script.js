// Validación del formulario de login
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Aquí puedes agregar lógica para enviar el formulario o autenticación
    alert('Inicio de sesión exitoso');
    loginForm.reset(); // Limpia el formulario después del envío
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Aquí puedes agregar la lógica para enviar el mensaje
    alert('Mensaje enviado exitosamente');
    contactForm.reset(); // Limpia el formulario después del envío
});
