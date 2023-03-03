const inputList = Array.from(document.querySelectorAll('.menu-opcoes input'));

function bikeOuSeguro() {
    if (inputList[inputList.indexOf(document.querySelector(`input#bikcraft`))].checked == true) {
        document.querySelector(".menu-seguro").style.display = "none";
        document.querySelector(".menu-bikcraft").style.display = "grid";
    } else {
        document.querySelector(".menu-seguro").style.display = "grid";
        document.querySelector(".menu-bikcraft").style.display = "none";
    }
}

const nimbusInput = document.querySelector("#nimbus");
const nimbusDetail = document.querySelector(".detalhes-produto.nimbus");
const magicInput = document.querySelector("#magic");
const magicDetail = document.querySelector(".detalhes-produto.magic");
const nebulaInput = document.querySelector("#nebula");
const nebulaDetail = document.querySelector(".detalhes-produto.nebula");

function exibirDetalhes() {
    if (nimbusInput.checked == true) {
        nimbusDetail.style.display = "grid";
        magicDetail.style.display = "none";
        nebulaDetail.style.display = "none";
    } else if (magicInput.checked == true) {
        magicDetail.style.display = "grid";
        nimbusDetail.style.display = "none";
        nebulaDetail.style.display = "none";
    } else {
        nebulaDetail.style.display = "grid";
        nimbusDetail.style.display = "none";
        magicDetail.style.display = "none";
    }
}

/* HABILITAR INPUTS CONFORME SELEÇÕES */

function observarInputsMenu(item) {
    item.addEventListener('click', bikeOuSeguro);
}

function observarBikeSelecionada(item) {
    item.addEventListener('click', exibirDetalhes);
}

Array.from(document.querySelectorAll('.menu-1 input')).forEach(observarInputsMenu);

Array.from(document.querySelectorAll('.menu-bikcraft input')).forEach(observarBikeSelecionada);

/* ATIVAR PRODUTO QUE FOI SELECIONADO NAS TELAS ANTERIORES */
const parametros = Array.from(new URLSearchParams(location.search));

function ativarProduto() {
    document.querySelector(`.menu-1 input#${parametros[0][1]}`).checked = 'true';
    bikeOuSeguro();
    document.querySelector(`.menu-${parametros[0][1]} input#${parametros[1][1]}`).checked = 'true';
    exibirDetalhes();
}

parametros.forEach(ativarProduto);