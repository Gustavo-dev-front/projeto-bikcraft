const menu1 = document.querySelector(".menu-1");
const menuBikcraft = document.querySelector(".menu-bikcraft");
const menuSeguro = document.querySelector(".menu-seguro");
const bikcraft = document.querySelector("#bikcraft");
const seguro = document.querySelector("#seguro");

bikcraft.addEventListener('click', bikeOuSeguro);
seguro.addEventListener('click', bikeOuSeguro);

function bikeOuSeguro() {
    if (bikcraft.checked == true) {
        menuSeguro.style.display = "none";
        menuBikcraft.style.display = "grid";
    } else {
        menuSeguro.style.display = "grid";
        menuBikcraft.style.display = "none";
    }
}

const nimbusInput = document.querySelector("#nimbus");
const nimbusDetail = document.querySelector(".detalhes-produto.nimbus");
const magicInput = document.querySelector("#magic");
const magicDetail = document.querySelector(".detalhes-produto.magic");
const nebulaInput = document.querySelector("#nebula");
const nebulaDetail = document.querySelector(".detalhes-produto.nebula");

nimbusInput.addEventListener('click', exibirDetalhes);
magicInput.addEventListener('click', exibirDetalhes);
nebulaInput.addEventListener('click', exibirDetalhes);

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