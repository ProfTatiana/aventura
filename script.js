const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);

        if (proximoPasso) {  // Verifica se o próximo passo existe
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
        } else {
            console.warn(`O próximo passo com ID ${proximoPassoId} não existe.`);
        }
    });
});
