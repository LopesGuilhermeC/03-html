const form = document.getElementById('formulario');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = formulario.elements['name'].value;
        const email = formulario.elements['email'].value;
        const message = formulario.elements['message'].value;

        const result = `Nome: ${name}\nE-mail: ${email}\nMessage: ${message}`;
        alert(result);
    });