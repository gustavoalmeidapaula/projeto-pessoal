window.addEventListener('scroll', function() {
    const nav = document.querySelector('.barra-inicial');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#333';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

document.getElementById('welcomeButton').addEventListener('click', function() {
    alert('Seja Bem-vindo(a) ao site do Projeto' + 
        '\n Nordeste - Cores e Ritmos!'
         )
});

