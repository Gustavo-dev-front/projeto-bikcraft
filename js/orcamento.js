const menuInputs = Array.from(document.querySelectorAll('.menu-1 input'));
const productInputs = Array.from(document.querySelectorAll('.menu-bikcraft input'));
const parametros = Array.from(new URLSearchParams(location.search));
let lastProduct;

bikeOuSeguro();

function bikeOuSeguro(event) {
    if (event !== undefined) {
        if (event.target.getAttribute('data-menu') == 1) {
            document.querySelector('.menu-bikcraft').style.display = 'grid';
            document.querySelector('.menu-seguro').style.display = 'none';
        } else {
            document.querySelector('.menu-seguro').style.display = 'grid';
            document.querySelector('.menu-bikcraft').style.display = 'none';
        }
    } else if (event === undefined && parametros.length !== 0) {
        const inputToCheck = document.querySelector(`.menu-1 input#${parametros[0][1]}`);
        inputToCheck.checked = 'true';
        document.querySelector(`.menu-${parametros[0][1]}`).style.display = 'grid';
        exibirDetalhes();
    }
}

function exibirDetalhes(event) {
    let detailsToBeOpen;
    if (event !== undefined) {
        detailsToBeOpen = document.querySelector(`[data-name=${event.target.getAttribute('value')}]`)
        detailsToBeOpen.style.display = 'grid';

        if (lastProduct !== detailsToBeOpen && lastProduct !== undefined) {
            lastProduct.style.display = 'none';
        }
        lastProduct = detailsToBeOpen;
    } else {
        const inputToCheck = document.querySelector(`.menu-opcoes input#${parametros[1][1]}`);
        inputToCheck.checked = 'true';
        if (inputToCheck.getAttribute('data-menu') == 1) {
            detailsToBeOpen = document.querySelector(`[data-name=${document.querySelector(`.menu-opcoes input#${parametros[1][1]}`).getAttribute('value')}]`)
            detailsToBeOpen.style.display = 'grid';
            lastProduct = detailsToBeOpen;
        }
    }
}

function firstListener(item) {
    item.addEventListener('click', bikeOuSeguro);
}

function secondListener(item) {
    item.addEventListener('click', exibirDetalhes);
}

menuInputs.forEach(firstListener);
productInputs.forEach(secondListener);