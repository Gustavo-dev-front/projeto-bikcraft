const listaPerguntas = Array.from(document.querySelectorAll('dt'));
const teste = document.querySelector('[data-question="2"]');
let lastAnswer;

function faq(item) {
    const answerToBeOpen = document.querySelector(`[data-answer="${item.target.getAttribute('data-question')}"]`);
    item.target.classList.toggle('ativa');
    answerToBeOpen.classList.toggle('ativa');

    if (lastAnswer !== answerToBeOpen && lastAnswer !== undefined) {
        lastAnswer.classList.remove('ativa');
    }
    lastAnswer = answerToBeOpen;
}

function listener(item) {
    item.addEventListener('click', faq);
}

listaPerguntas.forEach(listener);