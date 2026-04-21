// Efeito de scroll suave e revelação de elementos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensagem no console para o Arquiteto
console.log("AXIOM Framework - Estrutura Digital Inicializada.");