const  formulario = document.querySelector('form')

formulario.addEventListener('submit', (event) =>){
    event.preventDefault();

    const name = formulario.elements['name'],value;
    const email = formulario.elements['email'],value;
    const messageame = formulario.elements['message'],value;

    const result = 'Nome: ${name}\nE-mail: ${email}\nMessage: ${message}';
    alert(result);

}