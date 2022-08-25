function typeWriter(elemento) {
    var textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

var titulo = document.querySelector('h1');
typeWriter(titulo);

//SE VOCÊ QUISER ESCOLHER OUTRO ELEMENTO BASTA ADC var titulo = document.querySelector('h1'); 
//OU MUDAR O CAMPO DO H1 PARA O CORRESPONDE ELEMENTO