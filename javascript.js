
//Verificar que el contenido de contactos tenga valores
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");


    if (name === "" || email === "" || subject === "" || message === "") {
        formMessage.textContent = "Todos los campos son obligatorios.";
        return;
    }


    if (!validateEmail(email)) {
        formMessage.textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    }


    formMessage.textContent = "Formulario enviado con éxito.";
    formMessage.style.color = "green";
});


function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

//Animacion de barra de navegacion
let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY; 

        if (currentScroll > lastScrollTop) {
            
            navbar.style.top = "-80px"; 
        } else {
            
            navbar.style.top = "0";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    });


//Codigo para el boton de tema oscuro
const themeToggleButton = document.getElementById('theme-toggle');

window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        themeToggleButton.textContent = theme === 'dark' ? '☀️ Cambiar a claro' : '🌙 Cambiar a oscuro';
    }
});

themeToggleButton.addEventListener('click', () => {
    themeToggleButton.classList.add('fade');
    setTimeout(() => {
        themeToggleButton.classList.remove('fade');
    }, 500);

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️ Cambiar a claro';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.textContent = '🌙 Cambiar a oscuro';
        localStorage.setItem('theme', 'light');
    }
});

