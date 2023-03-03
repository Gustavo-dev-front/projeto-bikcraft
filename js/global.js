const itensMenu = Array.from(document.querySelectorAll('header nav a'));

function itemAtivo(item) {
    if (document.location.href.includes(item.href)) {
        item.classList.add('ativo');
    }
}

itensMenu.forEach(itemAtivo);